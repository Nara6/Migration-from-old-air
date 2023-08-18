//Ask user to input 10numbers. Find summation and average then display the result.
#include<stdio.h>
int main(){
    int num[10];
    int i, sum=0;
    float avr;
    for(i=0;i<10;i++){
        printf("Plz input the number:");
        scanf("%d",&num[i]);
    }
    for(i=0;i<10;i++){
        sum += num[i];
    }
    for(i=0;i<10;i++){
        avr= sum / 10;
    }
    printf("Summation = %d",sum);
    printf("\nAverage = %.2f",avr);
}