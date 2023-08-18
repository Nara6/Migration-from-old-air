import java.util.Scanner;

public class Ex4 {
    public static void main(String[] args) {
        float profit[] = new float[12];
        float result = 0;
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < 12; i++) {
            System.out.printf("Profit for month %d  : ", i + 1);
            profit[i] = scanner.nextFloat();
            result = result + profit[i];
        }
        System.out.printf("\n\nTotal profits for 12 months   : %.2f", result);

    }
}
