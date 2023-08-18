
import java.util.Base64;
import java.util.Scanner;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.GCMParameterSpec;

public class AES_Algorithm {
    private SecretKey secretKey;
    private int Key_size = 128; // Possible key size 128, 192 and 256 bits
    private int length = 128;
    private Cipher encryptCipher;
    private Scanner sc = new Scanner(System.in);

    public void init() throws Exception {
        // Create a key using AES algorithm
        KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
        // Initialize the size of key
        keyGenerator.init(Key_size);

        // Use generated AES key to generate secret key
        secretKey = keyGenerator.generateKey();
        // System.out.println("SecretKey: "+secretKey+"\n");
    }

    public String encrypt(String message) throws Exception{
        // Convert inputted message to byte
        byte[] messageInBytes = message.getBytes();

        // Create cipher object using AES algorithm, GCM mode(Galois/Counter Mode) 
        //and No padding since GCM mode doesn't require padding for adding to the inputted data to be encrypted 
        encryptCipher = Cipher.getInstance("AES/GCM/NoPadding");

        // Use cipher object to initialize cipher object with encryption mode using generated secret key
        encryptCipher.init(Cipher.ENCRYPT_MODE, secretKey);

        // After initializate the cipher object to operate encryption mode
        // Input the converted message as byte in doFinal function to encrypt it as byte
        byte[] encryptedBytes = encryptCipher.doFinal(messageInBytes);

        // Finally we return the encrypted byte and encode it to string
        return encode(encryptedBytes); 
    }

    public String decrypt(String encryptedMessage) throws Exception {

        // Get the encrypted message and decode it to byte
        byte[] messageInBytes = decode(encryptedMessage);

        Cipher decryptCipher = Cipher.getInstance("AES/GCM/NoPadding");

        // Since we want to decrypt the message from encryption,
        // we need to use parameter and we are using GCM mode, so we use GCM parameter
        // Using the length same as the key(the key size for generating the key)
        // Apply the initial vector using getIV() function of cipher object
        GCMParameterSpec spec = new GCMParameterSpec(length, encryptCipher.getIV());
        decryptCipher.init(Cipher.DECRYPT_MODE, secretKey, spec);

        byte[] decryptedBytes = decryptCipher.doFinal(messageInBytes);

        return new String(decryptedBytes);
        
    }

    // Convert byte to String
    private String encode(byte[] data) {
        return Base64.getEncoder().encodeToString(data);
    }

    // Convert String to byte
    private byte[] decode(String data) {
        return Base64.getDecoder().decode(data);
    }

    public static void main(String[] args) {
        try {
            System.out.println("Welcome to encryption/decryption program using AES algorithm");
            System.out.println("NOTE: Input \"No\" to stop using the program\n");
            String message;
            while(true){
                AES_Algorithm aes = new AES_Algorithm();
                System.out.print("Enter a message to encrypt: ");
                message = aes.sc.nextLine();

                if(message.equalsIgnoreCase("No")) {
                    break;
                }

                aes.init();
                String encryptedMessage = aes.encrypt(message);
                String decryptedMessage = aes.decrypt(encryptedMessage);

                System.out.println("Encrypted message: "+encryptedMessage);
                System.out.println("Decrypted message: "+decryptedMessage);
                System.out.println("\n");

            }
            System.out.println("Thank you for using encryption/decryption program");

        } catch (Exception e) {
            System.out.println("Error: "+e.getMessage());
        }
    }
}