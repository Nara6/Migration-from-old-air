import java.util.Scanner;

public class MaxAmong8Number {
    public static void main(String[] args) {
        int[] num = new int[8];
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 8; i++) {
            System.out.printf("Input number #%d : ", i + 1);
            num[i] = sc.nextInt();
        }
        int max = num[0];
        for (int i = 1; i < 8; i++) {
            if (max < num[i]) {
                max = num[i];
            }
        }
        System.out.println("The maximum number is : " + max);
    }
}
