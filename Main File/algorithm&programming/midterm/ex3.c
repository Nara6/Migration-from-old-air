#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main(){

    srand(time(0));
    int n; 
    int min=1,max=10;
    int num;
    int point; 

    printf("******************************************\n"); 
    printf("    Welcome to our prediction program!\n"); 
    printf("******************************************\n");
    
    n=rand()%max+min;

    for(int i=0; i<10;i++){

    printf("\nEnter your guess number: ");
    scanf("%d", &num);

    if(num>n){
        printf("\n\tSorry, not correct! Try again with smaller number!");
    } 
    else if (num<n){
        printf("\n\tSorry, not correct! Try again with bigger number!");
    } 
    else if(num==n){
        point = 100 - (4*i); 
        printf("\n\tCongratulations ! you spent %d attempts to get the right prediction, you got 100-(4*%d): %d scores",i+1,i, point); 
        break;
    }
    } 
}