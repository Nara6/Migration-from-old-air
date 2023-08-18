package Menu;
import Models.Supplier;
import ORMs.SupplierORM;
import java.util.Scanner;






public class SupplierTest {
    public static void main(String[] args) {
        SupplierORM supplier = new SupplierORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR SUPPLIER-------------------------");
            System.out.println("1. READ FROM DATABASE");
            System.out.println("2. CREATE NEW RECORD");
            System.out.println("3. UPDATE RECORD");
            System.out.println("4. DELETED RECORD BY ID");
            System.out.println("5. EXIT");
            System.out.print("ENTER YOUR OPTION(1-5): ");
            while(!sc.hasNextInt()){
                System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                sc.next();
            }
            option = sc.nextInt();
            switch(option) {
                case 1:
                System.out.println("--------------------------SUPPLIER-------------------------");
                System.out.println("|ID\t\tName\t\tPhone\t\t\tAdress\n");
                for(var c:supplier.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPhone()+"\t\t\t"+c.getAddress());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*NAME: ");
                String name = sc.next();

                System.out.print("\n\t*PHONE: ");
                String phone = sc.next();

                System.out.print("\n\t*ADDRESS: ");
                String address = sc.next();
                

                var u = new Supplier(0,name ,phone,address);
                supplier.add(u);
                System.out.println("|ID\t\tName\t\tPhone\t\t\tAdress\n");
                for(var c:supplier.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPhone()+"\t\t\t"+c.getAddress());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tName\t\tPhone\t\t\tAdress\n");
                for(var c:supplier.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPhone()+"\t\t\t"+c.getAddress());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:supplier.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*NAME: ");
                    String new_name = sc.next();

                    System.out.print("\n\t*PHONE: ");
                    String new_phone = sc.next();

                    System.out.print("\n\t*ADDRESS: ");
                    String new_address = sc.next();

                    var cs = new Supplier(id,new_name ,new_phone,new_address);
                    supplier.update(cs);
                    System.out.println("|ID\t\tName\t\tPhone\t\t\tAdress\n");
                    for(var c:supplier.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPhone()+"\t\t\t"+c.getAddress());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tName\t\tPhone\t\t\tAdress\n");
                for(var c:supplier.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPhone()+"\t\t\t"+c.getAddress());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = supplier.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tName\t\tPhone\t\t\tAdress\n");
                    for(var c:supplier.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPhone()+"\t\t\t"+c.getAddress());
                    }
                }else{
                    System.out.println("Fail");
                }
                break;
                case 5:
                System.out.println("\n\t***5. EXIT\n\n");
                break;
            }
        }while(option!=5);
    }
    
}
