#include<stdio.h>
#include<math.h>
main(){
    float x, y,f1,f2,f3,f4,f5;
    printf("Please input x value: ");
    scanf("%f",&x);
    printf("Please input y value: ");
    scanf("%f",&y);
    f1 = (2*x) - (3*y/5);
    f2 = (3*x/2);
    f3 = pow(x,3) - (5*x/2) + pow(y,1.5);
    f4 = (x + pow(y,0.5))/(2*x - 1);
    f5 = sin(x) + tan(y);
    printf("f1 = 2x - 3y/5: %.2f",f1);
    printf("\nf2 = 3x/2 : %.2f",f2);
    printf("\nf3 = x^3 -5x/2 +y^(3/2) :%.2f",f3);
    printf("\nf4 = (x + y^(1/2))/ (2x-1) : %.2f",f4);
    printf("\nf5 = sin(x) + tan(y) : %.2f",f5);

}
