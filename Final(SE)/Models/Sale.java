package Models;

public class Sale {
    private int id;
    private double Total_Price;
    private int Customer_id;
    private int User_id;

    public Sale(int id, double Total_Price, int Customer_id, int User_id) {
        this.id = id;
        this.Total_Price = Total_Price;
        this.Customer_id = Customer_id;
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

    public int getCustomer_id() {
        return this.Customer_id;
    }

    public void setCustomer_id(int Customer_id) {
        this.Customer_id = Customer_id;
    }

    public int getUser_id() {
        return this.User_id;
    }

    public void setUser_id(int User_id) {
        this.User_id = User_id;
    }

}

