#include<iostream>
#include<math.h>
using namespace std;

void solveEquation(float a,float b,float c,float *x1,float *x2,float *delta){
    *delta = pow(b,2) - (4*a*c);
    if(*delta>0){
        *x1 = (-b + sqrt(delta))/(2*a);
        *x2 = (-b - sqrt(delta))/(2*a);
    }else if(delta==0){
        *x1 = *x2 = (-b/2*a);
    }
}

int main(){
    
}