package ORMs;

import Model.Images;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Scanner;

public class ImagesORM extends ORM<Images>{
    public ImagesORM(){
        tableName= "images";
    }
    @Override
    public ArrayList<Images> listAll(){
        ArrayList<Images> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                // ar.add(new City(rs.getInt("id"),rs.getString("city"),rs.getInt("countryid")));
                ar.add(new Images(rs.getInt("id"),rs.getInt("hotelid"),rs.getString("imagePath")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    @Override
    public Images add(Images t){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
            +" VALUES(NULL,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setInt(1,t.getHotelid());
            stmt.setString(2,t.getImagePath()); 
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) t.setId(rs.getInt(1));
        }catch(SQLException e){ 
            e.printStackTrace();
        }
        return t;
    }
    @Override
    public boolean delete(int id){
        try(var stmt = connection.prepareStatement("DELETE FROM "+tableName+" WHERE id="+id)){
            stmt.execute();
            return true;
        }catch(SQLException e){
            e.printStackTrace();
            return false;
        }
    }
    @Override
    public void update(Images t){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET hotelid=?,imagePath=?  WHERE id=?")){
            stmt.setInt(1,t.getHotelid());
            stmt.setString(2,t.getImagePath());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
    @Override
    public ArrayList<Images> rawQueryList(String query){
        ArrayList<Images> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery(query);
            while(rs.next()){
                ar.add(new Images(rs.getInt("id"),rs.getInt("hotelid"),rs.getString("imagePath")));

            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    public static void main(String[] args) {
        var orm = new ImagesORM();
        System.out.println("\t------------List table in Images------------");
        //List all table in Images
        for(var c:orm.listAll()){
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nHotel ID: %d",c.getHotelid());
            System.out.printf("\nImage Path: %s",c.getImagePath());
        }
        // Add new data to Images
        System.out.printf("\n\n\t------------Add Attribute in Images------------");
        var images = new Images(0,1,"src.jpg");
        orm.add(images);
        System.out.println("\nNew added country ID and Name: "+images.getId()+", "+images.getImagePath());

        // Update Data in Images
        System.out.printf("\n\n\t------------update Attribute in Images------------");
        int hold=0;
        System.out.println("\n\tPlease Input a ID: ");
        Scanner sc = new Scanner(System.in);
        int id = sc.nextInt();
        for(var c:orm.listAll()){
            if(id==c.getId()){
                hold++;
            }
        }
        if(hold==0){
            System.out.println("\nID not found!!");
        }else{
            System.out.println("\nFound!!");
            System.out.print("\n\tNew Hotel ID: ");
            int newHotelID=sc.nextInt();
            System.out.print("\n\tNew Image Path: ");
            String newImagePath=sc.next();
            var newimages = new Images(id,newHotelID,newImagePath);
            orm.update(newimages);
        }
        //Delete data by ID 
        boolean delete = orm.delete(2);
        if(delete){
            System.out.println("Success");
        }else{
            System.out.println("Fail");
        }
        // List Row by RawQuery
        for (var c : orm.rawQueryList("SELECT * FROM images ")) {
            System.out.printf("\nID: %d",c.getId());
            System.out.printf("\nHotel ID: %d",c.getHotelid());
            System.out.printf("\nImage Path: %s",c.getImagePath());
        }
        
    }
}
