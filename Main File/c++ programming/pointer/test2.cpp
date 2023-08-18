#include<iostream>
using namespace std;

int main(){
    int a[]={2,3,5,6,7};
    int *p;
    p = a;
    // cout<<p<<endl;
    // cout<<&a[0]<<endl;
    // cout<<*p<<endl;
    for(int i=0; i<5; i++){
        cout<<(p+i)<<"\n";
        cout<<*(p+i)<<"\n";
    }

}