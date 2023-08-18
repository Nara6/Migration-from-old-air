#include<stdio.h>
main(){
    int num,i=2,status,n;
    printf("Enter a number: "); scanf("%d",&num);
    n=num;
    while(i<num){
        status=1;
        num=num/i;
        if(num%i==0){
            status=-1;
            break;
        }
        i = i+1;
    }
    if(status==1){
        printf("Number %d is a prime number.",n);
    }
    else{
        printf("Number %d is not a prime number.",n);
    }
}