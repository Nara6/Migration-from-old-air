package Models;

public class users extends Model {
    private String username;
    private String pwd;
    private int roleid;
    private String token;
    private int group_id;
    private String remote_addr;
    private String forward_addr;
    private String image;

    public users(int id, String username, String pwd, int roleid, String token, int group_id, String remote_addr, String forward_addr, String image) {
        super(group_id);
        this.username = username;
        this.pwd = pwd;
        this.roleid = roleid;
        this.token = token;
        this.group_id = group_id;
        this.remote_addr = remote_addr;
        this.forward_addr = forward_addr;
        this.image = image;
    }


    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return this.pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public int getRoleid() {
        return this.roleid;
    }

    public void setRoleid(int roleid) {
        this.roleid = roleid;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public int getGroup_id() {
        return this.group_id;
    }

    public void setGroup_id(int group_id) {
        this.group_id = group_id;
    }

    public String getRemote_addr() {
        return this.remote_addr;
    }

    public void setRemote_addr(String remote_addr) {
        this.remote_addr = remote_addr;
    }

    public String getForward_addr() {
        return this.forward_addr;
    }

    public void setForward_addr(String forward_addr) {
        this.forward_addr = forward_addr;
    }

    public String getImage() {
        return this.image;
    }

    public void setImage(String image) {
        this.image = image;
    }


}
