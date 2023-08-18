package ORMs;
import Models.Sale_Detail;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;




public class Sale_DetailORM extends ORM<Sale_Detail>{
    public Sale_DetailORM() {
        tableName = "Sales";
    }
    // List all Data in Product
    @Override
    public ArrayList<Sale_Detail> listAll(){
        ArrayList<Sale_Detail> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new Sale_Detail(rs.getInt("id"),rs.getInt("Quantity"),rs.getDouble("Total_Price"),rs.getDate("Date_Sale"),rs.getInt("Product_id"),rs.getInt("Sale_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public Sale_Detail add(Sale_Detail S){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setInt(1,S.getQuantity());
            stmt.setDouble(2,S.getTotal_Price());
            stmt.setDate(3,S.getDate_Sale());
            stmt.setInt(4,S.getProduct_id());
            stmt.setInt(5,S.getSale_id());
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
        var Sale_DetailORM = new Sale_DetailORM();
        boolean state=false;
        for(var s:Sale_DetailORM.listAll()){
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
    public void update(Sale_Detail S){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET Quantity=?, Total_Price=?, Date_Sale=? Product_id=? Sale_id=? WHERE id=?")){
            stmt.setInt(1,S.getQuantity());
            stmt.setDouble(2,S.getTotal_Price());
            stmt.setDate(3,S.getDate_Sale());
            stmt.setInt(4,S.getProduct_id());
            stmt.setInt(5,S.getSale_id());
            stmt.setInt(6,S.getId());
            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    
}
