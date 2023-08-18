#include<stdio.h>
main(){
    int num,i,sum=0;
    printf("Enter a number: "); scanf("%d",&num);

    while(num>0){
        i=num%10;
        num=num/10;
        sum=sum+i;
    }
    printf("The sum of digit of the enter number is: %d",sum);
}
