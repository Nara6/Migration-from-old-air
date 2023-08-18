package TP09;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class Student {
    // Attribute
    private String name;
    private Date DoB;
    private String phone;
    private String city;
    private String country;
    private String group;

    // Accessor & Mutator;
    public String getName() {
        return this.name;
    }

    public void setName(String name){
        try{
            if(!name.isEmpty()){
                this.name = name;
            }else throw new NullPointerException();
        }catch(NullPointerException e){
            System.out.println(e.getMessage());
        }
        
    }

    public Date getDoB() {
        return this.DoB;
    }

    public void setDoB(Date DoB){
        try{
            Calendar now = Calendar.getInstance();
            now.set(Calendar.YEAR,now.get(Calendar.YEAR)-18);
            Date born = now.getTime();
            if(DoB.compareTo(born)<=0){
                this.DoB = DoB;
            }else throw new InvalidBirthDateException();
        }catch (InvalidBirthDateException e){
            System.out.println(e.getMessage());
        }
        
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        try{
            if(!phone.isEmpty()){
                this.phone = phone;
            }else throw new NullPointerException();
        }catch(NullPointerException e){
            System.out.println(e.getMessage());
        }
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        try{
            if(!city.isEmpty()){
                this.city = city;
            }else throw new NullPointerException();
        }catch(NullPointerException e){
            System.out.println(e.getMessage());
        }
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        try{
            if(!country.isEmpty()){
                this.country = country;
            }else throw new NullPointerException();
        }catch(NullPointerException e){
            System.out.println(e.getMessage());
        }
    }

    public String getGroup() {
        return this.group;
    }

    public void setGroup(String group) {
        try{
            if(!group.isEmpty()){
                this.group = group;
            }else throw new NullPointerException();
        }catch(NullPointerException e){
            System.out.println(e.getMessage());
        }
    }

    public static Student dataInput() throws Exception{
        Scanner sc = new Scanner(System.in);
        SimpleDateFormat formatDate = new SimpleDateFormat("dd/MM/yyyy");
        Student st = new Student();
        System.out.print("Name: ");
        st.setName(sc.nextLine());
        System.out.print("Birth Date(DD/MM/YYYY): ");
        try{
            st.setDoB(formatDate.parse(sc.nextLine()));
        }catch (ParseException e){
            System.out.println("Invalid Date of Birth!!!");
        }
        System.out.print("Phone Number: ");
        st.setPhone(sc.nextLine());
        System.out.print("City: ");
        st.setCity(sc.nextLine());
        System.out.print("Country: ");
        st.setCountry(sc.nextLine());
        System.out.print("Group: ");
        st.setGroup(sc.nextLine());
        return st; 
    }
    
    public static void main(String[] args) throws Exception {
        Student st = Student.dataInput();
        System.out.println(st.name+"\t"+st.DoB+"\t"+st.phone+"\t"+st.city+"\t"+st.country+"\t"+st.group);
    }

}