#include<stdio.h>

typedef struct{
    char gender;
    char name[20];
    char ID[10];
    char phone[15]; 
}Client;

main(){
    Client C1;
    char ch;
    printf("------------------------------ Store Info Client ----------------------------------\n");
    printf("\tEnter Your ID: "); scanf("%s",&C1.ID);
    printf("\tEnter Your name: "); scanf("%s",&C1.name); scanf("%c",&ch);
    printf("\tEnter Your Gender(M/F): "); scanf("%c",&C1.gender);
    printf("\tEnter Your Phone Number: "); scanf("%s",&C1.phone);

    //b.
    printf("\n========================== Information of The Client ============================\n");
    printf("%-15s%15s%15s%25s", "ID", "Name", "Gender", "Phone Number");
    printf("\n%-15s%15s%15c%25s",C1.ID,C1.name,C1.gender,C1.phone);
}