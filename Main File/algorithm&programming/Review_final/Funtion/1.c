#include<stdio.h>
#include<stdbool.h>

bool checkOdd(int n){
    if(n%2==0){
        return false;
    }
    return true;
}

main(){
    while(1>0){
        int num;
        printf("\nEnter a number: ");
        scanf("%d",&num);
        if(!checkOdd(num)){
            printf("\nEven number");
        }else{
            printf("\nodd number");
        }
    }
}