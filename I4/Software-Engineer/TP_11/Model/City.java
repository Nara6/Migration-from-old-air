package Model;

public class City {
    private int id;
    private String city;
    private int countryid;

    public City(int id, String city, int countryid) {
        this.id = id;
        this.city = city;
        this.countryid = countryid;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getCountryid() {
        return this.countryid;
    }

    public void setCountryid(int countryid) {
        this.countryid = countryid;
    }

}
