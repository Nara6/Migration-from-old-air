package Test;

import Models.inventories;
import ORMs.inventoryORM;
import java.util.Scanner;





public class InventoryTest {
    public static void main(String[] args) {
        inventoryORM inventory = new inventoryORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR INVENTORY-------------------------");
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
                System.out.println("--------------------------INVENTORY-------------------------");
                System.out.println("|ID\t\tBook_id\t\tCopies\t\tSrcURL\t\tCreated_at\n");
                for(var c:inventory.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getBook_id()+"\t\t"+c.getCopies()+"\t\t"+c.getSrcurl()+"\t\t"+c.getCreated_at());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING BOOK ID.");
                System.out.print("\n\t*BOOK ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int book_id = sc.nextInt();
                System.out.print("\n\t*COPIES: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int copies = sc.nextInt();
                System.out.print("\n\t*SRC URL: ");
                String src = sc.next();
                var u = new inventories(0,book_id,copies,src);
                inventory.add(u);
                System.out.println("|ID\t\tBook_id\t\tCopies\t\tSrcURL\t\tCreated_at\n");
                for(var c:inventory.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getBook_id()+"\t\t"+c.getCopies()+"\t\t"+c.getSrcurl()+"\t\t"+c.getCreated_at());
                }
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tBook_id\t\tCopies\t\tSrcURL\t\tCreated_at\n");
                for(var c:inventory.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getBook_id()+"\t\t"+c.getCopies()+"\t\t"+c.getSrcurl()+"\t\t"+c.getCreated_at());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:inventory.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING BOOK ID.");
                    System.out.print("\n\t*BOOK ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_book_id = sc.nextInt();
                    System.out.print("\n\t*COPIES: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_copies = sc.nextInt();
                    System.out.print("\n\t*SRC URL: ");
                    String new_src = sc.next();
                    var us = new inventories(id,new_book_id,new_copies,new_src);
                    inventory.update(us);
                    System.out.println("|ID\t\tBook_id\t\tCopies\t\tSrcURL\t\tCreated_at\n");
                    for(var c:inventory.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getBook_id()+"\t\t"+c.getCopies()+"\t\t"+c.getSrcurl()+"\t\t"+c.getCreated_at());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tBook_id\t\tCopies\t\tSrcURL\t\tCreated_at\n");
                for(var c:inventory.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getBook_id()+"\t\t"+c.getCopies()+"\t\t"+c.getSrcurl()+"\t\t"+c.getCreated_at());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = inventory.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tBook_id\t\tCopies\t\tSrcURL\t\tCreated_at\n");
                    for(var c:inventory.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getBook_id()+"\t\t"+c.getCopies()+"\t\t"+c.getSrcurl()+"\t\t"+c.getCreated_at());
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
