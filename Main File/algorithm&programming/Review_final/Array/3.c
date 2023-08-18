#include<stdio.h>

//======>> write a program ask store 5 number and find sum and avg.

main(){
    int sum=0, num[5];
    float avg;
    for(int i=0; i<5; i++){
        printf("Enter a number#%d: ", i+1);
        scanf("%d", &num[i]);
        sum = sum + num[i];
    }
    avg = (float)sum/5;
    printf("Average: %.2f",avg);
}