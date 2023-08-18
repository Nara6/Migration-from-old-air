#include<stdio.h>
int sumDataInFile(char filename[]);
main(){
    char filename[30];
    printf("Please Enter a file name(Example.txt): ");
    scanf("%s",&filename);
    sumDataInFile(filename);
}
int sumDataInFile(char filename[]){
    FILE *f;
    int n,sum;
    f=fopen(filename,"r");
    while(fscanf(f,"%d",&n)!=EOF){
        printf("%d\t",n);
        if(n%10==0){
            printf("\n");
        }
        sum=sum+n;
    }
    fclose(f);
    printf("The summation of file %s equal to %d",filename,sum);
    return sum;
}
