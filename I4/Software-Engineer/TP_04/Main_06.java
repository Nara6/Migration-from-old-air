import java.util.Scanner;

public class Main_06 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Shipping ship = new Shipping();
        System.out.print("Please input the distance from A-B : ");
        ship.setDist1(sc.nextInt());
        System.out.print("Please input the distance from B-C : ");
        ship.setDist2(sc.nextInt());
        System.out.print("Please input the weight : ");
        ship.setWeight(sc.nextInt());
        if (ship.checkWeight() == true) {
            if (ship.checkReachB() == true) {
                if (ship.checkReachC() == true) {
                    int refill = ship.fuelRefill();
                    if (refill > 0) {
                        System.out.printf("The ship need to refill %d liters to reach destination C.\n", refill);
                    } else {
                        System.out.println("The ship no need to refill.\n");
                    }
                } else {
                    System.out.println("The ship can not reach destination C from B with full tank of fuel.\n");
                }
            } else {
                System.out.println("The ship can not reach destination B from A with full tank of fuel.\n");
            }
        } else {
            System.out.println("This ship is overload\n");
        }
    }
}
