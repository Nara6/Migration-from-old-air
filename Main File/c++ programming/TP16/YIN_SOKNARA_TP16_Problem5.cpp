#include<iostream>
using namespace std;

struct Element{
    int num;
    char cha;
    Element *next;
    Element *previous;
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
void addToEndOfList(List *ls, int data){
    Element *ele = new Element;
    ele-> num = data;
    ele->next = NULL;
    if(ls->n==0){
        ele->previous = NULL;
        ls->head = ele;
        ls->tail = ele;

    }else{
        ele->previous = ls->tail;
        ls->tail->next = ele;
        ls->tail = ele;
    }
    ls->n++;
}
void displayListAtoZ(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        tmp->cha = tmp->num;
        cout<<tmp->cha<<" ";
        tmp = tmp->next;
    }
}
int main(){
    List *ls;
    ls = emptyList();
    for(int i=65; i<=90; i++){
        addToEndOfList(ls,i);
    }
    for(int i=97; i<=122; i++){
        addToEndOfList(ls,i);
    }
    displayListAtoZ(ls);
}