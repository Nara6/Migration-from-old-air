#include<stdio.h>

//=====>> write a program to store 7 number in an array call a1. create new a array call a2. make a2 has the data as same as a1 display number a2 in back to front.

main(){
    int a1[10],a2[10];
    for (int i=1; i<=7; i++){
        printf("Enter a number: ");
        scanf("%d",&a1[i]);
        a2[i] = a1[i];
    }
    for(int i=7; i>=1; i--){
        printf("%d ",a2[i]);
    }
}