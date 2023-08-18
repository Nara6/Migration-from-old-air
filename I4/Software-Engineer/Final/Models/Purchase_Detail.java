package Models;

import java.sql.Date;

public class Purchase_Detail {
    private int id;
    private int Quantity;
    private double Total_Price;
    private Date DatePurchase;
    private int Product_id;
    private int Purchase_id;

    public Purchase_Detail(int id, int Quantity, double Total_Price, Date DatePurchase, int Product_id, int Purchase_id) {
        this.id = id;
        this.Quantity = Quantity;
        this.Total_Price = Total_Price;
        this.DatePurchase = DatePurchase;
        this.Product_id = Product_id;
        this.Purchase_id = Purchase_id;
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

    public Date getDatePurchase() {
        return this.DatePurchase;
    }

    public void setDatePurchase(Date DatePurchase) {
        this.DatePurchase = DatePurchase;
    }

    public int getProduct_id() {
        return this.Product_id;
    }

    public void setProduct_id(int Product_id) {
        this.Product_id = Product_id;
    }

    public int getPurchase_id() {
        return this.Purchase_id;
    }

    public void setPurchase_id(int Purchase_id) {
        this.Purchase_id = Purchase_id;
    }

}
