package ORMs;

import Models.Category;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class CategoryORM extends ORM<Category>{

    public CategoryORM() {
        tableName="Categories";
    }
    // List all Data in Category
    @Override
    public ArrayList<Category> listAll(){
        ArrayList<Category> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Category(rs.getInt("id"),rs.getString("name")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        CategoryORM C = new CategoryORM();
        for (var c: C.listAll()){
            System.out.println("ID: "+c.getId()+"Name: "+c.getName());
        }
    }
}   
