#include<stdio.h>
main(){
    int num,n,i=1,sum=0;
    printf("Enter a number: "); scanf("%d",&num);

    while(i<num){
        n=num%i;
        if(n==0){
            sum=sum+i;
        }
        i++;
    }
    if(sum==num){
        printf("The number is a perfect number.");
    }
    else{
        printf("The number is not a perfect number.");
    }
}
