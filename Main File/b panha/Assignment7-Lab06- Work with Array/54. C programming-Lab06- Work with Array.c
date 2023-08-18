#include<stdio.h>
main(){
    int num[5],k,sum=0;
    float average;

    for(k=1;k<=5;k++){
        printf("Enter a number: ");
        scanf("%d",&num[k]);
        sum=sum+num[k];
    }
    average=sum/5.0;
    printf("The sum of Enter number is %d and average equal to %.2f.",sum,average);
}
