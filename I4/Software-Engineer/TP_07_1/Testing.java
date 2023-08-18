import java.util.Scanner;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

public class Testing {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);

        System.out.print("From: ");
        String phoneNumber = sc.nextLine();
        System.out.print("To: ");
        String Receiver = sc.nextLine();
        System.out.print("Subject: ");
        String subject = sc.nextLine();
        System.out.print("Content: ");
        String Content = sc.nextLine();
        String Line;
        Line = "\n" + phoneNumber + "\t" + Receiver + "\t" + subject + "\t" + Content;
        String filename = "SMS.txt";
        Files.write(Path.of(filename, new String[] {}), Line.getBytes(), StandardOpenOption.APPEND);
        // Files = System.out.println(Line);
    }

}
