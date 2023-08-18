package Models;

public class Stock {
    private int id;
    private int Quantity;
    private int Unit;
    private int Product_id;

    public Stock(int id, int Quantity, int Unit, int Product_id) {
        this.id = id;
        this.Quantity = Quantity;
        this.Unit = Unit;
        this.Product_id = Product_id;
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

    public int getUnit() {
        return this.Unit;
    }

    public void setUnit(int Unit) {
        this.Unit = Unit;
    }

    public int getProduct_id() {
        return this.Product_id;
    }

    public void setProduct_id(int Product_id) {
        this.Product_id = Product_id;
    }

}
