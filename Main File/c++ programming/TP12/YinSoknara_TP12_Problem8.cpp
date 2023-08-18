#include<iostream>
using namespace std;

int main(){
    int num;
    int min,max;
    cout<<"Number#1: "; cin>>num;
    min = num;
    max = num;
    for(int i=2; i<=7; i++){
        cout<<"Number#"<<i<<": "; cin>>num;
        if(num<min){
            min = num;
        }
        if(num>max){
            max = num;
        }
    }
    cout<<"Maximum number is: "<<max<<"";
    cout<<"\nMinimum number is: "<<min<<"";
    

}