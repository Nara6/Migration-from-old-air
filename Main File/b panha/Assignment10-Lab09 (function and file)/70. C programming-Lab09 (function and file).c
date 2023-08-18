#include<stdio.h>
void storeDataInFile(char filename[]);
main(){
    char problem[30];
    printf("please Enter a file name(Example.txt): ");
    scanf("%s",&problem);
    storeDataInFile(problem);
}
void storeDataInFile(char filename[]){
    FILE *f;
    int n=2020;
    f=fopen(filename,"w");
    for(int i=1;i<=n;i++){
        fprintf(f,"%d\t",i);
        if(i%10==0){
            fprintf(f,"\n");
        }
    }
    fclose(f);
}
