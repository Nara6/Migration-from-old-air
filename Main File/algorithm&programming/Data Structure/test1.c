#include<stdio.h>

struct Student{
    int ID;
    int name[5];
    int age;
}


main(){

    struct Student std[5];

    for(int i=0; i<5; i++){
        printf("===============>>Insert of info Student#%d <<=================",i+1);
        printf("\nEnter a Student name: ");
        scanf("%s",std[i].name);
        printf("\nEnter a Student ID: ");
        scanf("%d",std[i].ID);
        printf("\nEnter a Student age: ");
        scanf("%d",std[i].age);
    }
    for(int i=0; i<5; i++){
        printf("%s \t%d \t%d",std[i].name,std[i].ID,std[i].age);
    }
}