package Menu;
import Models.Sale;
import ORMs.SaleORM;
import java.util.Scanner;





public class SaleTest {
    public static void main(String[] args) {
        SaleORM sale = new SaleORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR SALE-------------------------");
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
                System.out.println("--------------------------SALE-------------------------");
                System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
                for(var c:sale.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*TOTAL PRICE: ");
                while(!sc.hasNextDouble()){
                    System.out.print("PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                double total_price = sc.nextDouble();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING CUSTOMER ID.");
                System.out.print("\n\t*CUSTOMER ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int customer_id = sc.nextInt();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                System.out.print("\n\t*USER ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int user_id = sc.nextInt();
                var sa = new Sale(0, total_price,customer_id,user_id);
                sale.add(sa);
                System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
                for(var c:sale.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
                for(var c:sale.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:sale.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*TOTAL PRICE: ");
                    while(!sc.hasNextDouble()){
                        System.out.print("PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    double new_total_price = sc.nextDouble();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING CUSTOMER ID.");
                    System.out.print("\n\t*CUSTOMER ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_customer_id = sc.nextInt();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                    System.out.print("\n\t*USER ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_user_id = sc.nextInt();
                    var newSale = new Sale(id,new_total_price,new_customer_id,new_user_id);
                    sale.update(newSale);
                    System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
                    for(var c:sale.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
                for(var c:sale.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = sale.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
                    for(var c:sale.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
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
