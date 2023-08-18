#include<stdio.h>
main(){

    int num,i=0;
    printf("Enter a number: "); scanf("%d",&num);

    while(num>0){
        num=num/10;
        i=i+1;
    }
    printf("The number have %d digits",i);
}
