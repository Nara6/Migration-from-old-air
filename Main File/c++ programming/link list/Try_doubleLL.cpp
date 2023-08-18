#include<iostream>
using namespace std;
struct Element{
    int data;
    Element *previous;
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};

List *emptyList(){
    List *list = new List;
    list->n=0;
    list->head=NULL;
    list->tail=NULL;
    return list;
}
void insertFromBegin(List *list, int newData){
    Element *e = new Element;
    e->data=newData;
    e->previous = NULL;
    if(list->n==0){
        e->next = NULL;
        list->head=e;
        list->tail=e;
    }else{
        e->next = list->head;
        list->head->previous = e;
        list->head = e;
    }
    list->n++;
}
void insertToEnd(List *list, int newData){
    Element *e = new Element;
    e->data=newData;
    e->next = NULL;
    if(list->n==0){
        e->previous = NULL;
        list->head=e;
        list->tail=e;
    }else{
        e->previous = list->tail;
        list->tail->next = e;
        list->tail = e;
    }
    list->n++;
}
void displayValue(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->data<<" ";
        tmp=tmp->next;
    }
}
int main(){
    List *l1;
    l1 = emptyList();
    // insertFromBegin(l1,10);
    // insertFromBegin(l1,11);
    // insertFromBegin(l1,12);
    insertToEnd(l1,10);
    insertToEnd(l1,11);
    insertToEnd(l1,12);
    insertToEnd(l1,13);
    insertToEnd(l1,14);
    displayValue(l1);
}