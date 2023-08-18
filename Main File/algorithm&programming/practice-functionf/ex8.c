#include<stdio.h>
#include<stdbool.h>

bool is_prime(int num){
    for(int i=2; i<num; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
main(){
    int number;
    while(1>0){
        printf("Enter a number: ");
        scanf("%d",&number);
        if(is_prime(number)){
            printf("\n%d is a prime number\n",number);
        }else{
            printf("\n%d is not a prime number\n",number);
        }
    }
}