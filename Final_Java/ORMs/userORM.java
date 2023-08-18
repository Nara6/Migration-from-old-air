package ORMs;

import Models.users;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class userORM extends ORM<users>{
    public userORM(){
        tableName= "users";
    }
    // List all Data in Product
    @Override
    public ArrayList<users> listAll(){
        ArrayList<users> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new users(rs.getInt("id"),rs.getString("username"),rs.getString("pwd"),rs.getInt("role_id"),rs.getString("toekn"),rs.getInt("group_id"),rs.getString("remote_addr"),rs.getString("forward_addr"),rs.getString("image")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public users add(users r){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,r.getUsername());
            stmt.setString(2,r.getPwd());
            stmt.setInt(3,r.getRoleid());
            stmt.setString(4,r.getToken());
            stmt.setInt(5,r.getGroup_id());
            stmt.setString(6,r.getRemote_addr());
            stmt.setString(7,r.getForward_addr());
            stmt.setString(8,r.getImage());

            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) r.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return r;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var userORM = new userORM();
        boolean state=false;
        for(var u:userORM.listAll()){
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
    public void update(users r){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET username=?, pwd=?, role_id=?, token=?, group_id=?, remote_addr=?, forward_addr=?, image=? WHERE id=?")){
            stmt.setString(1,r.getUsername());
            stmt.setString(2,r.getPwd());
            stmt.setInt(3,r.getRoleid());
            stmt.setString(4,r.getToken());
            stmt.setInt(5,r.getGroup_id());
            stmt.setString(6,r.getRemote_addr());
            stmt.setString(7,r.getForward_addr());
            stmt.setString(8,r.getImage());
            stmt.setInt(9,r.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
