#include<stdio.h>

int factorial(int num){
    int fac=1;
    for(int i=num; i>0; i--){
        fac = fac*i;
    }
    return fac;
}
int summation(int num){
    int sum;
    for(int i=1; i<=num; i++){
        sum = sum + factorial(i)/i;
    }
    return sum;
}
main(){
    int num,n;
    printf("Enter a Number: ");
    scanf("%d",&num);
    n = summation(num);
    printf("value: %d\n",n);
}