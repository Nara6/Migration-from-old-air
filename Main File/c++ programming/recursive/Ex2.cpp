#include<iostream>
using namespace std;

int printHello(int n){
    if(n==0){
        return 0;
        
    }else{
        cout<<"Hello "<<n<<"";
        return (n+1);
    }
}
int main(){
    int num,hold;
    cout<<"Enter a number: "; cin>>num;
    printHello(num);
}