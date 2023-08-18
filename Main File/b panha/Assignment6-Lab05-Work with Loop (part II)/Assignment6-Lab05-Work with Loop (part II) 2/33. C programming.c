#include<stdio.h>
main(){
    int num,i,product=1;
    printf("Enter a number: "); scanf("%d",&num);

    while(num>0){
        i=num%10;
        num=num/10;
        product=product*i;
    }
    printf("The product of digit of the enter number is %d",product);
}
