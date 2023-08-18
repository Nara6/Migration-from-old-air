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
int main(){
    Stack *s1;
    s1 = createEmptyStack();
    push(1, s1);
    push(3, s1);
    push(5, s1);
    push(7, s1);
    push(9, s1);
    pop(s1);
    pop(s1);
    cout<<endl;
    displayStack(s1);
}