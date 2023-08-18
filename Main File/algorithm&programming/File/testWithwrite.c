#include<stdio.h>

main(){
    FILE *f1;
    char ID[15];
    char name[20];
    int en,fr;
    f1 = fopen("testing.txt", "a");
    printf("Enter ID: "); scanf("%s",&ID);
    printf("Enter name: "); scanf("%s",&name);
    printf("Enter English score: "); scanf("%d",&en);
    printf("Enter French score: "); scanf("%d",&fr);

    fprintf(f1, "\n%-15s%15s%15d%15d\n",ID,name,en,fr);
    fclose(f1);
}