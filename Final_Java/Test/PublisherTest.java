package Test;

import Models.publishers;
import ORMs.publisherORM;
import java.util.Scanner;





public class PublisherTest {
    public static void main(String[] args) {
        publisherORM publisher = new publisherORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR PUBLISHER-------------------------");
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
                System.out.println("--------------------------PUBLISHER-------------------------");
                System.out.println("|ID\t\tGroupName\t\tAddress_id\n");
                for(var c:publisher.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getPublishername()+"\t\t"+c.getAddress_id());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*NAME: ");
                String name = sc.next();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING ROLE ID.");
                System.out.print("\n\t*ADDRESS ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int address_id = sc.nextInt();
                var u = new publishers(0,name,address_id);
                publisher.add(u);
                System.out.println("|ID\t\tGroupName\t\tAddress_id\n");
                for(var c:publisher.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getPublishername()+"\t\t"+c.getAddress_id());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tGroupName\t\tAddress_id\n");
                for(var c:publisher.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getPublishername()+"\t\t"+c.getAddress_id());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:publisher.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*NAME: ");
                    String new_name = sc.next();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING ROLE ID.");
                    System.out.print("\n\t*ADDRESS ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_address_id = sc.nextInt();
                    var us = new publishers(id,new_name,new_address_id);
                    publisher.update(us);
                    System.out.println("|ID\t\tGroupName\t\tAddress_id\n");
                    for(var c:publisher.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getPublishername()+"\t\t"+c.getAddress_id());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tGroupName\t\tAddress_id\n");
                for(var c:publisher.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getPublishername()+"\t\t"+c.getAddress_id());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = publisher.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tGroupName\t\tAddress_id\n");
                    for(var c:publisher.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getPublishername()+"\t\t"+c.getAddress_id());
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
