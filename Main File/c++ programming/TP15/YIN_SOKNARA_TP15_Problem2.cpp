#include<iostream>
using namespace std;
// In addition to problem #1, create 3 functions:
//  •a function to create an empty list,
//  •a function to add data to the list,
//  •a function to display all data in the list. 
//  then in main program, call these three functionsto test and see the result.
//  Try to add 10 ID data of students into the list.
struct Element{
    int data;
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};
//We create a empty list to book memory allocation;
List* createEmptyList(){
    List *ls;
    ls = new List;
    ls->n = 0;
    ls->head = NULL;
    ls->tail = NULL;
    return ls;
}
// void insertToBegin(List *ls, int Data){
//     Element *t;
//     t = new Element;
//     t->data = Data;
//     if(ls->n==0){//When the list is empty;
//         t->next = NULL;
//         ls->head = t;
//         ls->tail = t;
//     }else{
//         t->next = ls->head;
//         ls-> head = t;
//     }
//     ls->n = ls->n + 1;
// }
void insertToEnd(List *ls, int Data){
    Element *t;
    t = new Element;
    t->data = Data;
    t->next = NULL;
    if(ls->n==0){
        ls->head = t;
        ls->tail = t;
    }else{
        ls->tail->next = t;
        ls->tail = t;
    }
    ls->n = ls->n + 1;
}
void displayTheList(List *ls){
    Element *t;
    t = ls->head;
    while(t!=NULL){
        cout<<t->data<<" ";
        t = t->next;
    }
    cout<<endl;
}
int main(){
    List *L1;
    L1 = createEmptyList();
    insertToEnd(L1, 7);
    insertToEnd(L1,9);
    insertToEnd(L1,11);
    displayTheList(L1);
    // cout<<L1->n;
}