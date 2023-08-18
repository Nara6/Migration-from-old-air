#include<stdio.h>

typedef struct{
    char name[25];
    char fater_name[25];
    char mother_name[25];
}Person;

void DisplayName( Person person[],int size){
    printf("-----------------------------------------Your Information Here down below!!!-------------------------------------------\n");
    printf("Your name: \t\t\t Your Father Name: \t\t\t Your mother Name: \t\t\t");
    for(int i=0;i<size;i++){
        printf("\n%12s \t\t\t%12s \t\t\t\t%12s",person[i].name,person[i].fater_name,person[i].mother_name);
    }
}
main(){
    int size=2;
    Person person[100];
    for(int i=0;i<size;i++){
        printf("Parent #%d",i+1);
        printf("\nEnter Your Name: ");
        gets(person[i].name);
        printf("Enter Your Father's Name: ");
        gets(person[i].fater_name);
        printf("Enter Your Mother's Name: ");
        gets(person[i].mother_name);
        printf("\n");
    }
    DisplayName(person,size);
}