package ORMs;

import Model.Users;
import ORMs.ORM;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;



public class UserORM extends ORM<Users>{
    public UserORM(){
        tableName= "users";
    }
    @Override
    public ArrayList<Users> listAll(){
        ArrayList<Users> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Users(rs.getInt("id"),rs.getString("username"),rs.getString("pass"),rs.getString("email"),rs.getInt("roleid"),rs.getInt("discount"),rs.getString("avatar")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    @Override
    public Users add(Users t){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
            +" VALUES(NULL,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1, t.getUsername());
            stmt.setString(2,t.getPass());
            stmt.setString(3,t.getEmail());
            stmt.setInt(4,t.getRoleid());
            stmt.setInt(5, t.getDiscount());
            stmt.setString(6,t.getAvatar());
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
    public void update(Users t){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET hotel=?, countryid=?, cityid=?, star=?,cost=?,info=? WHERE id=?")){
            stmt.setString(1, t.getUsername());
            stmt.setString(2,t.getPass());
            stmt.setString(3,t.getEmail());
            stmt.setInt(4,t.getRoleid());
            stmt.setInt(5, t.getDiscount());
            stmt.setString(6,t.getAvatar());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Override
    public ArrayList<Users> rawQueryList(String query){
        ArrayList<Users> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                ar.add(new Users(rs.getInt("id"),rs.getString("username"),rs.getString("pass"),rs.getString("email"),rs.getInt("roleid"),rs.getInt("discount"),rs.getString("avatar")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        var orm = new UserORM();
        System.out.println("\t------------List table in User------------");
        //List all table in User
        for(var c:orm.listAll()){
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nUserName: %s",c.getUsername());
            System.out.printf("\nPassWord: %s",c.getPass());
            System.out.printf("\nEmail ID: %s",c.getEmail());
            System.out.printf("\nRole ID: %d",c.getRoleid());
            System.out.printf("\nDiscount: %d",c.getDiscount());
            System.out.printf("\nAvatar: %s",c.getAvatar());
        }
        //Add new data to User
        System.out.printf("\n\n\t------------Add Attribute in User------------");
        var User = new Users(0,"Justin","123456","justin@gmail.com",1,40,"user.jpg");
        orm.add(User);
        System.out.println("\nNew added country ID and Name: "+User.getId()+", "+User.getUsername());

        // Update Data in User
        System.out.printf("\n\n\t------------update Attribute in User------------");
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
            String newName = sc.nextLine();
            System.out.print("\n\tNew Password: ");
            String newPassword = sc.nextLine();
            System.out.print("\n\tNew Email: ");
            String newEmail = sc.nextLine();
            System.out.print("\n\tNew Role ID: ");
            int newRoleID = sc.nextInt();
            System.out.print("\n\tNew Discount: ");
            int newDis = sc.nextInt();
            System.out.print("\n\tNew Avatar: ");
            String newAvatar = sc.next();
            var newuser = new Users(id,newName,newPassword,newEmail,newRoleID,newDis,newAvatar);
            orm.update(newuser);
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
            System.out.printf("\nUserName: %s",c.getUsername());
            System.out.printf("\nPassWord: %s",c.getPass());
            System.out.printf("\nEmail ID: %s",c.getEmail());
            System.out.printf("\nRole ID: %d",c.getRoleid());
            System.out.printf("\nDiscount: %d",c.getDiscount());
            System.out.printf("\nAvatar: %s",c.getAvatar());
        }
        
    }
}
