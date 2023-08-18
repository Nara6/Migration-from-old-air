package Utils;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class DBConnection {
    private Connection conn;
    private static DBConnection instance;
    private DBConnection(String db, String user,
            String pass, int port, String host) {
        // try {
        //     Class.forName("com.mysql.cj.jdbc.Driver");
        // }catch(ClassNotFoundException e) {
        //     e.printStackTrace();
        // }
        try {
            conn = DriverManager
                    .getConnection("jdbc:mysql://" + host + ":" + port + "/" + db,
                            user, pass);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private DBConnection(String db, String user, String pass, int port) {
        this(db, user, pass, port, "localhost");
    }
    private DBConnection(String db, String user, String pass) {
        this(db, user, pass, 3306);
    }
    private DBConnection(String db, String user) {
        this(db, user, null);
    }
    private DBConnection(String db) {
        this(db, "root");
    }
    private DBConnection() {
        this("finalexams1");
    }
    public static DBConnection getInstance(){
        if(instance == null){
            instance = new DBConnection();
        }
        return instance;
    }
    public Connection getConn(){return conn;}
}