#include<iostream>
using namespace std;

int main(){
    int num;
    for(int i=1; i<=100; i++){
        if(i%5==0){
            if(i==30||i==60||i==90){
                continue;
            }else{
                cout<<i<<"  ";
            }

        }
    }
}