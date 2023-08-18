#include<stdio.h>

main(){
    int num, sum=0;
    float avg;
    for(int i=1; i<=7; i=i+1){
        printf("Enter a number #%d: ", i);
        scanf("%d", &num);
        sum = sum+num;
    }
    avg = sum/7.000;
    printf("Average is: %.4f",avg);

}