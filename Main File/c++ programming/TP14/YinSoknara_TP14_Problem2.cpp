#include<iostream>
using namespace std;

int main(){
    int n;
    int *p;
    p = &n;
    cout<<"Enter a number: "; cin>>n;
    *p = *p + 7;
    cout<<"The value after modify equal to: "<<n;
}