#include<iostream>
#include<math.h>
using namespace std;

void solveEquation(float a, float b, float c, float *x1, float*x2, float *delta){
    *delta = pow(b,2) - (4*a*c);
    if(*delta>0){
        *x1 = (-b+sqrt(*delta))/(2*a);
        *x2 = (-b-sqrt(*delta))/(2*a);
    }else if(*delta==0){
        *x1=*x2 = -b/(2*a);
    }
}

int main(){
    float a,b,c,x1,x2,delta;
    cout<<"Sample : Ax^2 + Bx + C = 0"<<endl;
    cout<<"Enter value of a: ";cin>>a;
    cout<<"Enter value of b: ";cin>>b;
    cout<<"Enter value of c: ";cin>>c;
    solveEquation(a,b,c,&x1,&x2,&delta);
    if(delta>0){
        cout<<"Root x1 = "<<x1<<endl;
        cout<<"Root x2 = "<<x2<<endl;
    }else if(delta==0){
        cout<<"Root x1 = x2 = "<<x1<<endl;
    }else{
        cout<<"No root!";
    }
}