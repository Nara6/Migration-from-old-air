import java.util.Scanner;

public class Main_02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for testing for lucky number.");
        System.out.print("Please input 6 digits number: ");
        LuckyNumber lucky = new LuckyNumber(scanner.nextInt());

        if (lucky.isValid()) {
            System.out.println("Invalid input number, please input only 6 digits number.\n");
        } else {
            System.out.printf("%d is %slucky number\n", lucky.getNumber(), lucky.isLucky() == true ? "" : "not ");
        }
    }
}
