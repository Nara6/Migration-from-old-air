#include<iostream>
using namespace std;

int main(){
    int num, sum=0;
    while(1>0){
        cout<<"\nEnter a number: "; cin>>num;
        if(num>=50){
            for(int i=0; i<=num; i++){
                if(i==10 || i==30){
                    continue;
                }else{
                    sum = sum + i;
                }
            }
            cout<<"Summation :"<<sum<<"";
        }else{
            cout<<"\nPlease enter a larger number!";
        }
    }

}