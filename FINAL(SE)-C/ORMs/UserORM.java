package ORMs;

import Models.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class UserORM extends ORM<user>{
    public UserORM(){
        tableName= "users";
    }
    // List all Data in Product
    @Override
    public ArrayList<user> listAll(){
        ArrayList<user> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new user(rs.getInt("id"),rs.getString("username"),rs.getString("pwd"),rs.getInt("role_id"),rs.getString("token"),rs.getInt("group_id"),rs.getString("remote_addr"),rs.getString("forward_addr"),rs.getString("image")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public User add(User U){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,U.getName());
            stmt.setString(2,U.getPassword());
            stmt.setString(3,U.getConfirm_Password());
            stmt.setString(4,U.getProfile());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) U.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return U;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var UserORM = new UserORM();
        boolean state=false;
        for(var u:UserORM.listAll()){
            if(u.getId() == id){
                state=true; 
            }  

        }
        if(state){
            try(var stmt = connection.prepareStatement("DELETE FROM " + tableName + " WHERE id="+id)){
                stmt.execute();
            }catch(SQLException e){
                e.printStackTrace();
            }
            return state;
        }else{
            return false;
        } 
    }
    // Update Record By ID
    @Override
    public void update(User U){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Name=?, Password=?, Confirm_Password=?, Profile=? WHERE id=?")){
            stmt.setString(1,U.getName());
            stmt.setString(2,U.getPassword());
            stmt.setString(3,U.getConfirm_Password());
            stmt.setString(4,U.getProfile());
            stmt.setInt(5,U.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
