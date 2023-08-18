package Models;

public class publishers extends Model {
    private String publishername;
    private int address_id;

    public publishers(int id, String publishername, int address_id) {
        super(id);
        this.publishername = publishername;
        this.address_id = address_id;
    }


    public String getPublishername() {
        return this.publishername;
    }

    public void setPublishername(String publishername) {
        this.publishername = publishername;
    }

    public int getAddress_id() {
        return this.address_id;
    }

    public void setAddress_id(int address_id) {
        this.address_id = address_id;
    }

}
