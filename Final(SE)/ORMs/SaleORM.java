package ORMs;
import Models.Sale;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;



public class SaleORM extends ORM<Sale>{
    public SaleORM() {
        tableName = "Sales";
    }
    // List all Data in Product
    @Override
    public ArrayList<Sale> listAll(){
        ArrayList<Sale> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Sale(rs.getInt("id"),rs.getDouble("Total_Price"),rs.getInt("Customer_id"),rs.getInt("User_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Sale add(Sale S){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setDouble(1,S.getTotal_Price());
            stmt.setInt(2,S.getCustomer_id());
            stmt.setInt(3,S.getUser_id());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) S.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return S;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var SaleORM = new SaleORM();
        boolean state=false;
        for(var s:SaleORM.listAll()){
            if(s.getId() == id){
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
    public void update(Sale S){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Total_Price=?, Customer_id=?, User_id=? WHERE id=?")){
            stmt.setDouble(1,S.getTotal_Price());
            stmt.setInt(2,S.getCustomer_id());
            stmt.setInt(3,S.getUser_id());
            stmt.setInt(4,S.getId());
            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}
