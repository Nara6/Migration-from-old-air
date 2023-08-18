#include<iostream>
using namespace std;
// 3.Create a singly linked list that can store integer numbers. Create 4 functions i) create list,
//  ii) add data to end of list, iii) add data to beginning of list, iv) 
//  display data in list. Then ...
//  •Create an empty list
//  •Add the number 7 to the beginning of the list
//  •Add 1 to the beginning of the list•Display all numbers in the list17
//  •Add 0 to the end of the list•Add the number 4 to the end of the list
//  •Display all numbers in the list
struct Element{
    int num;
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};

List* EmptyList(){
    List *l;
    l = new List;
    l->n = 0;
    l->head = NULL;
    l->tail = NULL;
    return l;
}
void addDataToBegin(List *ls, int newNum){
    Element *T = new Element;
    T->num = newNum;
    T->next = ls->head;
    ls->head = T;
    if(ls->n==0){
        ls->tail = T;
        ls->head = T;
    }
    ls->n = ls->n+1;
}
void addDataToEnd(List *ls, int newNum){
    Element *T = new Element;
    T->num = newNum;
    T->next = NULL;
    if(ls->n ==0){
        ls->head = T;
        ls->tail = T;
    }else{
        ls->tail->next = T;
        ls->tail = T;
    }
    ls->n = ls->n + 1;
}
void displayData(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->num<<" ";
        tmp = tmp->next;
    }
    cout<<endl;
}



int main(){
    List *l1;
    l1 = EmptyList();
    addDataToBegin(l1,7);
    addDataToBegin(l1,1);
    displayData(l1);
    addDataToEnd(l1,0);
    addDataToEnd(l1,4);
    displayData(l1);
}