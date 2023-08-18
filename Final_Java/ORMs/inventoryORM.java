package ORMs;

import Models.inventories;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;




public class inventoryORM extends ORM<inventories> {
    public inventoryORM() {
        tableName = "inventories";
    }

    @Override
    public ArrayList<inventories> listAll() {
        ArrayList<inventories> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new inventories(rs.getInt("id"), rs.getInt(2), rs.getInt(3), rs.getString(4)));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }

    @Override
    public inventories add(inventories t) {
        SimpleDateFormat dFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName+" VALUES(NULL,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setInt(1, t.getBook_id());
            stmt.setInt(2, t.getCopies());
            stmt.setString(3, t.getSrcurl());
            stmt.setString(4, dFormat.format(t.getCreated_at()));
            
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) t.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return t;
    }

    @Override
    public boolean delete (int id) {
        try (var stmt = connection.prepareStatement("DELETE FROM " + tableName + " WHERE id = ?")){
            stmt.setString(1, id+"");
            stmt.execute();
            return true;
        }catch(SQLException e){
            e.printStackTrace();
            return false;
        }
    } 

    @Override
    public void update (inventories t) {
        try (var stmt = connection.prepareStatement("UPDATE " + tableName + " SET book_id = ?, copies = ?, srcurl = ?, created_ad =CURRENT_TIMESTAMP() WHERE id = ?")){
            stmt.setInt(1, t.getBook_id());
            stmt.setInt(2, t.getCopies());
            stmt.setString(3,t.getSrcurl());
            stmt.setInt(4, t.getId());
            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
