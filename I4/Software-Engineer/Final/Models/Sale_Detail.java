package Models;


import java.sql.Date;

public class Sale_Detail {
    private int id;
    private int Quantity;
    private double Total_Price;
    private Date Date_Sale;
    private int Product_id;
    private int Sale_id;

    public Sale_Detail(int id, int Quantity, double Total_Price, Date Date_Sale, int Product_id, int Sale_id) {
        this.id = id;
        this.Quantity = Quantity;
        this.Total_Price = Total_Price;
        this.Date_Sale = Date_Sale;
        this.Product_id = Product_id;
        this.Sale_id = Sale_id;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return this.Quantity;
    }

    public void setQuantity(int Quantity) {
        this.Quantity = Quantity;
    }

    public double getTotal_Price() {
        return this.Total_Price;
    }

    public void setTotal_Price(double Total_Price) {
        this.Total_Price = Total_Price;
    }

    public Date getDate_Sale() {
        return this.Date_Sale;
    }

    public void setDate_Sale(Date Date_Sale) {
        this.Date_Sale = Date_Sale;
    }

    public int getProduct_id() {
        return this.Product_id;
    }

    public void setProduct_id(int Product_id) {
        this.Product_id = Product_id;
    }

    public int getSale_id() {
        return this.Sale_id;
    }

    public void setSale_id(int Sale_id) {
        this.Sale_id = Sale_id;
    }

}
