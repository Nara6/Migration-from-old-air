package Test;

import Models.addresses;
import ORMs.addressORM;
import java.util.Scanner;





public class AddressTest {
    public static void main(String[] args) {
        addressORM addr = new addressORM();
        int option;
        do{
            Scanner sc = new Scanner(System.in);
            System.out.println("\n\n--------------------------MENU FOR ADDRESS-------------------------");
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
                System.out.println("--------------------------ADDRESS-------------------------");
                System.out.println("|ID\tHouseno\tStreetno\tStreetname\tVillagename\tDisname\tCommname\tProvincename\tCityname\tCountryname\tIscurrent\n");
                for(var c:addr.listAll()){
                    System.out.println(c.getId()+"\t"+c.getHouseno()+"\t"+c.getStreetno()+"\t"+c.getStreetname()+"\t"+c.getVillagename()+"\t"+c.getDistrictname()+"\t"+c.getCommunename()+"\t"+c.getProvincename()+"\t"+c.getCityname()+"\t"+c.getCountryname()+"\t"+c.getIsCurrent());
                }
                break;
                case 2:
                System.out.println("2. CREATE NEW RECORD");
                System.out.print("\n\t*HOUSE No: ");
                String houseno = sc.next();
                System.out.print("\n\t*STREET No: ");
                String streetno = sc.next();
                System.out.print("\n\t*STREET NAME: ");
                String streetname = sc.next();
                System.out.print("\n\t*VILLAGE NAME: ");
                String villagename = sc.next();
                System.out.print("\n\t*DISTRICT NAME: ");
                String districtname = sc.next();
                System.out.print("\n\t*COMMUNE NAME: ");
                String communename = sc.next();
                System.out.print("\n\t*PROVINCE NAME: ");
                String provincename = sc.next();
                System.out.print("\n\t*CITY NAME: ");
                String cityname = sc.next();
                System.out.print("\n\t*COUNTRY NAME: ");
                String countryname = sc.next();
                System.out.print("\n\t*IS CURRENT?: ");
                int iscurrent = sc.nextInt();

                var u = new addresses(0,houseno,streetno,streetname,villagename,districtname,communename,provincename,cityname,countryname,iscurrent);
                addr.add(u);
                System.out.println("|ID\tHouseno\tStreetno\tStreetname\tVillagename\tDisname\tCommname\tProvincename\tCityname\tCountryname\tIscurrent\n");
                for(var c:addr.listAll()){
                    System.out.println(c.getId()+"\t"+c.getHouseno()+"\t"+c.getStreetno()+"\t"+c.getStreetname()+"\t"+c.getVillagename()+"\t"+c.getDistrictname()+"\t"+c.getCommunename()+"\t"+c.getProvincename()+"\t"+c.getCityname()+"\t"+c.getCountryname()+"\t"+c.getIsCurrent());
                }
                break;
                case 3:
                System.out.println("3. UPDATE RECORD");
                System.out.println("|ID\tHouseno\tStreetno\tStreetname\tVillagename\tDisname\tCommname\tProvincename\tCityname\tCountryname\tIscurrent\n");
                for(var c:addr.listAll()){
                    System.out.println(c.getId()+"\t"+c.getHouseno()+"\t"+c.getStreetno()+"\t"+c.getStreetname()+"\t"+c.getVillagename()+"\t"+c.getDistrictname()+"\t"+c.getCommunename()+"\t"+c.getProvincename()+"\t"+c.getCityname()+"\t"+c.getCountryname()+"\t"+c.getIsCurrent());
                }
                System.out.print("Enter an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int id = sc.nextInt();
                int hold=0;
                for (var c:addr.listAll()){
                    if(c.getId()==id){
                        hold++;
                    }
                }
                if(hold==0){
                    System.out.println("\tID NOT FOUND!!!");
                }else{
                    System.out.print("\n\t*HOUSE No: ");
                    String new_houseno = sc.next();
                    System.out.print("\n\t*STREET No: ");
                    String new_streetno = sc.next();
                    System.out.print("\n\t*STREET NAME: ");
                    String new_streetname = sc.next();
                    System.out.print("\n\t*VILLAGE NAME: ");
                    String new_villagename = sc.next();
                    System.out.print("\n\t*DISTRICT NAME: ");
                    String new_districtname = sc.next();
                    System.out.print("\n\t*COMMUNE NAME: ");
                    String new_communename = sc.next();
                    System.out.print("\n\t*PROVINCE NAME: ");
                    String new_provincename = sc.next();
                    System.out.print("\n\t*CITY NAME: ");
                    String new_cityname = sc.next();
                    System.out.print("\n\t*COUNTRY NAME: ");
                    String new_countryname = sc.next();
                    System.out.print("\n\t*IS CURRENT?: ");
                    int new_iscurrent = sc.nextInt();

                    var us = new addresses(0,new_houseno,new_streetno,new_streetname,new_villagename,new_districtname,new_communename,new_provincename,new_cityname,new_countryname,new_iscurrent);
                    addr.update(us);
                    System.out.println("|ID\tHouseno\tStreetno\tStreetname\tVillagename\tDisname\tCommname\tProvincename\tCityname\tCountryname\tIscurrent\n");
                    for(var c:addr.listAll()){
                        System.out.println(c.getId()+"\t"+c.getHouseno()+"\t"+c.getStreetno()+"\t"+c.getStreetname()+"\t"+c.getVillagename()+"\t"+c.getDistrictname()+"\t"+c.getCommunename()+"\t"+c.getProvincename()+"\t"+c.getCityname()+"\t"+c.getCountryname()+"\t"+c.getIsCurrent());
                    }
                } 
                break;
                case 4:
                System.out.println("4. DELETED RECORD BY ID");
                System.out.println("|ID\tHouseno\tStreetno\tStreetname\tVillagename\tDisname\tCommname\tProvincename\tCityname\tCountryname\tIscurrent\n");
                for(var c:addr.listAll()){
                    System.out.println(c.getId()+"\t"+c.getHouseno()+"\t"+c.getStreetno()+"\t"+c.getStreetname()+"\t"+c.getVillagename()+"\t"+c.getDistrictname()+"\t"+c.getCommunename()+"\t"+c.getProvincename()+"\t"+c.getCityname()+"\t"+c.getCountryname()+"\t"+c.getIsCurrent());
                }
                System.out.print("ENTER an ID: ");
                while(!sc.hasNextInt()){
                    System.out.print("\n\t***ACCEPTED ONLY INTEGER NUMBER: ");
                    sc.next();
                }
                int Did = sc.nextInt();
                boolean isDelete = addr.delete(Did);
                if(isDelete){
                    System.out.println("Successful");
                    System.out.println("|ID\tHouseno\tStreetno\tStreetname\tVillagename\tDisname\tCommname\tProvincename\tCityname\tCountryname\tIscurrent\n");
                    for(var c:addr.listAll()){
                        System.out.println(c.getId()+"\t"+c.getHouseno()+"\t"+c.getStreetno()+"\t"+c.getStreetname()+"\t"+c.getVillagename()+"\t"+c.getDistrictname()+"\t"+c.getCommunename()+"\t"+c.getProvincename()+"\t"+c.getCityname()+"\t"+c.getCountryname()+"\t"+c.getIsCurrent());
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
