import java.util.Scanner;

public class Ex3 {
    public static void main(String[] args) {
        System.out.print("Enter a Number: ");
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        if (num > 500) {
            System.out.println("Out of limit");
        } else {
            for (int i = num; i <= 500; i++) {
                if (i % 2 == 0) {
                    System.out.print(i + " ");
                }
            }
        }

    }
}
