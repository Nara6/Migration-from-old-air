#include<stdio.h>

int sumDatainArray(int a[],int n){
    int sum = 0;
    for(int i=0;i<n;i++){
        sum = sum + a[i];
    }
    return sum;
}
main(){
    int n,a;
    int num[] ={8,4,5,6,7,8,9,10,11,90};
    n = sizeof(num)/sizeof(int);
    a = sumDatainArray(num,n);
    printf("%d",n);
    printf("\nSummation is %d",a);
}