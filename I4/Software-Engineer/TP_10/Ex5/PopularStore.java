package Ex5;

import java.util.Date;

public class PopularStore {
    private String start,end,order_status;
    private long card_number;
    private  float price;


    private Date date_order;


    public PopularStore(){}
    public  PopularStore (Integer id_customer,Date date_order, String order_status){
        this.id_customer = id_customer;
        this.date_order= date_order;
        this.order_status = order_status;
    }
    public PopularStore(Integer id_customer,String start, String end, String order_status, float price,
                        long card_number, int password,Date date_order) {
        this.id_customer=id_customer;
        this.start = start;
        this.end = end;
        this.order_status = order_status;
        this.price = price;
        this.card_number = card_number;
        this.password = password;
        this.date_order =date_order;
    }


    @Override
    public String toString() {


        return "" +
                "\nReceipt: \n-----------------------\n" +
                "Customer No.: 0000" + id_customer  +
                "\n" + order_status + "= " +price+"$\n"+

                "(In credit card '" + card_number +")"+"\n__________Thanks you!!___________\n\n"+
                "Issue Date: "+date_order+" "+end+"\n_________________________________\n"+"End Serving time "+end+

                "";
    }

    public Date getDate_order() {
        return date_order;
    }

    public void setDate_order(Date date_order) {
        this.date_order = date_order;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String start) {
        this.start = start;
    }

    public String getEnd() {
        return end;
    }

    public void setEnd(String end) {
        this.end = end;
    }

    public String getOrder_status() {
        return order_status;
    }

    public void setOrder_status(String order_status) {
        this.order_status = order_status;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public long getCard_number() {
        return card_number;
    }

    public void setCard_number(long card_number) {
        this.card_number = card_number;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public Integer getId_customer() {
        return id_customer;
    }

    public void setId_customer(Integer id_customer) {
        this.id_customer = id_customer;
    }

    private int password;
    private Integer id_customer;


}

