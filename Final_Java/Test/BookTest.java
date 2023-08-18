package Test;

import Models.books;
import ORMs.bookORM;
import java.util.Scanner;





public class BookTest {
    public static void main(String[] args) {
        bookORM book = new bookORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR BOOK-------------------------");
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
                System.out.println("--------------------------BOOK-------------------------");
                System.out.println("|ID\t\tTitle\t\tPath\t\tUser_id\t\tGroup_id\t\tPublisher_id\n");
                for(var c:book.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath()+"\t\t"+c.getUser_id()+"\t\t"+c.getGroup_id()+"\t\t"+c.getPublisher_id());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*TITLE: ");
                String title = sc.next();
                System.out.print("\n\t*PATH: ");
                String path = sc.next();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                System.out.print("\n\t*USER ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int user_id = sc.nextInt();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING GROUP ID.");
                System.out.print("\n\t*GROUP ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int group_id = sc.nextInt();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING PUBLISHER ID.");
                System.out.print("\n\t*PUBLISHER ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int publisher_id = sc.nextInt();
                var u = new books(0,title,path,user_id,group_id,publisher_id);
                book.add(u);
                System.out.println("|ID\t\tTitle\t\tPath\t\tUser_id\t\tGroup_id\t\tPublisher_id\n");
                for(var c:book.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath()+"\t\t"+c.getUser_id()+"\t\t"+c.getGroup_id()+"\t\t"+c.getPublisher_id());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tTitle\t\tPath\t\tUser_id\t\tGroup_id\t\tPublisher_id\n");
                for(var c:book.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath()+"\t\t"+c.getUser_id()+"\t\t"+c.getGroup_id()+"\t\t"+c.getPublisher_id());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:book.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*TITLE: ");
                    String new_title = sc.next();
                    System.out.print("\n\t*PATH: ");
                    String new_path = sc.next();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                    System.out.print("\n\t*USER ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_user_id = sc.nextInt();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING GROUP ID.");
                    System.out.print("\n\t*GROUP ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_group_id = sc.nextInt();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING PUBLISHER ID.");
                    System.out.print("\n\t*PUBLISHER ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_publisher_id = sc.nextInt();
                    var us = new books(id,new_title,new_path,new_user_id,new_group_id,new_publisher_id);
                    book.update(us);
                    System.out.println("|ID\t\tTitle\t\tPath\t\tUser_id\t\tGroup_id\t\tPublisher_id\n");
                    for(var c:book.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath()+"\t\t"+c.getUser_id()+"\t\t"+c.getGroup_id()+"\t\t"+c.getPublisher_id());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tTitle\t\tPath\t\tUser_id\t\tGroup_id\t\tPublisher_id\n");
                for(var c:book.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath()+"\t\t"+c.getUser_id()+"\t\t"+c.getGroup_id()+"\t\t"+c.getPublisher_id());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = book.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tTitle\t\tPath\t\tUser_id\t\tGroup_id\t\tPublisher_id\n");
                    for(var c:book.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath()+"\t\t"+c.getUser_id()+"\t\t"+c.getGroup_id()+"\t\t"+c.getPublisher_id());
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
