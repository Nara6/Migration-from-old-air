#include<iostream>
using namespace std;

void swapValue(int *a,int *b,int *c,int *d){
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;
    temp = *c;
    *c = *d;
    *d = temp;
}

int main(){
    int a=1,b=2,c=3,d=4;
    swapValue(&a,&b,&c,&d);
    cout<<"The value after swap: "<<a<<"\t"<<b<<"\t"<<c<<"\t"<<d;
}