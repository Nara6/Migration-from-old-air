#include<stdio.h>
#include<math.h>
main(){
    float a,b,c,d,x1,x2;
    printf("Input a : "); scanf("%f",&a);
    printf("Input b : "); scanf("%f",&b);
    printf("Input c : "); scanf("%f",&c);
    d=pow(b,2)-4*a*c;
    if (d>0){
        x1=(-b+sqrt(d))/(2*a);
        x2=(-b-sqrt(d))/(2*a);
        printf("The equation has root: x1=%.3f and x2=%.3f",x1,x2);
    }
    else if (d==0){
        x1=-b/(2*a);
        printf("The equation has root: x1=x2=%.3f",x1);
    }
    else{
        printf("The equation has no root.");
    }


}
