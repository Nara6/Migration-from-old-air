import java.util.Scanner;

public class MainMenu {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int choice;
        do {
            System.out.println("-------- Menu ---------");
            System.out.println(" 1. Prime number");
            System.out.println(" 2. Lucky number");
            System.out.println(" 3. Reversing number");
            System.out.println(" 4. Money exchange");
            System.out.println(" 5. Max among 8 numbers");
            System.out.println(" 6. Shipping");
            System.out.println(" 7. Leap year");
            System.out.println(" 0. Exit");
            System.out.print("Choose an option: ");
            choice = scanner.nextInt();
            System.out.println("-----------------------");
            switch (choice) {
                case 0:
                    System.out.println("Exit");
                    break;
                case 1:
                    Main_01.main(null);
                    break;
                case 2:
                    Main_02.main(null);
                    break;
                case 3:
                    Main_03.main(null);
                    break;
                case 4:
                    Main_04.main(null);
                    break;
                case 5:
                    MaxAmong8Number.main(null);
                    break;
                case 6:
                    Main_06.main(null);
                    break;
                case 7:
                    LeapYear.main(null);
                    break;
                default:
                    System.out.println("Invalid input!!!");
            }
        } while (choice != 0);
    }
}
