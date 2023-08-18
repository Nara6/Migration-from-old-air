#include<iostream>
using namespace std;
//a. Display n star
void displayStar(int n);
//b. Display number from n to 1
void displayNto1(int n);
int main(){
    int option;
    int n;
    do{
        cout<<"\n1. Display star!";
        cout<<"\n2. Display number form n to 1!";
        cout<<"\nPlease select your option: "; cin>>option;
        switch(option){
            case 1:
            cout<<"1. Display star!";
            cout<<"\nEnter a value n: "; cin>>n;
            displayStar(n);
            break;
            case 2:
            cout<<"2. Display number form n to 1!";
            cout<<"\nEnter a value n: "; cin>>n;
            displayNto1(n);
            break;
        }
    }while(option!=0);
}
void displayStar(int n){
    if(n>0){
        cout<<"* ";
        displayStar(n-1);
    }
}
void displayNto1(int n){
    if(n==1){
        cout<<" "<<n;
    }else{
        cout<<" "<<n;
        displayNto1(n-1);
    }
}