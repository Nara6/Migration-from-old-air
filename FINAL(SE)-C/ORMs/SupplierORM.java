package ORMs;

import Models.Supplier;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class SupplierORM extends ORM<Supplier>{
    public SupplierORM(){
        tableName = "Suppliers";
    }
    // List all Data in Product
    @Override
    public ArrayList<Supplier> listAll(){
        ArrayList<Supplier> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Supplier(rs.getInt("id"),rs.getString("Name"),rs.getString("Phone"),rs.getString("Address")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Supplier add(Supplier C){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,C.getName());
            stmt.setString(2,C.getPhone());
            stmt.setString(3,C.getAddress());
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
        var SupplierORM = new SupplierORM();
        boolean state=false;
        for(var u:SupplierORM.listAll()){
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
    public void update(Supplier C){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Name=?, Phone=?, Address=? WHERE id=?")){
            stmt.setString(1,C.getName());
            stmt.setString(2,C.getPhone());
            stmt.setString(3,C.getAddress());
            stmt.setInt(4,C.getId());

            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
