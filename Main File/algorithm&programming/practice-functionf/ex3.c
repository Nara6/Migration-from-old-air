#include<stdio.h>

int cal(int a, int b){
    int sum = 0;
    for(int i=a; i<=b; i++){
        sum = sum + i;
    }
    return sum;
}
main(){
    int check;
    check = cal(1,20);
    printf("Summation is: %d\n",check);
}