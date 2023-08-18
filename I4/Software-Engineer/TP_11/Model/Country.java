package Model;
public class Country {
    private int id;
    private String country;

    public Country(int id, String country) {
        this.id = id;
        this.country = country;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

}
