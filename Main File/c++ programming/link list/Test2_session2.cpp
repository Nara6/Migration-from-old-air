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
    list->n = 0;
    list->head = NULL;
    list->tail = NULL;
    return list;
}
void insertToBegin(List *ls, int newData){
    Element *e = new Element;
    e->data = newData;
    e->previous = NULL;
    if(ls->n == 0){
        e->next = NULL;
        ls->head = e;
        ls->tail = e;
    }else{
        e->next = ls->head;
        ls->head->previous = e;
        ls->head = e;
    }
    ls->n++;
}
void insertToEnd(List *ls, int newData){
    
}
void displayData(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->data<<" ";
        tmp = tmp->next;
    }
    cout<<endl;
}
void displayDataV2(List *ls){
    Element *tmp;
    tmp = ls->tail;
    while(tmp!=NULL){
        cout<<tmp->data<<" ";
        tmp = tmp -> previous;
    }
}
int main(){
    List *l1;
    l1 = emptyList();
    insertToBegin(l1,9);
    insertToBegin(l1,-3);
    insertToBegin(l1,11);
    displayData(l1);
    displayDataV2(l1);
}