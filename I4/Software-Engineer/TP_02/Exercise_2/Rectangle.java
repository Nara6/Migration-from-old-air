import java.util.Scanner;

public class Rectangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Program for calculating perimeter and surface of a Rectangle.");
        System.out.print("Please input width (in meter): ");
        int width = sc.nextInt();
        System.out.print("Please input height (in meter): ");
        int height = sc.nextInt();
        System.out.print("\nPerimeter: " + "(" + width + " + " + height + ")" + " x 2 = " + (width + height) * 2 + "m");
        System.out.print("\nSurface: " + width + " x " + height + " = " + (width * height) + " m^2");
    }
}
