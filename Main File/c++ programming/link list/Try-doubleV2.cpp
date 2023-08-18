#include<iostream>
using namespace std;

struct Element{
    int data;
    Element *next;
    Element *prev;
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
void insertToBegin(List *list, int newData){
    Element *e = new Element;
    e->data=newData;
    e->prev = NULL;
    if(list->n==0){
        e->next = NULL;
        list-> head = e;
        list-> tail = e;
    }else{
        e->next = list->head;
        list->head->prev = e;
        list->head = e;
    }
    list->n++;
}
void displayData(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->data<<" ";
        tmp = tmp->next;
    }
}
int main(){
    List *l1;
    l1 = emptyList();
    insertToBegin(l1,10);
    insertToBegin(l1,12);
    insertToBegin(l1,11);
    displayData(l1);
}