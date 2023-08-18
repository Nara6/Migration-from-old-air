#include<stdio.h>


int main(){


    int a, b ,c; 



    printf("Input a value: ");
    scanf("%d", &a);

    printf("Input b value: ");
    scanf("%d", &b);

    printf("Input c value: ");
    scanf("%d", &c);

    if (a==b&&b==c){

        printf("This is an equilateral triangle.");
    }
    else if ((a==b&&b!=c) || (a!=b&&b==c) || (a==b&&a!=c) || (a==c&&b!=c)){
        printf("This is an Isosceles triangle.");
    }
    else{
        printf("This is a Scalene triangle.");
    }



}

