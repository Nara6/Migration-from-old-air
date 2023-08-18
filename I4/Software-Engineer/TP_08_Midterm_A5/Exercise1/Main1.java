import java.util.Scanner;
import java.util.InputMismatchException;

public class Main1 {
    public static void main(String[] args) {
        SequenceDP seq = new SequenceDP();
        int num;
        Scanner sc = new Scanner(System.in);
        System.out.print("Input positive number: ");
        while (!sc.hasNextInt()) {
            System.out.print("Input Only Number: ");
            sc.next();
        }
        num = sc.nextInt();
        if (num < 0) {
            System.out.print("Input only positive number: ");

            while (!sc.hasNextInt()) {
                System.out.print("Input positive number: ");
                sc.next();
            }
            num = sc.nextInt();
        }

        seq.setNumber(num);

        seq.disOddnumber();
        seq.disEvennumber();
    }
}
