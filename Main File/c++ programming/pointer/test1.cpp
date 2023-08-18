#include<iostream>
using namespace std;

void swapData(int a, int b){
    int tmp;
    tmp = a;
    a = b;
    b = tmp;
    cout<<a<<"\t"<<b<<endl;
}
void swapDataV2(int *a, int *b){
    int tmp;
    tmp = *a;
    *a = *b;
    *b = tmp;
    cout<<*a<<"\t"<<*b<<endl;
}


int main(){
    int n = 10; //normal variable
    int *p; // pointer variable
    p = &n; 
    cout<<p<<endl;
    cout<<&n<<endl;
    cout<<&p<<endl;
    cout<<*p<<endl;
    n=n+5;
    cout<<*p<<endl;
    // swapData(20,90);
    int x=10, y=30;
    swapDataV2(&x,&y);
    cout<<"\n\t"<<x<<"\t"<<y<<endl;
}