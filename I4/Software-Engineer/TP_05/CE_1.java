import java.util.Scanner;

public class CE_1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a Start Number: ");
        int start = scanner.nextInt();
        System.out.print("Enter a End Number: ");
        int end = scanner.nextInt();
        System.out.print("Enter a Step: ");
        int step = scanner.nextInt();
        System.out.print("Please Choose the type(SMALLER,BIGGER): ");
        String type = scanner.next();
        Range_UtilClass rangeuntil = new Range_UtilClass(start, end, step, type);
        rangeuntil.to_String();
    }
}
