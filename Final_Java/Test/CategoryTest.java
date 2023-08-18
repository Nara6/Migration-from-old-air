package Test;

import Models.categories;
import ORMs.categoryORM;
import java.util.Scanner;




public class CategoryTest {
    public static void main(String[] args) {
        categoryORM category = new categoryORM();
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
                System.out.println("--------------------------CATEGORY-------------------------");
                System.out.println("|ID\t\tCategoryname\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getCategoryname());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*NAME: ");
                String name = sc.next();

                var u = new categories(0,name);
                category.add(u);
                System.out.println("|ID\t\tCategoryname\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getCategoryname());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tCategoryname\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getCategoryname());
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
                    System.out.print("\n\t*NAME: ");
                    String new_name = sc.next();

                    var us = new categories(id,new_name);
                    category.update(us);
                    System.out.println("|ID\t\tCategoryname\n");
                    for(var c:category.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getCategoryname());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tCategoryname\n");
                for(var c:category.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getCategoryname());
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
                    System.out.println("|ID\t\tCategoryname\n");
                    for(var c:category.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getCategoryname());
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
