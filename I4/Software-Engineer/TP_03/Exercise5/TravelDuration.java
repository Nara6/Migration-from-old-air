import java.util.Scanner;

public class TravelDuration {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for calculating duration of travel from ITC to Airport.");
        System.out.print("Please input traffic jam factor (in percentage [0-100]): ");
        int percent = scanner.nextInt();
        double speed = percent * 30 / 100;
        double hour = 7 / speed;
        double seconds = hour * 3600;
        double min = (seconds % 3600) / 60;
        seconds = seconds % 60;
        System.out.printf("Travelling Duration = %02.0f:%02.0f:%02.0f\n", hour, min, seconds);
    }
}
