package ORMs;

import Models.publishers;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class publisherORM extends ORM<publishers>{
    public publisherORM(){
        tableName= "publishers";
    }
    // List all Data in Product
    @Override
    public ArrayList<publishers> listAll(){
        ArrayList<publishers> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new publishers(rs.getInt("id"),rs.getString("publishername"),rs.getInt("address_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public publishers add(publishers r){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,r.getPublishername());
            stmt.setInt(2,r.getAddress_id());
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
        var publisherORM = new publisherORM();
        boolean state=false;
        for(var u:publisherORM.listAll()){
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
    public void update(publishers r){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET publishername=?, address_id=? WHERE id=?")){
            stmt.setString(1,r.getPublishername());
            stmt.setInt(2,r.getAddress_id());
            stmt.setInt(3,r.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
