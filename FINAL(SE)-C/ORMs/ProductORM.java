package ORMs;
import Models.Product;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class ProductORM extends ORM<Product>{
    public ProductORM() {
        tableName = "Products";
    }
    // List all Data in Product
    @Override
    public ArrayList<Product> listAll(){
        ArrayList<Product> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Product(rs.getInt("id"),rs.getString("name"),rs.getDouble("Cost_Price"),rs.getDouble("Sell_Price"),rs.getInt("Unit"),rs.getInt("Category_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Product add(Product P){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,P.getName());
            stmt.setDouble(2,P.getCost_Price());
            stmt.setDouble(3,P.getSell_Price());
            stmt.setDouble(4,P.getUnit());
            stmt.setDouble(5,P.getCategory_id());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) P.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return P;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var ProductORM = new ProductORM();
        boolean state=false;
        for(var p:ProductORM.listAll()){
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
    public void update(Product P){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Name=? Cost_Price=? Sell_Price=? Unit=? Category_id=? WHERE id=?")){
            stmt.setString(1, P.getName());
            stmt.setDouble(2,P.getCost_Price());
            stmt.setDouble(3,P.getSell_Price());
            stmt.setDouble(4,P.getUnit());
            stmt.setDouble(5,P.getCategory_id());
            stmt.setInt(6, P.getId());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}
