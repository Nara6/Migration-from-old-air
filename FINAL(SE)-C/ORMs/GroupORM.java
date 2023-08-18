package ORMs;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class GroupORM extends ORM<group>{
    public GroupORM(){
        tableName= "groups";
    }
    // List all Data in Product
    @Override
    public ArrayList<group> listAll(){
        ArrayList<group> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new group(rs.getInt("id"),rs.getString("Name")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public group add(group g){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,g.getName());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) g.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return r;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var GroupORM = new GroupORM();
        boolean state=false;
        for(var u:GroupORM.listAll()){
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
    public void update(group g){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Name=? WHERE id=?")){
            stmt.setString(1,g.getName());
            stmt.setInt(2,g.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}

