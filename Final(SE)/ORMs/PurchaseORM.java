package ORMs;
import Models.Purchase;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;



public class PurchaseORM extends ORM<Purchase>{
    public PurchaseORM() {
        tableName = "Purchases";
    }
    // List all Data in Product
    @Override
    public ArrayList<Purchase> listAll(){
        ArrayList<Purchase> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Purchase(rs.getInt("id"),rs.getDouble("Total_Price"),rs.getInt("Supplier_id"),rs.getInt("User_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Purchase add(Purchase S){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setDouble(1,S.getTotal_Price());
            stmt.setInt(2,S.getSupllier_id());
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
        var PurchaseORM = new PurchaseORM();
        boolean state=false;
        for(var s:PurchaseORM.listAll()){
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
    public void update(Purchase S){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Total_Price=?, Supplier_id=?, User_id=? WHERE id=?")){
            stmt.setDouble(1,S.getTotal_Price());
            stmt.setInt(2,S.getSupllier_id());
            stmt.setInt(3,S.getUser_id());
            stmt.setInt(4,S.getId());
            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}
