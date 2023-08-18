import java.util.Scanner;

public class SecToTime {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input number of seconds: ");
        int seconds = scanner.nextInt();
        int hour = seconds / 3600;
        int min = (seconds % 3600) / 60;
        int sec = seconds % 60;
        System.out.printf("Time corresponding to %dseconds is %02d:%02d:%02d.\n", seconds, hour, min, sec);
    }
}
