#include<iostream>
using namespace std;

int main(){
    char ch;

    while(1>0){
        int status = 0;
        cout<<"\nEnter a character: "; cin>>ch;
    for(int i=48; i<58; i++){
        if(ch==i){
            status = 1;
            cout<<"\nIt's a Number!";
        }
    }
    for(int i=65; i<91; i++){
        if(ch==i){
            status = 1;
            cout<<"It's a Uppercase!";
        }
    }
    for(int i=97; i<123; i++){
        if(ch==i){
            status = 1;
            cout<<"It's a Lowercase!";
        }
    }
    if(status == 0){
        cout<<"\nIt's not a Number neither a letter!";
    }
    }
}