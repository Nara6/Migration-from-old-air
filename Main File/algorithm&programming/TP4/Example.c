#include<stdio.h>
#include<math.h>
int main (){
    double  x1 ,x2 , delta;
    int a, b, c;
    printf("Enter Your value of a:" );
    scanf("%d", &a);
    printf("Enter Your value of b:" );
    scanf("%d", &b);
    printf("Enter Your value of c:" );
    scanf("%d",&c);
    delta = b*b - 4*a*c;
    if(delta>0){
        x1= (-b+sqrt(delta))/(2*a);
        x2= (-b-sqrt(delta))/(2*a);
        printf("x1=%.2f ,x2=%.2f", x1,x2);
    }else if (delta==0){
        x1=x2 = (-b/(2*a));
        printf("x1=x2 = %.2f", x1);
    }else{
        printf("The equation have no roots");
    }
}