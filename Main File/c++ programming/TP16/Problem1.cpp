#include<iostream>
using namespace std;

struct Element{
    int num;
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
void addToBeginOfList(List *ls, int data){
    Element *ele = new Element;
    ele-> num = data;
    if(ls->n==0){
        ele->next = NULL;
        ls->head = ele;
        ls->tail = ele;
    }else{
        ele -> next = ls->head;
        ls->head = ele;
    }
    ls->n++;
}
void addToEndOfList(List *ls, int data){
    Element *ele = new Element;
    ele-> num = data;
    ele->next = NULL;
    if(ls->n==0){
        ls->head = ele;
        ls->tail = ele;

    }else{
        ls->tail->next = ele;
        ls->tail = ele;
    }
    ls->n++;
}
void addSpecificPosition(List *ls, int data, int position){
    if(position == 1){
        addToBeginOfList(ls,data);
    }else if(position==ls->n+1){
        addToEndOfList(ls,data);
    }else if(position>ls->n+1){
        cout<<"Out of position in the list!";
    }else{
        Element *tmp, *putData;
        putData = new Element;
        putData->num = data;
        putData->next = NULL;
        tmp = ls->head;
        for(int i=2; i<=position-1; i++){
            tmp = tmp->next;
        }
        putData->next = tmp->next;
        tmp->next = putData;
        ls->n++;
    }
    
}
void displayList(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->num<<" ";
        tmp = tmp->next;
    }
}
int main(){
    List *l1;
    l1 = emptyList();
    addToBeginOfList(l1,9);
    addToBeginOfList(l1,10);
    addToBeginOfList(l1,11);
    addToEndOfList(l1,12);
    addToEndOfList(l1,13);
    addToEndOfList(l1,14);
    addSpecificPosition(l1,15,5);
    displayList(l1);
}
