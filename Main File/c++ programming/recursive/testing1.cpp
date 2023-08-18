#include<iostream>
using namespace std;

int computeFac(int num){
    if(num==0 || num==1){
        return 1;
    }else{
        return num*computeFac(num-1);
    }
}
int main(){
    int n,hold;
    cout<<"Enter a number: "; cin>>n;
    hold = computeFac(n);
    cout<<"\nFactorial of "<<n<<"is"<<hold<<"";
}