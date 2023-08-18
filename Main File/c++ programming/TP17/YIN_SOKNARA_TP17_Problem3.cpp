#include<iostream>
#include"MyStack_YINSOKNARA.h"
#include<string.h>
using namespace std;

int main(){
    Stack *st;
    st = createEmptyStack();
    string s;
    cout<<"Enter a string: ";
    cin>>s;
    for(int i=0; i<s.length(); i++){
        push(s[i],st);
    }
    displayCharInStack(st);

} 