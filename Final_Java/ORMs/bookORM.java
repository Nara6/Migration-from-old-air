package ORMs;

import Models.books;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;



public class bookORM extends ORM<books> {
    public bookORM() {
        tableName = "books";
    }

    @Override
    public ArrayList<books> listAll() {
        ArrayList<books> arr = new ArrayList<>();
        try (var stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery("SELECT * FROM " + tableName + ";");
            while (rs.next()) {
                arr.add(new books(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getInt(4), rs.getInt(5), rs.getInt(6)));
            }
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return arr;
    }

    @Override
    public books add(books i) {
        try (var stmt = connection.prepareStatement("INSERT INTO " + tableName
                + " VALUES(NULL,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)) {
            stmt.setString(1, i.getTitle());
            stmt.setString(2, i.getPath());
            stmt.setInt(3, i.getUser_id());
            stmt.setInt(4, i.getGroup_id());
            stmt.setInt(5, i.getPublisher_id());
            
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if (rs.next()) {
                i.setId(rs.getInt(1));
            }
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return i;
    }

    @Override
    public boolean delete (int id) {
        var bookORM = new bookORM();
        boolean state=false;
        for(var u:bookORM.listAll()){
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

    @Override
    public void update(books i) {
        try (var stmt = connection
                .prepareStatement("UPDATE " + tableName + " SET title = ? , path = ?, user_id = ?, group_id = ?, publisher_id = ? WHERE id = ?")) {
            stmt.setString(1, i.getTitle());
            stmt.setString(2, i.getPath());
            stmt.setInt(3, i.getUser_id());
            stmt.setInt(4, i.getGroup_id());
            stmt.setInt(5, i.getPublisher_id());
            stmt.setInt(6, i.getId());

            stmt.execute();
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
    }
}
