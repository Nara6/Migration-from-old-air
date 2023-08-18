#include<stdio.h>

// ========>>write a program to ask user for 10 numbers and store in array and diplay   <<=====

main(){
    int num[10];
    for(int i=1; i<=10; i++){
        printf("Enter a number#%d: ",i);
        scanf("%d",&num[i]);
    }
    for(int i=1; i<=10; i++){
        printf("%d ",num[i]);
    }
}