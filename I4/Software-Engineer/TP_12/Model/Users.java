package Model;

public class Users {
    private int id;
    private String username;
    private String pass;
    private String email;
    private int roleid;
    private int discount;
    private String avatar;

    public Users(int id, String username, String pass, String email, int roleid, int discount, String avatar) {
        this.id = id;
        this.username = username;
        this.pass = pass;
        this.email = email;
        this.roleid = roleid;
        this.discount = discount;
        this.avatar = avatar;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return this.pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getRoleid() {
        return this.roleid;
    }

    public void setRoleid(int roleid) {
        this.roleid = roleid;
    }

    public int getDiscount() {
        return this.discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public String getAvatar() {
        return this.avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

}
