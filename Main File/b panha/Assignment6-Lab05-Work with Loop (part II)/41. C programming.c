#include<stdio.h>
main(){
    int num,i=2,status,n;
    printf("Enter a number: "); scanf("%d",&num);
    while(i<num){
        status=1;
        if(num%i==0){
            status=-1;
            break;
        }
        i = i+1;
    }
    if(status==1){
        printf("Number %d is a prime number.",num);
    }
    else{
        printf("Number %d is not a prime number.",num);
    }
}
