#include<stdio.h>
//===================================>>>>>>>>point2
int main(){
    int inone;
    float x,y;
    printf("f2=(x+y)^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);
    inone = (x+y)*(x+y);
    printf("f1= %d", inone);
}