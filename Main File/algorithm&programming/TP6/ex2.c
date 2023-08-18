#include<stdio.h>

main(){
    int i ,n;
    printf("Please Input Natural numbers: ");
    scanf("%d",&n);
    i=n;
    while(i>0){
        printf("%d \t",i);
        i = i-1;
    }
}