package ORMs;

import Model.Hotel;
import ORMs.ORM;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;



public class HotelORM extends ORM<Hotel>{
    public HotelORM(){
        tableName= "hotels";
    }
    @Override
    public ArrayList<Hotel> listAll(){
        ArrayList<Hotel> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Hotel(rs.getInt("id"),rs.getString("hotel"),rs.getInt("countryid"),rs.getInt("cityid"),rs.getInt("star"),rs.getDouble("cost"),rs.getString("info")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    @Override
    public Hotel add(Hotel t){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
            +" VALUES(NULL,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1, t.getHotel());
            stmt.setInt(2,t.getCountryid());
            stmt.setInt(3,t.getCityid());
            stmt.setInt(4,t.getStars());
            stmt.setDouble(5, t.getCost());
            stmt.setString(6,t.getInfo());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) t.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return t;
    }
    @Override
    public boolean delete(int id){
        try(var stmt = connection.prepareStatement("DELETE FROM "+tableName+" WHERE id="+id)){
            stmt.execute();
            return true;
        }catch(SQLException e){
            e.printStackTrace();
            return false;
        }
    }
    @Override
    public void update(Hotel t){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET hotel=?, countryid=?, cityid=?, star=?,cost=?,info=? WHERE id=?")){
            stmt.setString(1, t.getHotel());
            stmt.setInt(2,t.getCountryid());
            stmt.setInt(3,t.getCityid());
            stmt.setInt(4,t.getStars());
            stmt.setDouble(5, t.getCost());
            stmt.setString(6,t.getInfo());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Override
    public ArrayList<Hotel> rawQueryList(String query){
        ArrayList<Hotel> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                ar.add(new Hotel(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid"),rs.getInt("cityid"),rs.getInt("star"),rs.getDouble("cost"),rs.getString("info")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        var orm = new HotelORM();
        System.out.println("\t------------List table in Hotel------------");
        //List all table in Hotel
        for(var c:orm.listAll()){
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nName: %s",c.getHotel());
            System.out.printf("\nCountry ID: %d",c.getCountryid());
            System.out.printf("\nCity ID: %d",c.getCityid());
            System.out.printf("\nStars: %d",c.getStars());
            System.out.printf("\nCost: %f",c.getCost());
            System.out.printf("\nInfo: %s",c.getInfo());
        }
        // Add new data to Hotel
        System.out.printf("\n\n\t------------Add Attribute in Hotel------------");
        var hotel = new Hotel(0,"Sweet Home",2,1,4,29.20,"At Camco City");
        orm.add(hotel);
        System.out.println("\nNew added country ID and Name: "+hotel.getId()+", "+hotel.getHotel());

        // Update Data in Hotel
        System.out.printf("\n\n\t------------update Attribute in Hotel------------");
        int hold=0;
        System.out.println("\n\tPlease Input a ID: ");
        Scanner sc = new Scanner(System.in);
        int id = sc.nextInt();
        for(var c:orm.listAll()){
            if(id==c.getId()){
                hold++;
            }
        }
        if(hold==0){
            System.out.println("\nID not found!!");
        }else{
            System.out.println("\nFound!!");
            System.out.print("\n\tNew Name: ");
            String newName = sc.next();
            System.out.print("\n\tNew Country ID: ");
            int newCountryID = sc.nextInt();
            System.out.print("\n\tNew City ID: ");
            int newCityID = sc.nextInt();
            System.out.print("\n\tStars: ");
            int newStars = sc.nextInt();
            System.out.print("\n\tNew Cost: ");
            double newCost = sc.nextDouble();
            System.out.print("\n\tNew Info: ");
            String Info = sc.next();
            var newhotel = new Hotel(id,newName,newCountryID,newCityID,newStars,newCost,Info);
            orm.update(newhotel);
        }
        //Delete data by ID 
        boolean delete = orm.delete(2);
        if(delete){
            System.out.println("Success");
        }else{
            System.out.println("Fail");
        }
        // List Row by RawQuery
        for (var c : orm.rawQueryList("SELECT * FROM hotels ")) {
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nName: %s",c.getHotel());
            System.out.printf("\nCountry ID: %d",c.getCountryid());
            System.out.printf("\nCity ID: %d",c.getCityid());
            System.out.printf("\nStars: %d",c.getStars());
            System.out.printf("\nCost: %f",c.getCost());
            System.out.printf("\nInfo: %s",c.getInfo());
        }
    }
}
