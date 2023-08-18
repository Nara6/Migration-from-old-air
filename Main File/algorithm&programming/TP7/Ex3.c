#include<stdio.h>
// ==================>> Display Sum and Average on Screen
main(){
    int num[5];
    int sum = 0;
    float average;

    for(int i=0; i<5; i++){
        printf("Enter a Number: ");
        scanf("%d",&num[i]);
        sum = sum + num[i];
    }
    average = sum/5;
    printf("Summation: %d",sum);
    printf("\nAverage: %.2f ",average);
}