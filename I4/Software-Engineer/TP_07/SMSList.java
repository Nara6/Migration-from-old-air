import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.io.IOException;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;
import java.util.Base64;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public class SMSList {
    private SecretKey key;
    private final int KEY_SIZE = 128;
    private final int DATA_LENGTH = 128;
    private Cipher encryptionCipher;

    public void init() throws Exception {
        KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
        keyGenerator.init(KEY_SIZE);
        key = keyGenerator.generateKey();
    }

    ArrayList<SMS> sms = new ArrayList<SMS>();
    Scanner scanner = new Scanner(System.in);
    List<String> st = new ArrayList<String>();

    public SMSList() {
        // sms.add(new SMS("012345678", "098766543", "Text", "B SL SOUY", "NEW"));
    }

    static int max_caracters_per_sms = 16;

    public String encrypt(String data) throws Exception {
        byte[] dataInBytes = data.getBytes();
        encryptionCipher = Cipher.getInstance("AES/GCM/NoPadding");
        encryptionCipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] encryptedBytes = encryptionCipher.doFinal(dataInBytes);
        return encode(encryptedBytes);
    }

    public String decrypt(String encryptedData) throws Exception {
        byte[] dataInBytes = decode(encryptedData);
        Cipher decryptionCipher = Cipher.getInstance("AES/GCM/NoPadding");
        GCMParameterSpec spec = new GCMParameterSpec(DATA_LENGTH, encryptionCipher.getIV());
        decryptionCipher.init(Cipher.DECRYPT_MODE, key, spec);
        byte[] decryptedBytes = decryptionCipher.doFinal(dataInBytes);
        return new String(decryptedBytes);
    }

    private String encode(byte[] data) {
        return Base64.getEncoder().encodeToString(data);
    }

    private byte[] decode(String data) {
        return Base64.getDecoder().decode(data);
    }

    public void AddSMS() {
        try {
            System.out.println("1. Send new SMS with Encrypted content using password method");
            System.out.printf("\n\tPLEASE INPUT INFO DOWN BELOW!!!");
            System.out.print("\n\tPHONE NUMBER: ");
            String phoneNumber = scanner.nextLine();
            System.out.print("\tRECEIVER NUMBER: ");
            String receiverNumber = scanner.nextLine();
            System.out.print("\tTYPE (TEXT|MMS): ");
            String type = scanner.next();
            System.out.print("\tCONTENT: ");
            String content = scanner.next();
            System.out.print("\tSTATUS (READ|NEW): ");
            String status = scanner.next();
            SMSList encryptContent = new SMSList();
            encryptContent.init();
            String encryptedContent = encryptContent.encrypt(content);
            // sms.add(new SMS(phoneNumber, receiverNumber, type, encryptedContent,
            // status));
            String filename = "SMS.txt";
            Files.write(Path.of(filename, new String[] {}), "\n".getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), phoneNumber.getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), ",".getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), receiverNumber.getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), ",".getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), type.getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), ",".getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), encryptedContent.getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), ",".getBytes(), StandardOpenOption.APPEND);
            Files.write(Path.of(filename, new String[] {}), status.getBytes(), StandardOpenOption.APPEND);

        } catch (Exception e) {
        }

    }

    public void showSMS() {
        String filename = "SMS.txt";
        try {
            var textList = Files.readAllLines(Path.of(filename, new String[] {}));
            for (var txt : textList) {

            }
            String[] array = st.toArray(new String[0]);
            for (String eachString : array) {

            }
        } catch (Exception e) {

        }
    }

    public void readDataFromFIle(String filename) throws IOException {
        List<String> textList = Files.readAllLines(Path.of(filename, new String[] {}));

        for (String txt : textList) {
            System.out.println(txt);
            // SMS sms = new SMS();
            // sms.toSMS(txt);
            sms.toSMS(txt);
        }
    }

    public void viewSMSdetails() {
        System.out.print("Please Input Index to Display: ");
        int index = scanner.nextInt();
        int i = 0;
        for (SMS sms : this.sms) {
            if (index == i) {
                sms.showDetail();
                break;
            }
            i++;
        }
    }

    public static void main(String[] args) throws IOException {
        SMSList sms = new SMSList();
        // sms.AddSMS();
        // sms.AddSMS();
        // sms.encryptContent();
        // sms.showSMS();
        sms.viewSMSdetails();
    }
}
