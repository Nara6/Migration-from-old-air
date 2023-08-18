#include<stdio.h>
#include<time.h>

void getNstoreDataToFile();
main(){
    getNstoreDataToFile();
}
void getNstoreDataToFile(){
    int id[6],n;
    char name[6][30],tel[6][15];
    srand(time(0));
    int min=3, max=4;
    n=rand()%max+min;
    FILE *f;
    f=fopen("output-p3.txt","w");
    for(int i=0;i<=n;i++){
        printf("Enter student ID: ");
        scanf("%d",&id[i]);
        fprintf(f,"%d",id[i]);
        printf("Enter student name: ");
        scanf("%s",&name[i]);
        fprintf(f,"\t%s",name[i]);
        printf("Enter student phone number: ");
        scanf("%s",&tel[i]);
        fprintf(f,"\t\t%s",tel[i]);
        fprintf(f,"\n");
        printf("\n");
    }
    fclose(f);
}
