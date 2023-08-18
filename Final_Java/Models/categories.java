package Models;

public class categories extends Model {
    private String categoryname;

    public categories(int id, String categoryname) {
        super(id);
        this.categoryname = categoryname;
    }


    public String getCategoryname() {
        return this.categoryname;
    }

    public void setCategoryname(String categoryname) {
        this.categoryname = categoryname;
    }


}
