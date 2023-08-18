#include<iostream>
using namespace std;

struct Element {
    //data
    int num;
    // pointer
    Element *next;
};
struct List{
    int n; //number of elements
    Element *head; //head as first element
    Element *tail; //tail as last element
};
//create empty list
List* createEmptyList() {
    List *ls = new List();
    ls -> n = 0;
    ls -> head = NULL;
    ls -> tail = NULL;
    return ls;
}
void insertTobegin(List *ls, int newData){
    Element *tmp;
    tmp = new Element;
    tmp -> num = newData;
    if(ls->n == 0){ // when list is empty
        tmp->next = NULL;
        ls-> head = tmp;
        ls-> tail = tmp;

    }else{ //when list is not empty
        tmp -> next = ls->head;
        ls-> head = tmp;
    }
    ls->n = ls->n + 1;
}
void insertToend(List *ls, int newData){
    Element *t;
    t = new Element;
    t->num = newData;
    t->next = NULL;
    if(ls->n == 0){
        ls -> head = t;
        ls -> tail = t;
    }else{
        ls->tail->next = t;
        ls->tail = t;
    }
    ls->n = ls->n+1;
}
void deleteFromBegin(List *ls){
    if(ls->n==0){
        cout<<"No Data on the list!";
    }else if(ls->n>=1){
        Element *tmp;
        tmp = ls->head;
        ls->head = ls->head->next;
        delete tmp;
        if(ls->n==1){
            ls->tail=NULL;
        }
        ls->n--;
    }
}
void deleteFromEnd(List *ls){
    if(ls->n==0){
        cout<<"No Data on the list!";
    }else if(ls->n==1){
        deleteFromBegin(ls);
    }else if(ls->n>=2){
        Element *tmp;
        tmp = ls->head;
        for(int i=1; i<=ls->n-2; i++){
            tmp = tmp->next;
        }
            ls->tail = tmp;
            tmp = tmp->next;
            ls->tail->next = NULL;
            delete tmp;
        ls->n--;
    }
}
void displayList(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->num<<" ";
        tmp = tmp->next;
    }
    cout<<"\n";
}
int main(){
    List *L1,*L2;
    L1 = createEmptyList();
    // L2 = createEmptyList();
    insertTobegin(L1,3);
    insertTobegin(L1,5);
    insertTobegin(L1,7);
    // displayList(L1);
    insertToend(L1,3);
    insertToend(L1,5);
    insertToend(L1,7);
    deleteFromEnd(L1);
    // deleteFromBegin(L1);
    displayList(L1);
    
    cout<<L1->n<<endl;
    cout<<L2;
}