#include<iostream>
using namespace std;

int main(){
    int temp;
    int *a1,*b1,a,b;
    a1 = &a;
    b1 = &b;
    cout<<"Enter value of a: "; cin>>a;
    cout<<"Enter value of b: "; cin>>b;
    temp = *a1;
    *a1 = *b1;
    *b1 = temp;
    cout<<"The value after swap: "<<a<<"\t"<<b;
}