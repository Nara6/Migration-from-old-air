#include<iostream>
using namespace std;

int main(){
    string s="Meow", *s1;
    float f=10.12, *f1;
    int i=29, *i1;
    s1 = &s;
    f1 = &f;
    i1 = &i;
    cout<<"The address of String: "<<&s<<endl;
    cout<<"The Value of string: "<<*s1<<endl;
    cout<<"The address of float: "<<&f<<endl;
    cout<<"The Value of float: "<<*f1<<endl;
    cout<<"The address of integer: "<<&i<<endl;
    cout<<"The Value of integer: "<<*i1<<endl; 
}