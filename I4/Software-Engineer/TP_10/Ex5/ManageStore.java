package Ex5;
import java.sql.*;
import java.util.Scanner;
public class ManageStore {
    private static Connection con;
    public static Connection getCon(){
        if(con==null){
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
                return null;
            }
            try {
                con = DriverManager.getConnection("jdbc:mysql://localhost:3306/","root","");
                Statement stm = con.createStatement();
                stm.executeUpdate("CREATE DATABASE IF NOT EXISTS `popular_store`");
                stm.executeUpdate("use popular_store");



            } catch (SQLException throwables) {
                throwables.printStackTrace();
                return null;
            }
        }
        return con;
    }
    public void dataInput() throws SQLException {
//        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("HH:mm:ss");
        Scanner s = new Scanner(System.in);
        System.out.print("\nStart Serving time(HH:mm:ss): ");
        String start = s.nextLine();
        System.out.println("What do you like?");
        String order = s.nextLine();
        System.out.print("Amount to pay($): ");
        float price = s.nextFloat();
        System.out.print("Please input credit card number :");
        long card_number =  s.nextLong();
        System.out.print("Please input password: ");
        int password = s.nextInt();
        System.out.print("End serving time(HH:mm:ss):");
        String skip = s.nextLine();
        String end= s.nextLine();


        PopularStore popular= new PopularStore(null,start,end,order,price,card_number,password,null);
        Statement stm = con.createStatement();

        stm.executeUpdate("CREATE TABLE IF NOT EXISTS `popularStore`(number int AUTO_INCREMENT PRIMARY KEY," +
                "`start_serving` VARCHAR(100),`end_serving` VARCHAR(100),`order_status` VARCHAR(100),`price` FLOAT," +
                "`card_number` BIGINT,`password` INT,`date_order` DATETIME NOT NULL DEFAULT NOW())");
        stm.executeUpdate("INSERT INTO `popularStore`(`start_serving`,`end_serving`,`order_status`,`price`,`card_number`," +
                "`password`)" +
                " values('"+popular.getStart()+"','"+popular.getEnd()+"','"+popular.getOrder_status()+"','"+popular.getPrice()+"'," +
                "'"+popular.getCard_number()+"','"+popular.getPassword()+"')");

    }
    public  void dataOutput() throws SQLException {

        Statement stm = con.createStatement();

        ResultSet rs = stm.executeQuery("SELECT*FROM `popularStore`");
        while (rs.next()){
            PopularStore customer;
            customer = new PopularStore(rs.getInt(1)
                    , rs.getString(2),rs.getString(3),rs.getString(4),
                    rs.getFloat(5),rs.getLong(6),
                    rs.getInt(7),rs.getDate(8));
            System.out.println(customer);

        }


    }
    public  static void close(){
        if(con!=null){
            try {
                con.close();
                con=null;
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }

}
