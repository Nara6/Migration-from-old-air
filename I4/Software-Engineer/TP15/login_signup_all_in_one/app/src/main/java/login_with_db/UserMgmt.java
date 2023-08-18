package login_with_db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class UserMgmt {
    public Connection openConnection(){
        try {
            return DriverManager.getConnection("jdbc:mysql://localhost:3306/tp15?user=root&password=");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public boolean hasUser(String username, String password) {
        Connection con = openConnection();
        if(con != null){
            try (var stmt = con.prepareStatement(
                "Select count(*) from users where name=? and password=md5(?)")) {
                stmt.setString(1, username);
                stmt.setString(2, password);
                var rs = stmt.executeQuery();
                if(rs.next() && rs.getInt(1)>0){
                    return true;
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
            try {
                con.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return false;
    }
    public boolean signUp(String username, String password, String confirmPassword){
        Connection con = openConnection();
        if(con != null){
            if(password.equals(confirmPassword)){
                try (var stmt =con.prepareStatement("Insert into users values (NULL,?,md5(?))")){
                    stmt.setString(1,username);
                    stmt.setString(2,password);
                    stmt.execute();
                    return true;
                }catch (SQLException e) {
                    e.printStackTrace();
                }
                try {
                    con.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
        return false;
    }
}

