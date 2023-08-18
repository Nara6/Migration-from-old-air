package Menu;
import Models.User;
import ORMs.UserORM;
import java.util.Scanner;





public class UserTest {
    public static void main(String[] args) {
        UserORM user = new UserORM();
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
                System.out.println("|ID\t\tName\t\tPassword\t\tConfirm_Password\t\t\tProfile\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPassword()+"\t\t\t"+c.getConfirm_Password()+"\t\t\t\t\t"+c.getProfile());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*NAME: ");
                String name = sc.next();

                System.out.print("\n\t*PASSWORD: ");
                String password = sc.next();

                System.out.print("\n\tCONFIRM PASSWORD: ");
                String Cpassword = sc.next();
                
                System.out.print("\n\tPROFILE PATH: ");
                String profile = sc.next();

                var u = new User(0,name ,password,Cpassword,profile);
                user.add(u);
                System.out.println("|ID\t\tName\t\tPassword\t\tConfirm_Password\t\t\tProfile\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPassword()+"\t\t\t"+c.getConfirm_Password()+"\t\t\t\t\t"+c.getProfile());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\t\tName\t\tPassword\t\tConfirm_Password\t\t\tProfile\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPassword()+"\t\t\t"+c.getConfirm_Password()+"\t\t\t\t\t"+c.getProfile());
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
                    System.out.print("\n\t*NAME: ");
                    String new_name = sc.next();

                    System.out.print("\n\t*PASSWORD: ");
                    String new_password = sc.next();

                    System.out.print("\n\tCONFIRM PASSWORD: ");
                    String new_Cpassword = sc.next();
                    
                    System.out.print("\n\tPROFILE PATH: ");
                    String new_profile = sc.next();

                    var us = new User(id,new_name ,new_password,new_Cpassword,new_profile);
                    user.update(us);
                    System.out.println("|ID\t\tName\t\tPassword\t\tConfirm_Password\t\t\tProfile\n");
                    for(var c:user.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPassword()+"\t\t\t"+c.getConfirm_Password()+"\t\t\t\t\t"+c.getProfile());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\t\tName\t\tPassword\t\tConfirm_Password\t\t\tProfile\n");
                for(var c:user.listAll()){
                    System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPassword()+"\t\t\t"+c.getConfirm_Password()+"\t\t\t\t\t"+c.getProfile());
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
                    System.out.println("|ID\t\tName\t\tPassword\t\tConfirm_Password\t\t\tProfile\n");
                    for(var c:user.listAll()){
                        System.out.println(c.getId()+"\t\t"+c.getName()+"\t\t"+c.getPassword()+"\t\t\t"+c.getConfirm_Password()+"\t\t\t\t\t"+c.getProfile());
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
