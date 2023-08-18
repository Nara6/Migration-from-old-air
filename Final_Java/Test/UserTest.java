package Test;

import Models.users;
import ORMs.userORM;
import java.util.Scanner;





public class UserTest {
    public static void main(String[] args) {
        userORM user = new userORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR USER-------------------------");
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
                System.out.println("--------------------------USER-------------------------");
                System.out.println("|ID\t\tUsername\tPWD\t\tRole_id\t\tToken\t\tGroup_id\t\tRemote_addr\t\tForward_addr\t\tImage\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUsername()+"\t\t"+c.getPwd()+"\t\t"+c.getRoleid()+"\t\t"+c.getToken()+"\t\t"+c.getGroup_id()+"\t\t"+c.getRemote_addr()+"\t\t"+c.getForward_addr()+"\t\t"+c.getImage());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*USERNAME: ");
                String name = sc.next();
                System.out.print("\n\t*PASSWORD: ");
                String password = sc.next();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING ROLE ID.");
                System.out.print("\n\t*ROLE ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int role_id = sc.nextInt();
                System.out.print("\n\tTOKEN: ");
                String token = sc.next();
                System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING GROUP ID.");
                System.out.print("\n\t*GROUP ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                    sc.next();
                }
                int group_id = sc.nextInt();
                System.out.print("\n\tREMOTE ADDRESS: ");
                String remote_add = sc.next();
                System.out.print("\n\tFORWARD ADDRESS: ");
                String forward_add = sc.next();
                System.out.print("\n\tIMAGE: ");
                String image = sc.next();
                var u = new users(0,name,password,role_id,token,group_id,remote_add,forward_add,image);
                user.add(u);
                System.out.println("|ID\t\tUsername\tPWD\t\tRole_id\t\tToken\t\tGroup_id\t\tRemote_addr\t\tForward_addr\t\tImage\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUsername()+"\t\t"+c.getPwd()+"\t\t"+c.getRoleid()+"\t\t"+c.getToken()+"\t\t"+c.getGroup_id()+"\t\t"+c.getRemote_addr()+"\t\t"+c.getForward_addr()+"\t\t"+c.getImage());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tUsername\tPWD\t\tRole_id\t\tToken\t\tGroup_id\t\tRemote_addr\t\tForward_addr\t\tImage\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUsername()+"\t\t"+c.getPwd()+"\t\t"+c.getRoleid()+"\t\t"+c.getToken()+"\t\t"+c.getGroup_id()+"\t\t"+c.getRemote_addr()+"\t\t"+c.getForward_addr()+"\t\t"+c.getImage());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:user.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*USERNAME: ");
                    String new_name = sc.next();
                    System.out.print("\n\t*PASSWORD: ");
                    String new_password = sc.next();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING ROLE ID.");
                    System.out.print("\n\t*ROLE ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_role_id = sc.nextInt();
                    System.out.print("\n\tTOKEN: ");
                    String new_token = sc.next();
                    System.out.println("\t!CAUTION PLEASE INPUT THE EXISTING GROUP ID.");
                    System.out.print("\n\t*GROUP ID: ");
                    while(!sc.hasNextInt()){
                        System.out.print("\n\t***PLEASE INPUT ONLY NUMBER: ");
                        sc.next();
                    }
                    int new_group_id = sc.nextInt();
                    System.out.print("\n\tREMOTE ADDRESS: ");
                    String new_remote_add = sc.next();
                    System.out.print("\n\tFORWARD ADDRESS: ");
                    String new_forward_add = sc.next();
                    System.out.print("\n\tIMAGE: ");
                    String new_image = sc.next();

                    var us = new users(id,new_name,new_password,new_role_id,new_token,new_group_id,new_remote_add,new_forward_add,new_image);
                    user.update(us);
                    System.out.println("|ID\t\tUsername\tPWD\t\tRole_id\t\tToken\t\tGroup_id\t\tRemote_addr\t\tForward_addr\t\tImage\n");
                    for(var c:user.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getUsername()+"\t\t"+c.getPwd()+"\t\t"+c.getRoleid()+"\t\t"+c.getToken()+"\t\t"+c.getGroup_id()+"\t\t"+c.getRemote_addr()+"\t\t"+c.getForward_addr()+"\t\t"+c.getImage());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tUsername\tPWD\t\tRole_id\t\tToken\t\tGroup_id\t\tRemote_addr\t\tForward_addr\t\tImage\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getUsername()+"\t\t"+c.getPwd()+"\t\t"+c.getRoleid()+"\t\t"+c.getToken()+"\t\t"+c.getGroup_id()+"\t\t"+c.getRemote_addr()+"\t\t"+c.getForward_addr()+"\t\t"+c.getImage());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = user.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\t\tUsername\tPWD\t\tRole_id\t\tToken\t\tGroup_id\t\tRemote_addr\t\tForward_addr\t\tImage\n");
                    for(var c:user.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getUsername()+"\t\t"+c.getPwd()+"\t\t"+c.getRoleid()+"\t\t"+c.getToken()+"\t\t"+c.getGroup_id()+"\t\t"+c.getRemote_addr()+"\t\t"+c.getForward_addr()+"\t\t"+c.getImage());
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
