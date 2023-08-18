#include<iostream>
using namespace std;

int main(){
    int num[5];
    int *p;
    int sum=0;
    int multiple=1;
    p = num;
    for(int i=0; i < 5; i++){
        cout<<"Enter a number: "; cin>>*(p+i);
    }
    for(int i=0; i < 5; i++){
        cout<<*(p+i)<<" ";
        sum = sum + *(p+i);
        multiple = multiple**(p+i);
    }
    cout<<"\nThe summation: "<<sum<<endl;
    cout<<"The mulplication: "<<multiple<<endl;
}   