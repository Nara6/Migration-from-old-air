import java.util.Scanner;

public class CallingCost {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Program for calculating cost of a call.");
        System.out.print("Please input start hours: ");
        int Shour = scanner.nextInt();
        System.out.print("Please input start minutes: ");
        int Smin = scanner.nextInt();
        System.out.print("Please input start seconds: ");
        int Ssec = scanner.nextInt();
        System.out.print("\nPlease input end hours: ");
        int Ehour = scanner.nextInt();
        System.out.print("Please input end minutes: ");
        int Emin = scanner.nextInt();
        System.out.print("Please input end seconds: ");
        int Esec = scanner.nextInt();
        int SSecTotal = (Shour * 3600) + (Smin * 60) + Ssec;
        int ESectotal = (Ehour * 3600) + (Emin * 60) + Esec;
        int durationSecTotal = ESectotal - SSecTotal;
        int Dhour = durationSecTotal / 3600;
        int Dmin = durationSecTotal / 60;
        int Dsec = durationSecTotal % 60;
        float CostPersec = (float) 0.05;
        float CostPerSecond = (float) CostPersec / 60;
        float TotalCost = CostPerSecond * durationSecTotal;
        System.out.printf("\nTotal call duration: %dh %dmn %ds", Dhour, Dmin, Dsec);
        System.out.printf("\nTotal cost of this call: %.4f$\n", TotalCost);
    }
}
