package Models;

public class User {
    private int id;
    private String name;
    private String Password;
    private String Confirm_Password;
    private String Profile;

    public User(int id, String name, String Password, String Confirm_Password, String Profile) {
        this.id = id;
        this.name = name;
        this.Password = Password;
        this.Confirm_Password = Confirm_Password;
        this.Profile = Profile;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return this.Password;
    }

    public void setPassword(String Password) {
        this.Password = Password;
    }

    public String getConfirm_Password() {
        return this.Confirm_Password;
    }

    public void setConfirm_Password(String Confirm_Password) {
        this.Confirm_Password = Confirm_Password;
    }

    public String getProfile() {
        return this.Profile;
    }

    public void setProfile(String Profile) {
        this.Profile = Profile;
    }

}
