import java.util.Scanner;

public class Ex1 {
    public static void main(String[] args) {
        System.out.print("Input number to list prime numbers from 2 to it: ");
        Scanner scanner = new Scanner(System.in);
        int hold;
        int number = scanner.nextInt();
        for (int i = 2; i <= number; i++) {
            hold = 0;
            for (int j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                    hold = 1;
                    break;
                }

            }
            if (hold == 0) {
                System.out.print(i + " ");
            }
        }
        System.out.print("is prime number");
    }
}
