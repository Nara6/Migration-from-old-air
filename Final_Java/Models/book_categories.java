package Models;

public class book_categories extends Model {
    private int category_id;

    public book_categories(int id, int category_id) {
        super(id);
        this.category_id = category_id;
    }


    public int getCategory_id() {
        return this.category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }


}
