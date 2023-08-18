package Bonus;

import ORMs.bookORM;
import java.util.Scanner;


public class Main {
    public static void main(String[] args) {
        bookORM book = new bookORM();
        int option;
        int check=0;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("--------------------------BOOK-------------------------");
            System.out.println("|ID\t\tTitle\t\t\tPath\n");
            for(var c:book.listAll()){
                System.out.println(c.getId()+"\t\t"+c.getTitle()+"\t\t"+c.getPath());
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
                        check++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{


                }
            
        }while(check!=0);
    }
}
