#include<stdio.h>
#include<stdbool.h>

bool checkevenOdd(int num){
    if(num%2==0){
        return false;
    }
    return true;
}

main(){
    while(1>0){
        int number;
        printf("\nEnter a Number: ");
        scanf("%d",&number);
        if(!checkevenOdd(number)){
            printf("\n%d is Even number!",number);
        }else{
            printf("\n%d is Odd number!",number);
        }
    }
}