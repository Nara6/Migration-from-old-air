package ORMs;

import Models.Customer;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class CustomerORM extends ORM<Customer>{
    public CustomerORM(){
        tableName = "Customers";
    }
    // List all Data in Product
    @Override
    public ArrayList<Customer> listAll(){
        ArrayList<Customer> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Customer(rs.getInt("id"),rs.getString("Name"),rs.getString("Phone"),rs.getString("Address")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Customer add(Customer C){
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
        var CustomerORM = new CustomerORM();
        boolean state=false;
        for(var u:CustomerORM.listAll()){
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
    public void update(Customer C){
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
