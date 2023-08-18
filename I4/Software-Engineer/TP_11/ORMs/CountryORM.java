package ORMs;

import Model.Country;
import ORMs.ORM;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;


public class CountryORM extends ORM<Country> {
    public CountryORM(){
        tableName = "countries";
    }
    @Override
    public ArrayList<Country> listAll() {
        ArrayList<Country> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Country(rs.getInt("id"),
                     rs.getString("country")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    @Override
    public Country add(Country t) {
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
            +" VALUES(NULL,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1, t.getCountry());
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
    public void update(Country t){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET country=? WHERE id=?")){
            stmt.setString(1,t.getCountry());
            stmt.setInt(2,t.getId());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Override
    public ArrayList<Country> rawQueryList(String query){
        ArrayList<Country> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                ar.add(new Country(rs.getInt("id"),rs.getString("country")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        var orm = new CountryORM();
        System.out.println("\t------------List table in Country------------");
        //List all table in Country
        for(var c:orm.listAll()){
            System.out.println("Id: "+c.getId()
                +", Name: "+c.getCountry());
        }
        // Add new data to Country
        System.out.printf("\n\n\t------------Add Attribute in Country------------");
        var country = new Country(0,"Malaysia");
        orm.add(country);
        System.out.println("\nNew added country ID and Name: "+country.getId()+", "+country.getCountry());

        // Update Data in Country
        System.out.printf("\n\n\t------------update Attribute in Country------------");
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
            System.out.print("\n\tNew Country: ");
            String newCountry = sc.next();
            var newcountry = new Country(id,newCountry);
            orm.update(newcountry);

        }
        //Delete data by ID 
        boolean delete = orm.delete(2);
        if(delete){
            System.out.println("Success");
        }else{
            System.out.println("Fail");
        }
        // List Row by RawQuery
        for (var c : orm.rawQueryList("SELECT * FROM Countries ")) {
            System.out.println("Id: "+c.getId()
                +", Name: "+c.getCountry());
        }
        
        
    }
}

