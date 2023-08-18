import java.util.Scanner;

public class Hundreds_Counter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for counting the number of hundreds.");
        System.out.print("Please input a positive number: ");
        int number = scanner.nextInt();
        System.out.print("\nThere are " + (number / 100) + " hundred in number " + number);
    }
}
