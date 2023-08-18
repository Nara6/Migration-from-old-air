import java.sql.*;

public class TestConnection {
    public static void main(String[] args) {
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("Success");
        }catch (ClassNotFoundException e){
            System.out.println("Driver failed");
            System.exit(1);
        }

        try (Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/Java?user=root&password=")) {
            System.out.println("Connected Successfully!");
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}