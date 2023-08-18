import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Base64;
import java.util.Scanner;

import javax.crypto.Cipher;


public class RSA_Algorithm {
    private PrivateKey privateKey;
    private PublicKey publicKey;
    private int key_size = 1024;
    private Scanner sc = new Scanner(System.in);

    public void init() {
        try {
            // Create key pair instance using RSA algorithm
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");

            // Initialize the size of key pair
            keyPairGenerator.initialize(key_size);

            // Generate key pair using key pair instance
            KeyPair keyPair = keyPairGenerator.generateKeyPair();

            // Get the pair and split to private and public keys
            privateKey = keyPair.getPrivate();
            publicKey = keyPair.getPublic();

        } catch (Exception e) {
            System.out.println("Error: "+e.getMessage());
        }
    }

    public String encrypt(String message) throws Exception {
        byte[] messageInBytes = message.getBytes();

        // Create Cipher instance using RSA(Rivest-Shamir-Adleman) algorithm with ECB(Electronic Codebook) mode 
        // PKCS1Padding is used as padding scheme since we use RSA algorithm
        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");

        // Use the public key for encryption
        cipher.init(Cipher.ENCRYPT_MODE, publicKey);

        // Encrypt the message with cipher instance after using the public key
        byte[] encryptedBytes = cipher.doFinal(messageInBytes);

        // return encrypted message in String format
        return encode(encryptedBytes);
    }

    public String decrypt(String encryptedMessage) throws Exception {
        byte[] messageInBytes = decode(encryptedMessage);

        Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1Padding");

        // Use the private key to decrypt
        cipher.init(Cipher.DECRYPT_MODE, privateKey);

        byte[] decryptedBytes = cipher.doFinal(messageInBytes);

        // return the original message after converting the decrytped byte
        return new String(decryptedBytes, "UTF-8");
    }

    private String encode(byte[] data) {
        return Base64.getEncoder().encodeToString(data);
    }

    private byte[] decode(String data) {
        return Base64.getDecoder().decode(data);
    }

    public void printKeyPair() {
        System.out.println("Public Key: "+encode(publicKey.getEncoded())+"\n");
        System.out.println("Private Key: "+encode(privateKey.getEncoded())+"\n");
    }

    public static void main(String[] args) {
        try {
            System.out.println("Welcome to encryption/decryption program using RSA algorithm");
            System.out.println("NOTE: Input \"NO\" to stop using the program\n");
            String message;
            while(true) {
                RSA_Algorithm rsa = new RSA_Algorithm();

                System.out.print("Enter a message to encrypt: ");
                message = rsa.sc.nextLine();

                if(message.equalsIgnoreCase("No")) {
                    break;
                }

                rsa.init();
                // rsa.printKeyPair();

                String encryptedMessage = rsa.encrypt("Hello");
                String decryptedMessage = rsa.decrypt(encryptedMessage);

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