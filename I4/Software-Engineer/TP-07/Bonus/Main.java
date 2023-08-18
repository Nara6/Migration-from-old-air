import java.util.*;

public class Main {
    static SMSList smsl = new SMSList();

    public static void main(String[] args) throws Exception {
        int opt;
        int j = 1;
        smsl.createUser();
        while (j == 1) {
            Scanner sc = new Scanner(System.in);
            smsl.menu();
            System.out.print("Input your option: ");
            opt = sc.nextInt();
            switch (opt) {
                case 1:
                    SMSList smsList1 = new SMSList();
                    smsList1.menu();
                    try {
                        smsList1.listSMS();
                        System.out.println("\n");
                    } catch (Exception e) {
                        System.out.println("Not found");
                    }
                    break;
                case 2:
                    SMSList smsList2 = new SMSList();
                    smsList2.menu();
                    try {
                        smsList2.viewDetail();
                        System.out.println("\n");
                    } catch (Exception e) {
                        System.out.println("Not found");
                    }
                    break;
                case 3:
                    SMSList smsList3 = new SMSList();
                    smsList3.menu();
                    try {
                        smsList3.viewReadable();
                        System.out.println("\n");
                    } catch (Exception e) {
                        System.out.println("Not found");
                    }
                    break;
                case 4:
                    SMSList smsList4 = new SMSList();
                    smsList4.menu();
                    smsList4.removeName();
                    break;
                default:
                    System.out.println("Exit the program");
                    System.exit(0);
            }
        }
    }

}
