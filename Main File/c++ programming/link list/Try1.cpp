#include<iostream>
using namespace std;

struct Element{
    int data;
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};
List* emptyList(){
    List *list = new List;
    list->n = 0;
    list->head = NULL;
    list->tail = NULL;
    return list;
}
void insertToBegin(List *list, int newData){
    Element *element = new Element;
    element -> data = newData;
    if(list->n == 0){
        list->head = element;
        list->tail = element;
    }else{
        element->next = list->head;
        list->head = element;
    }
    list->n++;
}
void insertToEnd(List* list,int newData){
    Element *element = new Element;
    element->data = newData;
    if(list->n == 0){
        list->head = element;
        list->tail = element;
    }else{
        list->tail->next = element;
        list->tail = element;
    }
    list->n++;
}
void displayData(List *list){
    Element *tmp;
    tmp = list->head;
    while(tmp!=NULL){
        cout<<tmp->data<<" ";
        tmp = tmp->next;
    }
}
int main(){
    List *l1;
    l1 = emptyList();
    // insertToBegin(l1,10);
    // insertToBegin(l1,11);
    // insertToBegin(l1,12);
    insertToEnd(l1,10);
    insertToEnd(l1,11);
    insertToEnd(l1,12);
    displayData(l1);
}