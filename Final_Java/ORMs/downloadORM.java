package ORMs;

import Models.downloads;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;


public class downloadORM extends ORM<downloads> {
    public downloadORM() {
        tableName = "downloads";
    }

    @Override
    public ArrayList<downloads> listAll() {
        ArrayList<downloads> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new downloads(rs.getInt("id"), rs.getInt(2), rs.getInt(3)));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }

    @Override
    public downloads add(downloads t) {
        SimpleDateFormat dFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName+" VALUES(NULL,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setInt(1, t.getUser_id());
            stmt.setInt(2, t.getBook_id());
            stmt.setString(3, dFormat.format(t.getDownloaded_at()));
            
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
    public void update (downloads t) {
        try (var stmt = connection.prepareStatement("UPDATE " + tableName + " SET user_id = ?, book_id = ?, downloaded_at = CURRENT_TIMESTAMP()" + " WHERE id = ?")){
            stmt.setInt(1, t.getUser_id());
            stmt.setInt(2, t.getBook_id());
            stmt.execute();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}