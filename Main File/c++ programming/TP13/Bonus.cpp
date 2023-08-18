#include<iostream>
using namespace std;

int SumNumUserInput(){
    int n,sum;
    cout<<"\tEnter a number: "; cin>>n;
    if(n!=-1){
        sum = SumNumUserInput();
        sum = sum + n;
        return sum;
    }else{
        return -1;
    }
}
int main(){
    int result;
    result = SumNumUserInput();
    cout<<"\nSummation: "<<result;
}