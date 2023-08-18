#include<stdio.h>
main(){
    int num,n,i=1,sum=0;
    printf("Enter a number: "); scanf("%d",&num);

    while(i<num){
        n=num%i;
        if(n==0){
            sum=sum+i;
        }
        i = i+1;
    }
    if(sum==num){
        printf("%d is a perfect number.",num);
    }
    else{
        printf("%d is not a perfect number.",num);
    }
}
