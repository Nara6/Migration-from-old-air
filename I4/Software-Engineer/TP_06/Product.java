public class Product {
    private String ID;
    private String name;
    private int price;
    private int amount;

    public Product(String ID, String name, int price, int amount) {
        this.ID = ID;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }

    public String getID() {
        return this.ID;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return this.price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getAmount() {
        return this.amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

}
