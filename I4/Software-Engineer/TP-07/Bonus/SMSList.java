import java.io.FileInputStream;
import java.io.FileOutputStream;
//import java.security.AlgorithmParameters;
//import java.security.SecureRandom;
import java.security.spec.KeySpec;
import java.util.Scanner;
//import java.util.ArrayList;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import java.io.BufferedReader;
import java.io.FileReader;
import java.nio.file.*;
import java.nio.file.StandardOpenOption;
import java.util.HashMap;
//import java.io.IOException;
import java.io.FilenameFilter;

import java.io.File; // Import the File class
//import java.io.FileWriter;   // Import the FileWriter class

public class SMSList {
    Scanner sc = new Scanner(System.in);
    HashMap<String, String> map = new HashMap<String, String>();

    public void menu() {
        System.out.println("---------- Welcome to private SMS app -----------");
        System.out.println("1. List all SMS");
        System.out.println("2. View SMS Detail");
        System.out.println("3. Send SMS");
        System.out.println("4. Remove SMS by index");
        System.out.println("5. Quit");
    }

    public void createUser() throws Exception {
        System.out.print("Username: ");
        String username = sc.nextLine();
        System.out.print("Password: ");
        String password = sc.nextLine();
        String filename = "user.txt";
        String line = "\n" + username + " " + password;
        Files.write(Path.of(filename), line.getBytes(), StandardOpenOption.APPEND);

    }

    public boolean Match(String username, String password) {
        if (this.username.equalsIgnoreCase(username)) {
            for (SMS sms : this.sms) {
                map.put(username, password);
            }
        }
    }

    // list all SMSes
    public void listSMS() {
        File directoryPath = new File("~/Desktop/I4/TP_07");
        // List text files only
        System.out.println("\n------------Text messages------------");
        File[] files = directoryPath.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File dir, String name) {
                return name.endsWith(".txt");
            }
        });
        for (File file : files) {
            System.out.println(file.getName());
        }
    }

    // method for view sms detail with decryption password
    public void viewDetail() throws Exception {
        // password must be the same for both encryption and decryption
        System.out.println("Have to input the same password for both encryption and decryption");
        System.out.print("Input a password: ");
        String password = sc.nextLine();
        // String password = "javapapers";
        FileInputStream saltFis = new FileInputStream("salt.enc");
        byte[] salt = new byte[8];
        saltFis.read(salt);
        saltFis.close();

        // reading the iv
        FileInputStream ivFis = new FileInputStream("iv.enc");
        byte[] iv = new byte[16];
        ivFis.read(iv);
        ivFis.close();

        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        KeySpec keySpec = new PBEKeySpec(password.toCharArray(), salt, 65536, 256);
        SecretKey tmp = factory.generateSecret(keySpec);
        SecretKey secret = new SecretKeySpec(tmp.getEncoded(), "AES");

        // file decryption
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.DECRYPT_MODE, secret, new IvParameterSpec(iv));
        FileInputStream fis = new FileInputStream("encryptedfile.des");
        FileOutputStream fos = new FileOutputStream("plainfile_decrypted.txt");
        byte[] in = new byte[64];
        int read;
        while ((read = fis.read(in)) != -1) {
            byte[] output = cipher.update(in, 0, read);
            if (output != null)
                fos.write(output);
        }
        byte[] output = cipher.doFinal();
        if (output != null)
            fos.write(output);
        fis.close();
        fos.flush();
        fos.close();
        System.out.println("Message Decrypted.");
    }

    // method view readable smses
    public void viewReadable() throws Exception {
        File dir = new File("~/Desktop/I4/TP_07");
        dir.mkdirs();
        System.out.print("Input a message name: ");
        String filename = sc.nextLine();
        File file = new File(dir, filename);
        BufferedReader br = new BufferedReader(new FileReader(file));
        // BufferedReader br = new BufferedReader(new
        // FileReader("G:/TP_SE/TP7/src/ex3/decrypt.txt"));
        for (String line; (line = br.readLine()) != null;) {
            System.out.print(line);
        }
        br.close();
    }

    // method remove smses by index
    public void removeName() {
        File dir = new File("G:/TP_SE/TP7/src/ex3");
        dir.mkdirs();
        System.out.print("Input a message name: ");
        String filename = sc.nextLine();
        File myObj = new File(dir, filename);
        // File myObj = new File("G:/TP_SE/TP7/src/ex3");
        if (myObj.delete()) {
            System.out.println("Deleted the message: " + myObj.getName());
        } else {
            System.out.println("Failed to delete the message.");
        }
    }

}
