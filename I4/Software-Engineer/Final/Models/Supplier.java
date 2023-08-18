package Models;

public class Supplier {
    private int id;
    private String name;
    private String Phone;
    private String Address;

    public Supplier(int id, String name, String Phone, String Address) {
        this.id = id;
        this.name = name;
        this.Phone = Phone;
        this.Address = Address;
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

    public String getPhone() {
        return this.Phone;
    }

    public void setPhone(String Phone) {
        this.Phone = Phone;
    }

    public String getAddress() {
        return this.Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

}
