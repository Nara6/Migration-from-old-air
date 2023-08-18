#include<iostream>
using namespace std;

int main(){
    int temp;
    int a,b,*a1,*b1;
    a1 = &a; //a1 point address a;
    b1 = &b; //b1 point address b;
    cout<<"Enter value of a: "; cin>>a;
    cout<<"Enter value of b: "; cin>>b;
    temp = *a1;
    *a1=*b1;
    *b1 = temp;
    cout<<"Result: "<<*a1<<"\t"<<*b1<<endl; // *a1 show value of a, *b1 show value of b;
    cout<<"Result: "<<a<<"\t"<<b;

}