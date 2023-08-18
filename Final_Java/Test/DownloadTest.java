package Test;

import Models.downloads;
import ORMs.downloadORM;
import java.util.Scanner;




public class DownloadTest {
    public static void main(String[] args) {
        downloadORM download = new downloadORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR DOWNLOAD-------------------------");
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
                System.out.println("--------------------------DOWNLOAD-------------------------");
                System.out.println("|ID\t\tUser_id\t\tBook_id\t\tDownlaod_at\n");
                for(var c:download.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUser_id()+"\t\t"+c.getBook_id()+"\t\t"+c.getDownloaded_at());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                System.out.print("\n\t*USER ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int user_id = sc.nextInt();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                System.out.print("\n\t*BOOK ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int book_id = sc.nextInt();
                var u = new downloads(0,user_id,book_id);
                download.add(u);
                System.out.println("|ID\t\tUser_id\t\tBook_id\t\tDownlaod_at\n");
                for(var c:download.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUser_id()+"\t\t"+c.getBook_id()+"\t\t"+c.getDownloaded_at());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tUser_id\t\tBook_id\t\tDownlaod_at\n");
                for(var c:download.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUser_id()+"\t\t"+c.getBook_id()+"\t\t"+c.getDownloaded_at());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:download.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                    System.out.print("\n\t*USER ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_user_id = sc.nextInt();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING USER ID.");
                    System.out.print("\n\t*USER ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_book_id = sc.nextInt();
                    var us = new downloads(id,new_user_id,new_book_id);
                    download.update(us);
                    System.out.println("|ID\t\tUser_id\t\tBook_id\t\tDownlaod_at\n");
                    for(var c:download.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getUser_id()+"\t\t"+c.getBook_id()+"\t\t"+c.getDownloaded_at());
                    }
                }
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tUser_id\t\tBook_id\t\tDownlaod_at\n");
                for(var c:download.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUser_id()+"\t\t"+c.getBook_id()+"\t\t"+c.getDownloaded_at());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = download.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tUser_id\t\tBook_id\t\tDownlaod_at\n");
                    for(var c:download.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getUser_id()+"\t\t"+c.getBook_id()+"\t\t"+c.getDownloaded_at());
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
