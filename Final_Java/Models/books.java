package Models;

public class books extends Model {
    private String title;
    private String path;
    private int user_id;
    private int group_id;
    private int publisher_id;


    public books(int id, String title, String path, int user_id, int group_id, int publisher_id) {
        super(id);
        this.title = title;
        this.path = path;
        this.user_id = user_id;
        this.group_id = group_id;
        this.publisher_id = publisher_id;
    }


    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPath() {
        return this.path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getGroup_id() {
        return this.group_id;
    }

    public void setGroup_id(int group_id) {
        this.group_id = group_id;
    }

    public int getPublisher_id() {
        return this.publisher_id;
    }

    public void setPublisher_id(int publisher_id) {
        this.publisher_id = publisher_id;
    }


}
