#include<stdio.h>
int summation(int num){
    int sum=0;
    for(int i =1; i<=num; i++){
        sum = sum+i;
    }
    return sum;
}
float findFactorial(int num){
    int fac=1;
    int sum=0;
    for(int i =1; i<=num; i++){
        fac = fac * i;
        sum = sum + fac;
    }
    return sum;
}


float computeSeries(int num){
    float series=0;
    series=findFactorial(num)/summation(num);
    return series;
}
main(){
    int number;
    float n;
    printf("Enter a number: ");
    scanf("%d",&number);
    n = computeSeries(number);
    printf("Summation of series: %.2f",n);
}