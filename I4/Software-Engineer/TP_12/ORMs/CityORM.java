package ORMs;

import Model.City;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;


public class CityORM extends ORM<City>{
    public CityORM(){
        tableName="cities";
    }

    @Override
    public ArrayList<City> listAll(){
        ArrayList<City> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    @Override
    public City add(City t) {
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
            +" VALUES(NULL,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1, t.getCity());
            stmt.setInt(2,t.getCountryid());
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
    public void update(City t){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET city=?, countryid=? WHERE id=?")){
            stmt.setString(1,t.getCity());
            stmt.setInt(2,t.getCountryid());
            stmt.setInt(3,t.getId());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Override
    public ArrayList<City> rawQueryList(String query){
        ArrayList<City> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        var orm = new CityORM();
        System.out.println("\t------------List table in City------------");
        //List all table in City
        for(var c:orm.listAll()){
            System.out.println("Id: "+c.getId()
                +", Name: "+c.getCity()+", countryid: "+c.getCountryid());
        }
        // Add new data to City
        System.out.printf("\n\n\t------------Add Attribute in City------------");
        var city = new City(0,"Kala Lampu",3);
        orm.add(city);
        System.out.println("\nNew added country ID and Name: "+city.getId()+", "+city.getCity());

        // Update Data in City
        System.out.printf("\n\n\t------------update Attribute in City------------");
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
            System.out.print("\n\tNew City: ");
            String newcity = sc.next();
            System.out.print("\n\tCountry ID: ");
            int newCountryID = sc.nextInt();
            var newCity = new City(id,newcity,newCountryID);
            orm.update(newCity);

        }
        //Delete data by ID 
        boolean delete = orm.delete(2);
        if(delete){
            System.out.println("Success");
        }else{
            System.out.println("Fail");
        }
        // List Row by RawQuery
        for (var c : orm.rawQueryList("SELECT * FROM Cities ")) {
            System.out.println("Id: "+c.getId()
                +", Name: "+c.getCity()+", countryid: "+c.getCountryid());
        }
        
    }
}
