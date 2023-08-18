package ORMs;
import Models.categories;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class categoryORM extends ORM<categories>{
    public categoryORM(){
        tableName= "categories";
    }
    // List all Data in Product
    @Override
    public ArrayList<categories> listAll(){
        ArrayList<categories> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new categories(rs.getInt("id"),rs.getString("categoryname")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public categories add(categories r){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,r.getCategoryname());
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
        var categoryORM = new categoryORM();
        boolean state=false;
        for(var u:categoryORM.listAll()){
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
    public void update(categories r){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET categoryname=? WHERE id=?")){
            stmt.setString(1,r.getCategoryname());
            stmt.setInt(2,r.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
