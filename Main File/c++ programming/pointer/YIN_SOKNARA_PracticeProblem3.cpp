#include<iostream>
using namespace std;

void exchangeValue(int *a, int *b,int *c,int *d){
    //a exchange with b and c gotta exchange with d
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
    exchangeValue(&a,&b,&c,&d);
    cout<<"The value a and b after exchange: "<<a<<"\t"<<b<<endl;
    cout<<"The value c and d after exchange: "<<c<<"\t"<<d<<endl;
}