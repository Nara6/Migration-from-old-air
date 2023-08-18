package Menu;
import Models.Sale_Detail;
import ORMs.Sale_DetailORM;
import java.sql.Date;
import java.util.Scanner;








public class Sale_DetailTest {
    public static void main(String[] args) {
        Sale_DetailORM sale = new Sale_DetailORM();
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
                System.out.println("|ID\t\tQuantity\t\tTotal_Price\t\tDate_Sale\t\tProduct_id\t\tSale_id\n");
                for(var c:sale.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getTotal_Price()+"\t\t"+c.getDate_Sale()+"\t\t"+c.getProduct_id()+"\t\t"+c.getSale_id());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*QUANTITY: ");
                while(!sc.hasNextInt()){
                    System.out.print("PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int quantity = sc.nextInt();
                System.out.print("\n\t*TOTAL PRICE: ");
                while(!sc.hasNextDouble()){
                    System.out.print("PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                double total_price = sc.nextDouble();
                System.out.print("\n\t*DATE SALE: ");
                String d = sc.nextLine();
                Date date = Date.valueOf(d);
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING CUSTOMER ID.");
                System.out.print("\n\t*PRODUCT ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int product_id = sc.nextInt();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                System.out.print("\n\t*USER ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int user_id = sc.nextInt();
                var sa = new Sale_Detail(0,quantity, total_price,date,product_id,user_id);
                sale.add(sa);
                System.out.println("|ID\t\tQuantity\t\tTotal_Price\t\tDate_Sale\t\tProduct_id\t\tSale_id\n");
                for(var c:sale.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getTotal_Price()+"\t\t"+c.getDate_Sale()+"\t\t"+c.getProduct_id()+"\t\t"+c.getSale_id());
                }
                break;
            //     case 3:
            //     System.out.println("3. UPDATE RECORD");
            //     System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
            //     for(var c:sale.listAll()){
            //         System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
            //     }
            //     System.out.print("Enter an ID: ");
            //     while(!sc.hasNextInt()){
            //         System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
            //         sc.next();
            //     }
            //     int id = sc.nextInt();
            //     int hold=0;
            //     for (var c:sale.listAll()){
            //         if(c.getId()==id){
            //             hold++;
            //         }
            //     }
            //     if(hold==0){
            //         System.out.println("\tID NOT FOUND!!!");
            //     }else{
            //         System.out.print("\n\t*TOTAL PRICE: ");
            //         while(!sc.hasNextDouble()){
            //             System.out.print("PLEASE INPUT ONLY NUMBER: ");
            //             sc.next();
            //         }
            //         double new_total_price = sc.nextDouble();
            //         System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING CUSTOMER ID.");
            //         System.out.print("\n\t*CUSTOMER ID: ");
            //         while(!sc.hasNextInt()){
            //             System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
            //             sc.next();
            //         }
            //         int new_customer_id = sc.nextInt();
            //         System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
            //         System.out.print("\n\t*USER ID: ");
            //         while(!sc.hasNextInt()){
            //             System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
            //             sc.next();
            //         }
            //         int new_user_id = sc.nextInt();
            //         var newSale = new Sale(id,new_total_price,new_customer_id,new_user_id);
            //         sale.update(newSale);
            //         System.out.println("|ID\t\tTotal_Price\t\tCustomer_id\t\tUser_id\n");
            //         for(var c:sale.listAll()){
            //             System.out.println(c.getId()+"\t\t"+c.getTotal_Price()+"\t\t\t"+c.getCustomer_id()+"\t\t"+c.getUser_id());
            //         }
            //     } 
            //     break;
            //     // case 4:
            //     // System.out.println("4. DELETED RECORD BY ID");
            //     // System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
            //     // for(var c:stock.listAll()){
            //     //     System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
            //     // }
            //     // System.out.print("ENTER an ID: ");
            //     // while(!sc.hasNextInt()){
            //     //     System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
            //     //     sc.next();
            //     // }
            //     // int Did = sc.nextInt();
            //     // boolean isDelete = stock.delete(Did);
            //     // if(isDelete){
            //     //     System.out.println("Successful");
            //     //     System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
            //     //     for(var c:stock.listAll()){
            //     //         System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
            //     //     }
            //     // }else{
            //     //     System.out.println("Fail");
            //     // }
            //     // break;
            //     // case 5:
            //     // System.out.println("\n\t***5. EXIT\n\n");
            //     // break;
            }
        }while(option!=5);
    }
    
}
