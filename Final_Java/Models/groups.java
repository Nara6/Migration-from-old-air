package Models;

public class groups extends Model {
    private String groupname;

    public groups(int id, String groupname) {
        super(id);
        this.groupname = groupname;
    }

    public String getGroupname() {
        return this.groupname;
    }

    public void setGroupname(String groupname) {
        this.groupname = groupname;
    }


}
