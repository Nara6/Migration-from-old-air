package ORMs;

import Models.addresses;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;


public class addressORM extends ORM<addresses>{
    public addressORM(){
        tableName= "addresses";
    }
    // List all Data in Product
    @Override
    public ArrayList<addresses> listAll(){
        ArrayList<addresses> ar = new ArrayList<>();
        try(var stmt = connection.createStatement()){
            ResultSet rs = stmt.executeQuery("SELECT * FROM "+tableName);
            while(rs.next()){
                ar.add(new addresses(rs.getInt("id"),rs.getString("houseno"),rs.getString("streetno"),rs.getString("streetname"),rs.getString("villagename"),rs.getString("districtname"),rs.getString("communnename"),rs.getString("provincename"),rs.getString("cityname"),rs.getString("countryname"),rs.getInt("iscurrent")));
            }
        }catch(SQLException e){
            e.printStackTrace();
        }
        return ar;
    }
    // Add New Record to DB
    @Override
    public addresses add(addresses r){
        try(var stmt = connection.prepareStatement("INSERT INTO "+tableName
        +" VALUES(NULL,?,?,?,?,?,?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS)){
            stmt.setString(1,r.getHouseno());
            stmt.setString(2,r.getStreetno());
            stmt.setString(3,r.getStreetname());
            stmt.setString(4,r.getVillagename());
            stmt.setString(5,r.getDistrictname());
            stmt.setString(6,r.getCommunename());
            stmt.setString(7,r.getProvincename());
            stmt.setString(8,r.getCityname());
            stmt.setString(9,r.getCountryname());
            stmt.setInt(10,r.getIsCurrent());
            stmt.execute();
            var rs = stmt.getGeneratedKeys();
            if(rs.next()) r.setId(rs.getInt(1));
        }catch(SQLException e){
            e.printStackTrace();
        }
        return r;
    }
    // Delete Record By ID
    @Override
    public boolean delete(int id){
        var addressORM = new addressORM();
        boolean state=false;
        for(var u:addressORM.listAll()){
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
    // Update Record By ID
    @Override
    public void update(addresses r){
        try(var stmt = connection.prepareStatement("UPDATE "+tableName+" SET houseno=?, streetno=?, streetname=?, villagename=?, districtname=?, communnename=?, provincename=?, cityname=?, countryname=?, iscurrent=? WHERE id=?")){
            stmt.setString(1,r.getHouseno());
            stmt.setString(2,r.getStreetno());
            stmt.setString(3,r.getStreetname());
            stmt.setString(4,r.getVillagename());
            stmt.setString(5,r.getDistrictname());
            stmt.setString(6,r.getCommunename());
            stmt.setString(7,r.getProvincename());
            stmt.setString(8,r.getCityname());
            stmt.setString(9,r.getCountryname());
            stmt.setInt(10,r.getIsCurrent());
            stmt.setInt(11,r.getId());
            stmt.executeUpdate();
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}
