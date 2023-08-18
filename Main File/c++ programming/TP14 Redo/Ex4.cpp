#include<iostream>
#include<math.h>
using namespace std;

void solveEquation(float *x1, float *x2, float *delta, int a,int b,int c){
    *delta = pow(b,2) - (4*a*c);
    if(*delta > 0){
        *x1 = (-b+sqrt(*delta))/(2*a);
        *x2 = (-b-sqrt(*delta))/(2*a);
    }else if(*delta==0){
        *x1 = *x2 = (-b/2*a);
    }
}


int main(){
    float delta,a,b,c,x1,x2;
    cout<<"Quadratic Equation Solving: Ax^2 + Bx + C = 0"<<endl;
    cout<<"Enter A: "; cin>>a;
    cout<<"Enter B: "; cin>>b;
    cout<<"Enter C: "; cin>>c;
    solveEquation(&x1,&x2,&delta,a,b,c);
    if(a==0){
        cout<<"This equation cannot be solved"<<endl;
        
    }else{
        if(delta>0){
            cout<<"x1 = "<<x1<<endl;
            cout<<"x2 = "<<x2<<endl;
        }else if(delta==0) {
            cout<<"x1 = x2 = "<<x1<<endl;
        }else{
            cout<<"No Root!";
        }
    }

}