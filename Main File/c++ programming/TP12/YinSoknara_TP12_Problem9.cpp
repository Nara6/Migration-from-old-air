#include<iostream>
using namespace std;

int main(){
    int num;
    int sum = 0;
    while(num!=0){
        cout<<"Enter a number: "; cin>>num;
        sum = sum + num;
    }
    cout<<"Summation: "<<sum<<"";
}
