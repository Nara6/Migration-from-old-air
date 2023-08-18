#include<stdio.h>
#include<math.h>

main(){
    int n, num ,state=1;
    printf("enter a number: ");
    scanf("%d",&num);
    for (int i = 2; i <=sqrt(num); i++){
        if (num % i == 0){
            state=-1;
        }
    }
    if(state==1){
        printf(" prime ");
    }else{
        printf(" not prime ");
    }
}