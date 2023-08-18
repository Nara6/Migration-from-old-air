import java.util.Scanner;

public class Cheater_Game {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for guessing your luckiness.");
        System.out.print("Please input a positive number: ");
        int number = scanner.nextInt();
        System.out.print("\nI got " + (number + 1) + ". I am luckier.");
    }
}
