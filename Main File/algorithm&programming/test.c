#include<stdio.h>
main() {
    int i;
    int k=6;
    for(i=10;i>k; i=i-2){
        printf("%d",i);
        k=k+1;
    }
}