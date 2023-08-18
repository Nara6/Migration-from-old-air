import java.util.Scanner;

public class Main2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input total buying cost: ");
        while (!scanner.hasNextInt()) {
            scanner.next();
            System.out.print("Input total buying cost: ");
        }
        int cost = scanner.nextInt();
        if (cost < 0) {
            System.out.println("Cost must be positive.");
            System.out.print("Input total buying cost: ");
            while (!scanner.hasNextInt()) {
                scanner.next();
            }
            cost = scanner.nextInt();
        }
        // System.out.println(cost);
        CostCal costcal = new CostCal();
        costcal.setCost(cost);
        double dis = costcal.checkDisCount();
        System.out.println(dis);
        double disper = costcal.totalPrice();
        System.out.println(disper);
    }
}
