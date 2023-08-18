#include<iostream>
using namespace std;

int sum(int num){
    int result;
    if(num==1){
        return num;
    }else{
        return result = num + sum(num-1);
    }
}


int main(){
    int sum1;
    sum1 = sum(6);
    cout<<sum1;
}