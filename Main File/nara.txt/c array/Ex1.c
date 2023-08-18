//Ask user to input 10 numbers. Input those into a array (int num[10])Then display it in reverse order.

#include<stdio.h>
int main(){
    int num[10];
    int i;
    for(i=0; i<10 ;i++ ){
        printf("Plz Input Number:");
        scanf("%d",&num[i]);
    }
    for (i =9; i>=0; i--){
    printf("%d\t",num[i]);
    }
}