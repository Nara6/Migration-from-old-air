#include<iostream>
#include"MyStack_YINSOKNARA.h"
using namespace std;
int main(){
    int num,remaider;
    Stack *s1;
    s1 = createEmptyStack();
    cout<<"Enter a number: "; cin>>num;
    while(num!=0){
        remaider = num%2;
        num = num/2;
        push(remaider,s1);
    }
    displayStack(s1);
}