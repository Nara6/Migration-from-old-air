package Models;

public class Purchase {
    private int id;
    private double Total_Price;
    private int Supllier_id;
    private int User_id;

    public Purchase(int id, double Total_Price, int Supllier_id, int User_id) {
        this.id = id;
        this.Total_Price = Total_Price;
        this.Supllier_id = Supllier_id;
        this.User_id = User_id;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getTotal_Price() {
        return this.Total_Price;
    }

    public void setTotal_Price(double Total_Price) {
        this.Total_Price = Total_Price;
    }

    public int getSupllier_id() {
        return this.Supllier_id;
    }

    public void setSupllier_id(int Supllier_id) {
        this.Supllier_id = Supllier_id;
    }

    public int getUser_id() {
        return this.User_id;
    }

    public void setUser_id(int User_id) {
        this.User_id = User_id;
    }

}
