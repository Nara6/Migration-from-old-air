import java.util.Scanner;

public class ExchangeMoney {
    private double money;
    Scanner sc = new Scanner(System.in);

    public double getMoney() {
        return money;
    }

    public void setMoney(double money) {
        this.money = money;
    }

    public void ReilsToDollar() {
        System.out.print("Input money in RIELS : ");
        setMoney(sc.nextDouble());
        double money = this.money / 4000;
        System.out.printf("%.0f REILS = %.2f USD\n", this.money, money);
    }

    public void ReilsToThaiBaht() {
        System.out.print("Input money in RIELS : ");
        setMoney(sc.nextDouble());
        double money = (this.money / 4000) * 30;
        System.out.printf("%.0f REILS = %.2f Thai Baht\n", this.money, money);
    }

    public void DollarToReils() {
        System.out.print("Input money in DOLLAR : ");
        setMoney(sc.nextDouble());
        double money = this.money * 4000;
        System.out.println(this.money + " DOLLAR = " + money + " REILS");
    }

    public void DollarToThaiBaht() {
        System.out.print("Input money in DOLLAR : ");
        setMoney(sc.nextDouble());
        double money = this.money * 30;
        System.out.println(this.money + " DOLLAR = " + money + " Thai Baht");
    }

    public void ThaiBahtToReils() {
        System.out.print("Input money in THAI BAHT : ");
        setMoney(sc.nextDouble());
        double money = (this.money / 30.0) * 4000;
        System.out.println(this.money + " THAI BAHT = " + money + " REILS");
    }

}
