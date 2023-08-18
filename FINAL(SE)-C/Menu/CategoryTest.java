package Menu;
import Models.Category;
import ORMs.CategoryORM;
import java.util.Scanner;


public class CategoryTest {
    public static void main(String[] args) {
        CategoryORM category = new CategoryORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR CATEGORY-------------------------");
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
                System.out.println("--------------------------Catagory-------------------------");
                System.out.println("|ID\t\t\t\tName\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t\t\t"+c.getName());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*NAME: ");
                String name = sc.next();
                var cat = new Category(0, name);
                category.add(cat);
                System.out.println("|ID\t\t\t\tName\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t\t\t"+c.getName());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\t\t\tName\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t\t\t"+c.getName());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:category.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("NEW NAME OF CATEGORY: ");
                    String newName = sc.next();
                    var newCategory = new Category(id, newName);
                    category.update(newCategory);
                    System.out.println("|ID\t\t\t\tName\n");
                    for(var c:category.listAll()){
                        System.out.println(c.getId()+"\t\t\t\t"+c.getName());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\t\t\tName\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t\t\t"+c.getName());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = category.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\t\t\tName\n");
                    for(var c:category.listAll()){
                        System.out.println(c.getId()+"\t\t\t\t"+c.getName());
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
