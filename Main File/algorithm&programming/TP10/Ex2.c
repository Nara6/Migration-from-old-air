#include<stdio.h>

typedef struct{
    char gender;
    char name[20];
    char ID[10];
    char phone[15]; 
    char ch;
}Client;

void StoreInfoCLinent(Client C1[], int size){
    printf("------------------------------ Store Info Client ----------------------------------\n");
    for(int i=0; i<size; i++){
        printf("Client #%d",i+1);
        printf("\n\tEnter Your ID: "); scanf("%s",&C1[i].ID);
        printf("\tEnter Your name: "); scanf("%s",&C1[i].name); scanf("%c",&C1[i].ch);
        printf("\tEnter Your Gender(M/F): "); scanf("%c",&C1[i].gender);
        printf("\tEnter Your Phone Number: "); scanf("%s",&C1[i].phone);
    }
}
void DisplayInfoCLients(Client C1[], int size){
    printf("\n========================== Information of The Client ============================\n");
    printf("%-15s%15s%15s%25s", "ID", "Name", "Gender", "Phone Number");
    for(int i=0; i<size; i++){
        printf("\n%-15s%15s%15c%25s",C1[i].ID,C1[i].name,C1[i].gender,C1[i].phone);
    }
}
main(){
    Client size[10];
    int hold_size = 10;
    StoreInfoCLinent(size,hold_size);
    DisplayInfoCLients(size,hold_size);
}