#include<stdio.h> 

int main(){

    int X,Y ;

    printf("Input X value: ");
    scanf("%d", &X);

     printf("Input Y value: ");
    scanf("%d", &Y);

    if(X>0&&Y>0){

        printf("The coordinate (%d,%d) lies in the first quadrant", X, Y); 
    }
    else if(X<0&&Y>0){
        printf("The coordinate (%d,%d) lies in the second quadrant", X, Y);

    }
    else if(X<0&&Y<0){
        printf("The coordinate (%d,%d) lies in the third quadrant", X, Y);
    }
    else {

        printf("The coordinate (%d,%d) lies in the fourth quadrant", X, Y);
    }
}