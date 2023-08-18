package Models;

public class addresses extends Model {
    private String houseno;
    private String streetno;
    private String streetname;
    private String villagename;
    private String districtname;
    private String communename;
    private String provincename;
    private String cityname;
    private String countryname;
    private int isCurrent;


    public addresses(int id,String houseno, String streetno, String streetname, String villagename, String districtname, String communename, String provincename, String cityname, String countryname, int isCurrent) {
        super(id);
        this.houseno = houseno;
        this.streetno = streetno;
        this.streetname = streetname;
        this.villagename = villagename;
        this.districtname = districtname;
        this.communename = communename;
        this.provincename = provincename;
        this.cityname = cityname;
        this.countryname = countryname;
        this.isCurrent = isCurrent;
    }


    public String getHouseno() {
        return this.houseno;
    }

    public void setHouseno(String houseno) {
        this.houseno = houseno;
    }

    public String getStreetno() {
        return this.streetno;
    }

    public void setStreetno(String streetno) {
        this.streetno = streetno;
    }

    public String getStreetname() {
        return this.streetname;
    }

    public void setStreetname(String streetname) {
        this.streetname = streetname;
    }

    public String getVillagename() {
        return this.villagename;
    }

    public void setVillagename(String villagename) {
        this.villagename = villagename;
    }

    public String getDistrictname() {
        return this.districtname;
    }

    public void setDistrictname(String districtname) {
        this.districtname = districtname;
    }

    public String getCommunename() {
        return this.communename;
    }

    public void setCommunename(String communename) {
        this.communename = communename;
    }

    public String getProvincename() {
        return this.provincename;
    }

    public void setProvincename(String provincename) {
        this.provincename = provincename;
    }

    public String getCityname() {
        return this.cityname;
    }

    public void setCityname(String cityname) {
        this.cityname = cityname;
    }

    public String getCountryname() {
        return this.countryname;
    }

    public void setCountryname(String countryname) {
        this.countryname = countryname;
    }

    public int getIsCurrent() {
        return this.isCurrent;
    }

    public void setIsCurrent(int isCurrent) {
        this.isCurrent = isCurrent;
    }

}
