import java.util.Scanner;

public class TaskRunner {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (1 > 0) {
            System.out.println("-------- Menu ---------");
            System.out.println(" 1. Seconds to Time");
            System.out.println(" 2. Time to Seconds");
            System.out.println(" 3. Calling Cost");
            System.out.println(" 4. Riels to Dollar");
            System.out.println(" 5. Traveling Duration");
            System.out.println(" 0. Exit");
            System.out.print("Choose an option: ");
            int choice = scanner.nextInt();
            System.out.println("-----------------------");
            if (choice == 1) {
                SecToTime.main(null);
            } else if (choice == 2) {
                TimeToSec.main(null);
            } else if (choice == 3) {
                CallingCost.main(null);
            } else if (choice == 4) {
                RielsToDollar.main(null);
            } else if (choice == 5) {
                TravelDuration.main(null);
            } else if (choice == 0) {
                break;
            } else {
                break;
            }
        }

    }
}
