#include<stdio.h>
int main(){
    int inone;
    float x,y;
    printf("f5=(x^2+2xy+y^2)/(x+y)^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);

    inone = (x*x + 2*x*y +y*y)/(x+y)*(x+y);
    printf("f1= %d", inone);
}