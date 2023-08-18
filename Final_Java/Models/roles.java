package Models;

public class roles extends Model {
    private String rolename;

    public roles(int id, String rolename) {
        super(id);
        this.rolename = rolename;
    }

    public String getRolename() {
        return this.rolename;
    }

    public void setRolename(String rolename) {
        this.rolename = rolename;
    }

}
