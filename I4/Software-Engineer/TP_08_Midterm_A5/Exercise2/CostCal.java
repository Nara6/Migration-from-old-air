public class CostCal {
    private double cost;
    private double discount;
    private double dispercent;
    private double totalPrice;
    private double age;

    public CostCal(double cost, double age) {
        this.cost = cost;
        this.age = age;
    }

    public CostCal() {
    }

    public double getCost() {
        return this.cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public void setAge(double age) {
        this.age = age;
    }

    public double getDiscount() {
        return this.discount;
    }

    public void setDicount(double discount) {
        this.discount = discount;
    }

    public double getTotalPrice() {
        return this.totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public double checkDisCount() {
        if (this.cost >= 50 && this.cost < 100) {
            this.discount = (this.cost * 0.1);
        } else if (this.cost >= 100 && this.cost < 200) {
            this.discount = (this.cost * 0.15);
        } else if (this.cost >= 200 && this.cost < 350) {
            this.discount = (this.cost * 0.2);
        } else if (this.cost >= 350 && this.cost < 500) {
            this.discount = (this.cost * 0.25);
        } else if (this.cost >= 500) {
            this.discount = (this.cost * 0.30);
        }
        return this.discount;
    }

    public double dispercent() {
        if (this.cost >= 10 && this.cost < 30) {
            this.dispercent = 5;
        } else if (this.cost >= 30 && this.cost < 80) {
            this.dispercent = 10;
        } else if (this.cost >= 80 && this.cost < 150) {
            this.dispercent = 15;
        } else if (this.cost >= 150 && this.cost < 300) {
            this.dispercent = 20;
        } else if (this.cost >= 300) {
            this.dispercent = 25;
        }
        return this.dispercent;
    }

    public double checkAge() {
        if (this.age > 60) {
            this.dispercent = this.dispercent * 2;
        }
        return this.dispercent;
    }

}
