package Models;

import java.util.Date;

public class downloads extends Model {
    private int user_id;
    private int book_id;
    private Date downloaded_at;


    public downloads(int id, int user_id, int book_id) {
        super(id);
        this.user_id = user_id;
        this.book_id = book_id;
        this.downloaded_at = new Date();
    }


    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getBook_id() {
        return this.book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public Date getDownloaded_at() {
        return this.downloaded_at;
    }

    public void setDownloaded_at(Date downloaded_at) {
        this.downloaded_at = downloaded_at;
    }

    
}
