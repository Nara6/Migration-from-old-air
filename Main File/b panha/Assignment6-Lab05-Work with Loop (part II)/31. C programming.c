#include<stdio.h>
main(){
    int num,last,sum;
    printf("Enter a number: "); scanf("%d",&num);

    last=num%10;
    while(num>=10){
        num=num/10;
    }
    sum=num+last;
    printf("The sum of first digit and last digit of the number is: %d",sum);
}
