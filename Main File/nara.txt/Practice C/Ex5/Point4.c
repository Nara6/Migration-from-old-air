#include<stdio.h>
//===================================>>>>>>>>>point4
int main(){
    int inone;
    float x,y;
    printf("f4=(y^3+x^2/(xy)^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);

    inone = (y*y*y)+(x*x)/(x*y)*(x*y);
    printf("f1= %d", inone);
}