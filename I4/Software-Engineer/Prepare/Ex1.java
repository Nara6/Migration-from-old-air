import java.util.InputMismatchException;
import java.util.Scanner;

public class Ex1 {
    public static void main(String[] args) {
        int num = 0;
        Scanner sc = new Scanner(System.in);
        // System.out.print("Enter number: ");
        // // int num = sc.nextInt();
        // // System.out.println(num);
        // while (!sc.hasNextInt()) {
        // sc.next();
        // }
        // int n = sc.nextInt();
        // System.out.println(n);
        do {
            try {
                System.out.print("\nNumber: ");
                num = sc.nextInt();
                if (num < 0) {
                    throw new Exception("Input only positive numbers");
                }

            } catch (InputMismatchException i) {
                System.out.print("Input only number: ");
                sc.nextLine();
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }

        } while (num <= 0);
        // System.out.println(num);
        for (int i = 0; i < num; i++) {

        }
    }
}
