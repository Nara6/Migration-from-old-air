#include<stdio.h>

main(){
    int num , i , result=1;
    printf("Enter a Number: ");
    scanf("%d", &num);
    for(i=1; i<=num; i=i+1){
        result = result * i;
    }
    printf("%d to factorial equal to %d", num, result);
}