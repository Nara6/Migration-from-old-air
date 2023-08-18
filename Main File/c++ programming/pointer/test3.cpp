#include<iostream>
using namespace std;

void swapData(int x, int y){
    int temp = x;
    x = y; 
    y = temp;
    cout<<x<<"\t"<<y<<endl;
}
void SwapDataV2(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
    cout<<*x<<"\t"<<*y<<endl;

}

int main(){
    int n=10;
    int *p;

    p = &n;
    cout<<&n<<endl;
    cout<<p<<endl;
    cout<<&p<<endl;
    cout<<n<<endl;
    cout<<*p<<endl;
    // n = n+5;
    // *p = n+6;
    // cout<<*p<<endl;
    // int x=10,y=20;
    // SwapDataV2(&x,&y);
    // cout<<x<<"\t"<<y;
}