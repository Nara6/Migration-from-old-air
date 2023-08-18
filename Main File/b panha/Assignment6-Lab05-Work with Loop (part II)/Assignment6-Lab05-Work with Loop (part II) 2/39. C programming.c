#include<stdio.h>
main(){
    int i=1,num=1,pow,n;
    printf("Enter a number: "); scanf("%d",&n);
    printf("Enter a power of number: "); scanf("%d",&pow);

    while(i<=pow){
        num=num*n;
        i++;
    }
    printf("The number %d power by %d equal to %d",n,pow,num);
}
