//Ask user to input 10numbers. Find summation and average then display the result.
#include<stdio.h>
int main(){
    int num[10], i;
    float sum=0 , arv;
    for(i=0; i<10; i++){
        printf("Plz input the value:");
        scanf("%d",&num[i]);
    }
    for(i=0; i<10; i++){
        sum = sum+num[i];
    }
    for(i=0; i<10; i++){
        arv = sum/10;
    }
    printf("\n Summation = %.2f", sum);
    printf("\n Average = %.2f", arv);

}