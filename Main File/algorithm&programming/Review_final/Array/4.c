#include<stdio.h>

//=========>> write a program to store data of 5 student .

main(){
    char name[5][20];
    int score[5];
    char email[5][20];
    char phone[5][20];
    for(int i=0; i<2; i++){
        printf("Student#%d",i+1);
        printf("\n\tName: "); scanf("%s",name[i]);
        printf("\tScore: "); scanf("%d",&score[i]);
        printf("\tPhone: "); scanf("%s",phone[i]);
        printf("\tEmail: "); scanf("%s",email[i]);
    }
    printf("\n%-20s%20s%20s%20s","Name:","Socre:","Email:","Phone:");
    for(int i=0; i<2; i++){
        printf("\n%-20s%20d%20s%20s",name[i],score[i],phone[i],email[i]);
    }
    
}