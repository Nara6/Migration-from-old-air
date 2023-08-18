package Menu;
import Models.Stock;
import ORMs.StockORM;
import java.util.Scanner;




public class StockTest {
    public static void main(String[] args) {
        StockORM stock = new StockORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR STOCK-------------------------");
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
                System.out.println("--------------------------STOCK-------------------------");
                System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
                for(var c:stock.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
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
                System.out.print("\n\t*UNIT: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int unit = sc.nextInt();
                System.out.print("\n\tPRODUCT ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int product_id = sc.nextInt();
                var sto = new Stock(0, quantity,unit,product_id);
                stock.add(sto);
                System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
                for(var c:stock.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
                for(var c:stock.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:stock.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*QUANTITY: ");
                    while(!sc.hasNextInt()){
                        System.out.print("PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_quantity = sc.nextInt();
                    System.out.print("\n\t*UNIT: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_unit = sc.nextInt();
                    System.out.print("\n\t*PRODUCT ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_product_id = sc.nextInt();
                    var newStock = new Stock(id,new_quantity,new_unit,new_product_id);
                    stock.update(newStock);
                    System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
                    for(var c:stock.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
                for(var c:stock.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = stock.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tQuantity\t\tUnit\t\tProduct_id\n");
                    for(var c:stock.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getQuantity()+"\t\t\t"+c.getUnit()+"\t\t"+c.getProduct_id());
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
