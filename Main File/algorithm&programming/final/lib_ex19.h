#include<stdio.h>
typedef struct{
    char model[20];
    int year;
    int price;
    char type[20];
}TV;

void addInfoTV(TV tv[],int size){
    for(int i=0;i<size;i++){
        printf("Infomation TV #%d",i+1);
        printf("\n\tModel: "); scanf("%s",&tv[i].model);
        printf("\tManufactured year: "); scanf("%d",&tv[i].year);
        printf("\tPrice: "); scanf("%d",&tv[i].price);
        printf("\tType: "); scanf("%s",&tv[i].type);
    }
}
void displayInfoTV(TV tv[], int size){
    printf("%-20s%20s%20s%20s","Model:","Manufactured year:","Price:","Type");
    for(int i=0; i<size; i++){
        printf("\n%-20s%20d%20d%20s",tv[i].model,tv[i].year,tv[i].price,tv[i].type);
    }
}
void FindmostExpense(TV tv[], int size){
    printf("\n------------------------Information of TV that is the most expensive--------------------------\n");
    printf("\n%-20s%20s%20s%20s","Model:","Manufactured year:","Price:","Type");
    int expense = tv[0].price;
    for(int i=0;i<size;i++){
        if(tv[i].price>expense){
            expense = tv[i].price;
        }
    }
    for(int i=0; i<size; i++){
        if(expense==tv[i].price){
            printf("\n%-20s%20d%20d%20s",tv[i].model,tv[i].year,tv[i].price,tv[i].type);
        }
    }
}
void FindlessExpense(TV tv[], int size){
    printf("\n------------------------Information of TV that is the less expensive--------------------------\n");
    printf("\n%-20s%20s%20s%20s","Model:","Manufactured year:","Price:","Type");
    int expense = tv[0].price;
    for(int i=0;i<size;i++){
        if(tv[i].price<expense){
            expense = tv[i].price;
        }
    }
    for(int i=0; i<size; i++){
        if(expense==tv[i].price){
            printf("\n%-20s%20d%20d%20s",tv[i].model,tv[i].year,tv[i].price,tv[i].type);
        }
    }
}