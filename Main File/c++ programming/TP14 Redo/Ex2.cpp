#include<iostream>
using namespace std;

int main(){
    int n;
    int *p;
    p= &n;
    cout<<"Value: "; cin>>n;
    *p = *p +7;
    cout<<n<<" + "<<7;
    cout<<": "<< n;
}