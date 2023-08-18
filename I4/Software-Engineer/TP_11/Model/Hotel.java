package Model;

public class Hotel {
    private int id;
    private String hotel;
    private int countryid;
    private int cityid;
    private int stars;
    private double cost;
    private String info;

    public Hotel(int id, String hotel, int countryid, int cityid, int stars, double cost, String info) {
        this.id = id;
        this.hotel = hotel;
        this.countryid = countryid;
        this.cityid = cityid;
        this.stars = stars;
        this.cost = cost;
        this.info = info;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHotel() {
        return this.hotel;
    }

    public void setHotel(String hotel) {
        this.hotel = hotel;
    }

    public int getCountryid() {
        return this.countryid;
    }

    public void setCountryid(int countryid) {
        this.countryid = countryid;
    }

    public int getCityid() {
        return this.cityid;
    }

    public void setCityid(int cityid) {
        this.cityid = cityid;
    }

    public int getStars() {
        return this.stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    public double getCost() {
        return this.cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public String getInfo() {
        return this.info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

}
