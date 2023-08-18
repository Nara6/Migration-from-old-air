package Models;
import java.util.Date;

public class inventories extends Model {
    private int book_id;
    private int copies;
    private String srcurl;
    private Date created_at;

    public inventories(int id, int book_id, int copies, String srcurl) {
        super(book_id);
        this.book_id = book_id;
        this.copies = copies;
        this.srcurl = srcurl;
        this.created_at = new Date();
    }


    public int getBook_id() {
        return this.book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public int getCopies() {
        return this.copies;
    }

    public void setCopies(int copies) {
        this.copies = copies;
    }

    public String getSrcurl() {
        return this.srcurl;
    }

    public void setSrcurl(String srcurl) {
        this.srcurl = srcurl;
    }

    public Date getCreated_at() {
        return this.created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

}