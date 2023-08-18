#include<stdio.h>

main(){
    float score[10];
    for (int k=0; k<10; k++){
        printf("Enter score #%d\n", k);
        scanf("%f",&score[k]);
    }
    float avg, sum=0;
    for (int p=0; p<10; p++){
        sum = sum + score[p];
    }
    avg = sum /10;
    printf("Suummation array: %d", sum);
    printf("\nAverage: %f\n", avg);
}