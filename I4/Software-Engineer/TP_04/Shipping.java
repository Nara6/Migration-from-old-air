public class Shipping {

    private int dist1;
    private int dist2;
    private int fuelStatus;
    private int refill;
    private int weight;
    private int fuel;

    public int getDist1() {
        return dist1;
    }

    public void setDist1(int dist1) {
        this.dist1 = dist1;
    }

    public int getDist2() {
        return dist2;
    }

    public void setDist2(int dist2) {
        this.dist2 = dist2;
    }

    public int getFuel() {
        return fuel;
    }

    public void setFuel(int fuel) {
        this.fuel = fuel;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public boolean checkWeight() {
        if (this.weight <= 5000) {
            this.fuelStatus = 10;
            return true;
        } else if (this.weight <= 10000) {
            this.fuelStatus = 20;
            return true;
        } else if (this.weight <= 20000) {
            this.fuelStatus = 25;
            return true;
        } else if (this.weight <= 30000) {
            this.fuelStatus = 35;
            return true;
        } else {
            return false;
        }
    }

    public boolean checkReachB() {
        int fuel = 5000;
        fuel = fuel - (this.dist1 * this.fuelStatus);
        return fuel < 0 ? false : true;
    }

    public boolean checkReachC() {
        int fuel = 5000;
        fuel = fuel - (this.dist2 * this.fuelStatus);
        return fuel < 0 ? false : true;
    }

    public int fuelRefill() {
        this.fuel = 5000 - (this.dist2 * this.fuelStatus);
        this.refill = (this.dist2 * this.fuelStatus) - this.fuel;
        return this.refill;
    }
}