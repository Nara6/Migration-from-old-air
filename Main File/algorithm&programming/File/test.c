#include<stdio.h>


typedef struct{
    char ID[20];
    char name[20];
    int en,fr;
}Student;
main(){
    Student Student[30];
    int n,m,k=0;
    FILE *f1;
    f1 = fopen("testing.txt","r");
    //fscanf(f1, "%s %s %d %d",&Student[i].ID,&Student[i].name,&Student[i].en,&Student[i].fr);
    while(fscanf(f1, "%s %s %d %d",&Student[k].ID,&Student[k].name,&Student[k].en,&Student[k].fr)!=EOF){
        k = k+1;
    }
    for(int i=0;i<k; i++){
        printf("%-15s%15s%15d%15d\n",Student[i].ID,Student[i].name,Student[i].en,Student[i].fr);
    }
}