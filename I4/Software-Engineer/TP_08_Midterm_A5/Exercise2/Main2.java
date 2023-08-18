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
        CostCal costcal = new CostCal();
        costcal.setCost(cost);
        if (cost < 50) {
            System.out.printf("\n\n\tTotal cost: %02.02f $", costcal.getCost());
            double checkDisCount = costcal.checkDisCount();
            double checkdisPer = costcal.dispercent();
            System.out.printf("\n  Total Discount:    %02.02f %%", checkDisCount * 2);
            System.out.println("\n------------------------------");
            System.out.printf("  Total Payment:    %02.02f %%", costcal.getCost());
        } else {
            System.out.print("Input age: ");
            double age = scanner.nextDouble();
            costcal.setAge(age);
            if (age > 60 && cost <= 350) {
                System.out.printf("\n\n\tTotal cost: %02.02f $", costcal.getCost());
                double checkDisCount = costcal.checkDisCount();
                double checkdisPer = costcal.dispercent();
                System.out.printf("\n\t  Discount:    %02.00f %%", costcal.checkAge());
                System.out.printf("\n Total Discount:    %02.02f $", checkDisCount * 2);
                System.out.println("\n------------------------------");
                double totalPrice = costcal.getCost() - checkDisCount * 2;
                System.out.printf("  Total Payment:    %02.02f %%", totalPrice);

            } else {
                System.out.printf("\n\n\tTotal cost: %02.02f $", costcal.getCost());
                double checkDisCount = costcal.checkDisCount();
                double checkdisPer = costcal.dispercent();
                System.out.printf("\n\t  Discount:    %02.00f %%", costcal.checkAge());
                System.out.printf("\n  Total Discount:    %02.02f $", checkDisCount);
                System.out.println("\n------------------------------");
                double totalPrice = costcal.getCost() - checkDisCount;
                System.out.printf("  Total Payment:    %02.02f %%", totalPrice);
            }
        }
    }
}
