package ORMs;

import Models.Category;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;



public class CategoryORM extends ORM<Category>{

    public CategoryORM() {
        tableName = "Categories";
    }
    // List all Data in Category
    @Override
    public ArrayList<Category> listAll(){
        ArrayList<Category> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Category(rs.getInt("id"),rs.getString("name")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Category add(Category C){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,C.getName());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) C.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return C;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var CategoryORM = new CategoryORM();
        boolean state=false;
        for(var p:CategoryORM.listAll()){
            if(p.getId() == id){
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
    public void update(Category C){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Name=? WHERE id=?")){
            stmt.setString(1, C.getName());
            stmt.setInt(2, C.getId());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}   
