#include<iostream>
using namespace std;

int main(){
    string s="Meow", *s1;
    int i = 20, *i1;
    float f = 10.12, *f1;
    s1 = &s;
    i1 = &i;
    f1 = &f;
    cout<<"The address of string: "<<s1<<" and contain value: "<<*s1<<endl;
    cout<<"The address of integer: "<<i1<<" and contain value: "<<*i1<<endl;
    cout<<"The address of float: "<<f1<<" and contain value: "<<*f1<<endl;
}