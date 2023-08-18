#include<stdio.h>

main(){
    int i , n;
    printf("Please Input Natural numbers: ");
    scanf("%d", &n);
    i=1;
    while(i<=n){
        printf("%d \t", i);
        i = i+1;
    }
}