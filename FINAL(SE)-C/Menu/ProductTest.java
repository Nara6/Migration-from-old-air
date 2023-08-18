package Menu;
import Models.Product;
import ORMs.ProductORM;
import java.util.Scanner;



public class ProductTest {
    public static void main(String[] args) {
        ProductORM product = new ProductORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR PRODUCT-------------------------");
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
                System.out.println("--------------------------PRODUCT-------------------------");
                System.out.println("|ID\t\tName\t\t\tCost_Price\t\tSell_Price\t\tUnit\t\tCategory_id\n");
                for(var c:product.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t\t"+c.getCost_Price()+"\t\t\t"+c.getSell_Price()+"\t\t\t"+c.getUnit()+"\t\t"+c.getCategory_id());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*NAME: ");
                String name = sc.next();
                System.out.print("\n\t*COST PRICE: ");
                while(!sc.hasNextDouble()){
                    System.out.print("PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                double cost_price = sc.nextDouble();
                System.out.print("\n\t*SELL PRICE: ");
                while(!sc.hasNextDouble()){
                    System.out.print("PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                double sell_price = sc.nextDouble();
                System.out.print("\n\t*UNIT: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int unit = sc.nextInt();
                System.out.print("\n\tCATEGORY ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int category_id = sc.nextInt();
                var pro = new Product(0, name,cost_price,sell_price,unit,category_id);
                product.add(pro);
                System.out.println("|ID\t\tName\t\t\tCost_Price\t\tSell_Price\t\tUnit\t\tCategory_id\n");
                for(var c:product.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t\t"+c.getCost_Price()+"\t\t\t"+c.getSell_Price()+"\t\t\t"+c.getUnit()+"\t\t"+c.getCategory_id());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tName\t\t\tCost_Price\t\tSell_Price\t\tUnit\t\tCategory_id\n");
                for(var c:product.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t\t"+c.getCost_Price()+"\t\t\t"+c.getSell_Price()+"\t\t\t"+c.getUnit()+"\t\t"+c.getCategory_id());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:product.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    
                    System.out.print("NEW NAME OF CATEGORY: ");
                    String newName = sc.next();
                    System.out.print("\n\t* NEW COST PRICE: ");
                    while(!sc.hasNextDouble()){
                        System.out.print("PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    double new_cost_price = sc.nextDouble();
                    System.out.print("\n\t* NEW SELL PRICE: ");
                    while(!sc.hasNextDouble()){
                        System.out.print("PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    double new_sell_price = sc.nextDouble();
                    System.out.print("\n\t* NEW UNIT: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_unit = sc.nextInt();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING CATEGORY ID.");
                    System.out.print("\n\t NEW CATEGORY ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_category_id = sc.nextInt();
                    var newProduct = new Product(id, newName,new_cost_price,new_sell_price,new_unit,new_category_id);
                    product.update(newProduct);
                    System.out.println("|ID\t\tName\t\t\tCost_Price\t\tSell_Price\t\tUnit\t\tCategory_id\n");
                    for(var c:product.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t\t"+c.getCost_Price()+"\t\t\t"+c.getSell_Price()+"\t\t\t"+c.getUnit()+"\t\t"+c.getCategory_id());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tName\t\t\tCost_Price\t\tSell_Price\t\tUnit\t\tCategory_id\n");
                for(var c:product.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t\t"+c.getCost_Price()+"\t\t\t"+c.getSell_Price()+"\t\t\t"+c.getUnit()+"\t\t"+c.getCategory_id());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = product.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tName\t\t\tCost_Price\t\tSell_Price\t\tUnit\t\tCategory_id\n");
                    for(var c:product.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t\t"+c.getCost_Price()+"\t\t\t"+c.getSell_Price()+"\t\t\t"+c.getUnit()+"\t\t"+c.getCategory_id());
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
