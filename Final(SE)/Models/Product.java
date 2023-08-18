package Models;

public class Product {
    private int id;
    private String name;
    private double Cost_Price;
    private double Sell_Price;
    private int Unit;
    private int Category_id;

    public Product(int id, String name, double Cost_Price, double Sell_Price, int Unit, int Category_id) {
        this.id = id;
        this.name = name;
        this.Cost_Price = Cost_Price;
        this.Sell_Price = Sell_Price;
        this.Unit = Unit;
        this.Category_id = Category_id;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getCost_Price() {
        return this.Cost_Price;
    }

    public void setCost_Price(double Cost_Price) {
        this.Cost_Price = Cost_Price;
    }

    public double getSell_Price() {
        return this.Sell_Price;
    }

    public void setSell_Price(double Sell_Price) {
        this.Sell_Price = Sell_Price;
    }

    public int getUnit() {
        return this.Unit;
    }

    public void setUnit(int Unit) {
        this.Unit = Unit;
    }

    public int getCategory_id() {
        return this.Category_id;
    }

    public void setCategory_id(int Category_id) {
        this.Category_id = Category_id;
    }

}

