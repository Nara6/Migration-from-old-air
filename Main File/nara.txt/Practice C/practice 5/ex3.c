#include<stdio.h>
int main(){
    int num, i;
    long factorial=1;
    printf("Plz input value:");
    scanf("%d",&num);
    for (i=1 ; i<=num ; i++){
    factorial = factorial * i;
    }
    printf("The factorial of %d = %d", num ,factorial);
}