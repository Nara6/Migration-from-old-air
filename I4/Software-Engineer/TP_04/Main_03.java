import java.util.Scanner;

public class Main_03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for reversing a 4 digits number.");
        System.out.print("Please input 4 digits number: ");
        ReverseNumber reverse = new ReverseNumber();
        reverse.setNumber(scanner.nextInt());
        if (reverse.isValid()) {
            System.out.println("Error: invalid number, please input only 4 digits number.\n");
        } else {
            System.out.printf("After reverse: %d\n", reverse.Reverse());
        }
    }
}
