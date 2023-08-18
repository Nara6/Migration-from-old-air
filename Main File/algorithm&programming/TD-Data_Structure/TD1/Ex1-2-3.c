#include<stdio.h>
//=============== 1. Create a Structure of Product.
typedef struct{
    int day;
    int month;
    int year;
}Date;

enum color{
    red, yellow, blue, white, black
};
//================ 2.Adding more Data Structure (Seller).
typedef struct{
    char house_number[20],
    road_number[20], 
    city[20];
}Address;
enum Seller_type{
    VIP, normal, gold, silver
};
typedef struct{
    char name[20];
    enum Seller_type seller_type;
    Address address;
}Seller;
//===================>> Adding Seller into Product Data structure.
typedef struct{
    char id[10], name[20];
    Date Product_date;
    Date Expired_date;
    enum color Color;
    Seller seller;
}Product;

void insertProduct(Product product[],int size){

    for(int i = 0; i < size; i++){
        printf("---------------------- Insert info for product %d --------------------------------\n", i+1);
        printf("Please Input Product's Name: "); scanf("%s",&product[i].name);
        printf("Please Input Product's ID: "); scanf("%s",&product[i].id);
        printf("Please Input Product's Date(dd/mm/yyyy): "); 
        scanf("%d/%d/%d",&product[i].Product_date.day,&product[i].Product_date.month,&product[i].Product_date.year);
        printf("Please Input Product's Expired_date(dd/mm/yyyy): "); 
        scanf("%d/%d/%d",&product[i].Expired_date.day,&product[i].Expired_date.month,&product[i].Expired_date.year);
    }
}
Date CheckFurthestdate(Date d1, Date d2){
    if(d1.year > d2.year){
        return d1;
    }else if(d1.year < d2.year){
        return d2;
    }else if(d1.year == d2.year){
        if(d1.month > d2.month){
            return d1;
        }else if(d1.month < d2.month){
            return d2;
        }else if(d1.month == d2.month){
            if(d1.day > d2.day){
                return d1;
            }else if(d1.day < d2.day){
                return d2;
            }else if(d1.day == d2.day){
                return d1;
            }
        }
    }
}

Date CheckClosestdate(Date d1, Date d2){
    if(d1.year > d2.year){
        return d2;
    }else if(d1.year < d2.year){
        return d1;
    }else if(d1.year == d2.year){
        if(d1.month > d2.month){
            return d2;
        }else if(d1.month < d2.month){
            return d1;
        }else if(d1.month == d2.month){
            if(d1.day > d2.day){
                return d2;
            }else if(d1.day < d2.day){
                return d1;
            }else if(d1.day == d2.day){
                return d1;
            }
        }
    }
}
main(){
    Product size[10];
    int hold_size=10;
    insertProduct(size, hold_size);
    Date Furthest_Date=size[0].Expired_date;
    Date Closest_Date=size[0].Expired_date;
    for(int i=1; i<hold_size; i++){
        Furthest_Date = CheckFurthestdate(Furthest_Date,size[i].Expired_date);
        Closest_Date = CheckClosestdate(Closest_Date,size[i].Expired_date);
    }


    printf("\n\tThe Furthest Date is: %d %d %d",Furthest_Date.day,Furthest_Date.month,Furthest_Date.year);
    printf("\n\tThe Closest Date is: %d %d %d",Closest_Date.day,Closest_Date.month,Closest_Date.year);
}
//
