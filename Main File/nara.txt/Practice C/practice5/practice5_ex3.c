#include<stdio.h>

int main(){
    int  i,n;
    long long int mul=1;


    printf("Enter n value: ");
    scanf("%d", &n); 

    for(i=1;i<=n;i++){
    
    mul=mul*i;
    }
    printf("The Factorial of %d is %lld.",n, mul);
   

}