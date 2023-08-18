import java.util.Scanner;

public class Equation {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Program for calculating equation 1/x = 1/y + 1/z");
        System.out.print("Please input y: ");
        float y = sc.nextFloat();
        System.out.print("Please input z: ");
        float z = sc.nextFloat();
        System.out.println("Result x = " + (1 / ((1 / y) + (1 / z))));
    }
}
