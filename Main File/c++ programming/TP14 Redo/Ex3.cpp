#include<iostream>
using namespace std;

void swapValue(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;
}
// a = 10, b=20; => swapping 20,10;
int main(){
    int a=10,b=20;
    swapValue(&a,&b);
    cout<<"By swapping two int we got: "<<a <<" , "<<b;
}
