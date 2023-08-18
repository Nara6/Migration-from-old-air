package ORMs;
import Models.Stock;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;



public class StockORM extends ORM<Stock>{
    public StockORM() {
        tableName = "Stocks";
    }
    // List all Data in Product
    @Override
    public ArrayList<Stock> listAll(){
        ArrayList<Stock> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Stock(rs.getInt("id"),rs.getInt("Quantity"),rs.getInt("Unit"),rs.getInt("Product_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Stock add(Stock S){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setInt(1,S.getQuantity());
            stmt.setInt(2,S.getUnit());
            stmt.setInt(3,S.getProduct_id());
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
        var StockORM = new StockORM();
        boolean state=false;
        for(var s:StockORM.listAll()){
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
    public void update(Stock S){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Quantity=?, Unit=?, Product_id=? WHERE id=?")){
            stmt.setInt(1,S.getQuantity());
            stmt.setInt(2,S.getUnit());
            stmt.setInt(3,S.getProduct_id());
            stmt.setInt(4,S.getId());
            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}
