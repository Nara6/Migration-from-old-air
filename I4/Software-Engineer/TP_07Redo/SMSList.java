import java.util.Scanner;
import java.nio.file.Files;
import java.nio.file.OpenOption;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.ArrayDeque;
import java.util.List;
import java.util.Scanner;
import java.io.IOException;

public class SMSList {

    ArrayDeque<SMS> sms = new ArrayDeque<SMS>();
    Scanner scanner = new Scanner(System.in);

    public void addSMS() throws IOException {
        System.out.print("\n\tPassword to be Encrypted: ");
        String password = scanner.nextLine();
        System.out.print("\tFrom: ");
        String phoneNumber = scanner.nextLine();
        System.out.print("\tTo: ");
        String receiver = scanner.nextLine();
        System.out.print("\tContent: ");
        String content = scanner.nextLine();
        AES aes = new AES();
        String encryptContent = aes.encrypt(content, password);
        String Line = "\n" + password + "," + phoneNumber + "," + receiver + "," + encryptContent + "," + "true";
        String filename = "SMS.txt";
        Files.write(Path.of(filename, new String[] {}), Line.getBytes(), StandardOpenOption.APPEND);
    }

    public void readFromFile(String filename) throws IOException {
        List<String> textList = Files.readAllLines(Path.of(filename, new String[] {}));

        for (String txt : textList) {
            // System.out.println(txt);
            SMS Sms = new SMS();
            Sms.Arraylist(txt);
            this.sms.addLast(Sms);
        }

    }

    public void viewSMSDetail(String password) {
        // int i = 0;
        for (SMS sms : this.sms) {
            // if (this.sms[0] == password) {
            // sms.ListSMSes();
            // break;
            // }
            sms.ListSMSes();
            // i++;
        }
    }

    public static void main(String[] args) throws IOException {
        SMSList smslist = new SMSList();
        // smslist.addSMS();
        smslist.readFromFile("SMS.txt");
        smslist.viewSMSDetail("123456");
    }

}
