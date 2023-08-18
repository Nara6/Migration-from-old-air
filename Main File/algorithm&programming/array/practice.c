#include<stdio.h>

int main(){
    int status = 0;
    int score[5];
    float avg, sum=0;
    int i;
    for(i=0; i<5; i++){
        printf("Please input a score #%d: ", i+1);
        scanf("%d", &score[i]);
    }
    for (i=0; i<5; i++){
        sum = sum+score[i];
        avg = sum/5;
        if(score[i]>avg){
            status =1;
        }
    }
    printf("Average is %.2f.", avg);
    printf("\nThe score that greater than average are: ");
    for(i=0; i<5; i++){
        if(score[i]>avg){
            printf("%d ", score[i]);
        }
    }
}