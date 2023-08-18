import java.util.Scanner;
import java.util.InputMismatchException;

public class Main1 {
    public static void main(String[] args) {
        SequenceDP seq = new SequenceDP();
        int num;
        Scanner sc = new Scanner(System.in);
        // do {
        // try {
        // System.out.print("\nNumber: ");
        // num = sc.nextInt();
        // System.out.println(num);
        // if (num < 0) {
        // throw new Exception("Input only positive numbers");
        // }

        // } catch (InputMismatchException i) {
        // System.out.print(i.ErrorMessage());
        // sc.nextLine();
        // } catch (Exception e) {
        // System.out.println(e.getMessage());
        // }
        // } while (num <= 0);
        System.out.print("Number: ");

        while (!sc.hasNextInt()) {
            System.out.print("Input Only Number: ");
            sc.next();
        }
        num = sc.nextInt();
        if (num < 0) {
            System.out.print("Enter positive number: ");

            while (!sc.hasNextInt()) {
                System.out.print("Input Only Number: ");
                sc.next();
            }
            num = sc.nextInt();
        }

        seq.setNumber(num);
        seq.disEvennumber();
        seq.disOddnumber();
    }
}
