package Models;

public class Customer {
    private int id;
    private String Name;
    private String phone;
    private String Address;

    public Customer(int id, String Name, String phone, String Address) {
        this.id = id;
        this.Name = Name;
        this.phone = phone;
        this.Address = Address;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return this.Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }

}
