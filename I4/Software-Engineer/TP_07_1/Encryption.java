import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Random;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.PBEParameterSpec;

public class Encryption {

    public Encryption() {

    }

    public void encrypt(String filename, String password) throws Exception {
        try {

            FileInputStream inFile = new FileInputStream(filename);
            FileOutputStream outFile = new FileOutputStream(filename + ".des");
            PBEKeySpec keySpec = new PBEKeySpec(password.toCharArray());
            SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("PBEWithMD5AndDES");
            SecretKey passwordKey = keyFactory.generateSecret(keySpec);

            byte[] salt = new byte[8];
            Random rnd = new Random();
            rnd.nextBytes(salt);
            int iterations = 100;

            PBEParameterSpec parameterSpec = new PBEParameterSpec(salt, iterations);

            Cipher cipher = Cipher.getInstance("PBEWithMD5AndDES");
            cipher.init(Cipher.ENCRYPT_MODE, passwordKey, parameterSpec);

            outFile.write(salt);

            byte[] input = new byte[64];
            int bytesRead;
            while ((bytesRead = inFile.read(input)) != -1) {
                byte[] output = cipher.update(input, 0, bytesRead);
                if (output != null)
                    outFile.write(output);
            }
            byte[] output = cipher.doFinal();
            if (output != null)
                outFile.write(output);
            inFile.close();
            outFile.flush();
            outFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}