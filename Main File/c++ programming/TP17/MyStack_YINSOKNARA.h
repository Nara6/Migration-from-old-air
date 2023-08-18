#include<iostream>
using namespace std;
struct Element{
    int data;
    Element *next;
};
struct Stack{
    int n;
    Element *top;
};
Stack *createEmptyStack(){
    Stack *stack = new Stack;
    stack->n = 0;
    stack->top = NULL;
    return stack;
}
//=============>> Insert From begin
void push(int newData, Stack *s){
    Element *e = new Element;
    e->data = newData;
    if(s->n==0){
        e->next =NULL;
        s->top = e;
    }else{
        e->next = s->top;
        s->top = e;
    }
    s->n++;
}
void pop(Stack *s){
    Element *e = new Element;
    if(s->n==0){
        cout<<"Stack cannot be deleted!"<<endl;
    }else{
        e = s->top;
        s->top = s->top->next;
        cout<<"\n\t POP: "<<e->data;
        delete e;
        s->n--;
    }
}
void displayStack(Stack *s){
    Element *e = new Element;
    e = s->top;
    while(e!=NULL){
        cout<<e->data<<" ";
        e = e->next;
    }
}
void displayCharInStack(Stack *s){
    Element *tmp;
    tmp=s->top;
    char cha;
    while(tmp!=NULL){
        cha=tmp->data;
        cout<<cha<<" ";
        tmp=tmp->next;
    }
}
