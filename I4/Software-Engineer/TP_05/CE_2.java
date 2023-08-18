import java.util.Scanner;

public class CE_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Message: ");
        String message = scanner.nextLine();
        MessageCoder msg = new MessageCoder(message);
        System.out.println("Message After Encode: " + msg.Encoder());
        System.out.print("\nDo you wish to see your message before encoding?(Y/N): ");
        String check = scanner.next();
        if (check.equalsIgnoreCase("Y")) {
            System.out.println("Message After Decode: " + msg.Decoder());
        } else if (check.equalsIgnoreCase("N")) {
            System.out.println("Exit!!!");
        }
    }
}
