import java.util.Scanner;

public class LeapYear {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Input a year : ");
        int year = sc.nextInt();
        if (year > 0) {
            if (year % 4 == 0) {
                if (year % 400 == 0) {
                    System.out.printf("The year %d is a leap year\n", year);
                } else if (year % 100 == 0) {
                    System.out.printf("The year %d is not a leap year\n", year);
                } else {
                    System.out.printf("The year %d is a leap year\n", year);
                }
            } else {
                System.out.printf("The year %d is not a leap year\n", year);
            }
        } else {
            System.out.println("Error input\n");
        }
    }
}
