#include<iostream>
using namespace std;

int main(){
    int n1= 7, n2= 3, n3= 15;
    int *p1, *p2, *p3;
    p1= &n1;
    p2= &n2;
    p3= &n3;
    cout<<"Display the value through pointer!"<<endl;
    cout<<*p1<<endl;
    cout<<*p2<<endl;
    cout<<*p3<<endl;
}