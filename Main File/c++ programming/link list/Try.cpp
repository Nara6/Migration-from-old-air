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
List* createEmptylist(){
    List *ls = new List;
    ls->n = 0;
    ls->head = NULL;
    ls->tail = NULL;
    return ls;
}
