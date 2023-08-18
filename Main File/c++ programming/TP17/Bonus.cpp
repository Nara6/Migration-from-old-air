#include<iostream>
#include"MyStack_YINSOKNARA.h"
using namespace std;

int main(){
    char symbol;
    int sym;
    Stack *st;
    st=createEmptyStack();
    while(1){
        cout<<"Enter a symbol : ";
        cin>>symbol;
        sym=symbol;
        if(symbol=='0'){
            break;
        }
        if(sym==40 || sym==91 || sym==123){
            if(sym==40){
                sym=sym+1;
            }
            else{
                sym=sym+2;
            }
            push(sym,st);
        }
        else{
            if(sym==st->top->data){
                pop(st);
            }
            else{
                break;
            }
        }
    }
    if(st->n==0){
        cout<<"The input symbol is balance";
    }
    else{
        cout<<"The input symbol is not balance";
    }
}