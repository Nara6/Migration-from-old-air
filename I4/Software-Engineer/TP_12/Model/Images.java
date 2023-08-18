package Model;

public class Images {
    private int id;
    private int hotelid;
    private String imagePath;

    public Images(int id, int hotelid, String imagePath) {
        this.id = id;
        this.hotelid = hotelid;
        this.imagePath = imagePath;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getHotelid() {
        return this.hotelid;
    }

    public void setHotelid(int hotelid) {
        this.hotelid = hotelid;
    }

    public String getImagePath() {
        return this.imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

}
