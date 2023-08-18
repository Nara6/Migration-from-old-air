package ORMs;
import Models.Purchase_Detail;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;



public class Purchase_DetailORM extends ORM<Purchase_Detail>{

    public Purchase_DetailORM() {
        tableName = "Purchase_Detail";
    }
    // List all Data in Category
    @Override
    public ArrayList<Purchase_Detail> listAll(){
        ArrayList<Purchase_Detail> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Purchase_Detail(rs.getInt("id"),rs.getInt("Quantity"),rs.getDouble("Total_Price"),rs.getDate("DatePurchase"),rs.getInt("Product_id"),rs.getInt("Purchase_id")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    
}   
