package ORMs;

import Models.roles;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class roleORM extends ORM<roles>{
    public roleORM(){
        tableName= "roles";
    }
    // List all Data in Product
    @Override
    public ArrayList<roles> listAll(){
        ArrayList<roles> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new roles(rs.getInt("id"),rs.getString("rolename")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public roles add(roles r){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,r.getRolename());
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
        var roleORM = new roleORM();
        boolean state=false;
        for(var u:roleORM.listAll()){
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
    public void update(roles r){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET rolename=? WHERE id=?")){
            stmt.setString(1,r.getRolename());
            stmt.setInt(2,r.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}