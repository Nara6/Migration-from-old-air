#include<stdio.h>

main(){
    int a = 0, b = 100;
    while(a < b){
        a = a + 1;
        if(a%2!=0){
            printf("%d ", a);
        }
    }
}