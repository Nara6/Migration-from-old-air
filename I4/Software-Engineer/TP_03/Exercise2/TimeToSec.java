import java.util.Scanner;

public class TimeToSec {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for converting time to seconds.");
        System.out.print("Please input hours: ");
        int hour = scanner.nextInt();
        System.out.print("Please input minutes: ");
        int min = scanner.nextInt();
        System.out.print("Please input seconds: ");
        int sec = scanner.nextInt();
        int seconds = (hour * 3600) + (min * 60) + sec;
        System.out.printf("Number of seconds =  %dx3600  +  %dx60  +  %d  =  %d\n", hour, min, sec, seconds);
    }
}
