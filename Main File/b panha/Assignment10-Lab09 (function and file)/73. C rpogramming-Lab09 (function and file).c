#include<stdio.h>
void getDataAndProcess();
main(){
    getDataAndProcess();
}
void getDataAndProcess(){
    int id[7],i=0;
    char name[7][30],tel[7][15];
    FILE *f;
    f=fopen("output-p3.txt","r");
    while(fscanf(f,"%d %s %s",&id[i],&name[i],&tel[i])!=EOF){
        printf("%d",id[i]);
        printf("\t%s",name[i]);
        printf("\t\t%s",tel[i]);
        printf("\n");
        i++;
    }
    fclose(f);
    printf("Enter student ID: "); scanf("%d",&id[i]);
    printf("Enter student name: "); scanf("%s",&name[i]);
    printf("Enter student phone number: "); scanf("%s",&tel[i]);
    f=fopen("output-p3.txt","w");
    for(int j=0;j<=i;j++){
        fprintf(f,"%d",id[j]);
        fprintf(f,"\t%s",name[j]);
        fprintf(f,"\t\t%s",tel[j]);
        fprintf(f,"\n");
    }
    fclose(f);
}
