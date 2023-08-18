#include<stdio.h>
void checkEvenOdd(int n);

main(){
    int n;
    printf("Enter a number: "); scanf("%d",&n);
    checkEvenOdd(n);
}

void checkEvenOdd(int n){
    if(n%2==0){
        printf("The number is Even");
    }
    else{
        printf("The number is Odd");
    }
}
