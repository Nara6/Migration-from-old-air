package ORMs;

import Model.Role;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;

public class RoleORM extends ORM<Role>{
    public RoleORM(){
        tableName= "roles";
    }
    @Override
    public ArrayList<Role> listAll(){
        ArrayList<Role> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Role(rs.getInt("id"),rs.getString("role")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    @Override
    public Role add(Role t){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
            +" VALUES(NULL,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,t.getRole());
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
    public void update(Role t){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET role=?  WHERE id=?")){
            stmt.setString(1,t.getRole());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Override
    public ArrayList<Role> rawQueryList(String query){
        ArrayList<Role> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                ar.add(new Role(rs.getInt("id"),rs.getString("role")));

            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        var orm = new RoleORM();
        System.out.println("\t------------List table in Role------------");
        //List all table in Role
        for(var c:orm.listAll()){
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nRole: %d",c.getRole());
        }
        // Add new data to Role
        System.out.printf("\n\n\t------------Add Attribute in Role------------");
        var Role = new Role(0,"User");
        orm.add(Role);
        System.out.println("\nNew added country ID and Name: "+Role.getId()+", "+Role.getRole());

        // Update Data in Role
        System.out.printf("\n\n\t------------update Attribute in Role------------");
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
            System.out.print("\n\tNew Role: ");
            String newRole=sc.nextLine();
            var newrole = new Role(id,newRole);
            orm.update(newrole);
        }
        //Delete data by ID 
        boolean delete = orm.delete(2);
        if(delete){
            System.out.println("Success");
        }else{
            System.out.println("Fail");
        }
        // List Row by RawQuery
        for (var c : orm.rawQueryList("SELECT * FROM roles ")) {
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nRole: %d",c.getRole());
        }
        
    }
}

