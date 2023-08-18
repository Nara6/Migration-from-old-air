#include<stdio.h>
//===================================>>>>>>>>point1
int main(){
    int num1,num2, inone;
    float x,y;
    printf("f1=3x-2y");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);
    num1 =3*x;
    num2 =2*y;
    inone = num1-num2;
    printf("f1= %d", inone);
}