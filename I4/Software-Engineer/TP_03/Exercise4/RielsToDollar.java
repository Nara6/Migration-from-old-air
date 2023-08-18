import java.util.Scanner;

public class RielsToDollar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for converting money in Riels to Dollars.");
        System.out.println("Conversion rate is: 1 USD = 4000 RIELS");
        System.out.print("Please input money in Riels: ");
        int Riels = scanner.nextInt();
        float Dollar = (float) Riels / 4000;
        System.out.printf("\n%d RIELS = %.2f USD\n", Riels, Dollar);
    }
}
