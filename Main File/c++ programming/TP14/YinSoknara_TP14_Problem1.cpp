#include<iostream>
using namespace std;


int main(){
    int n1=7,n2=3,n3=15;
    int *p1, *p2, *p3;

    p1 = &n1;
    p2 = &n2;
    p3 = &n3;

    cout<<"The address of n1 through p1: "<<p1<<endl;
    cout<<"The Value of n1 through p1: "<<*p1<<endl;
    cout<<"The address of n2 through p2: "<<p2<<endl;
    cout<<"The Value of n2 through p2: "<<*p2<<endl;
    cout<<"The address of n2 through p2: "<<p3<<endl;
    cout<<"The Value of n2 through p2: "<<*p3<<endl;
}
