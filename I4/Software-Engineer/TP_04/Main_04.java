import java.util.Scanner;

public class Main_04 {
    public static void main(String[] args) {
        System.out.println("Welcome to program Money Exchanges!");
        Scanner sc = new Scanner(System.in);
        ExchangeMoney money = new ExchangeMoney();
        int option;
        do {
            System.out.println("1. Riels to Dollar");
            System.out.println("2. Riels to Thai Baht");
            System.out.println("3. Dollar to Reils");
            System.out.println("4. Dollar to Thai Baht");
            System.out.println("5. Thai Baht to Riels");
            System.out.println("6. Exit");
            System.out.print("Choose an option : ");
            option = sc.nextInt();
            switch (option) {
                case 1:
                    money.ReilsToDollar();
                    break;
                case 2:
                    money.ReilsToThaiBaht();
                    break;
                case 3:
                    money.DollarToReils();
                    break;
                case 4:
                    money.DollarToThaiBaht();
                    break;
                case 5:
                    money.ThaiBahtToReils();
                    break;
                case 6:
                    System.out.println("Exit Program.");
                    break;
                default:
                    System.out.println("Invalid input option");
            }
        } while (option != 6);
    }
}
