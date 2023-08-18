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
void displayList(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->num<<" ";
        tmp = tmp->next;
    }
    cout<<"\n";
}
void deleteFromBegin(List *ls){
    //0). Test validation
    //1). Get reference to head of list
    //2). Move head
    //3). Delete

//0). Test validation
    if(ls->n==0){
        cout<<"List is empty"<<endl;
    }else if(ls->n>=1){
        Element *t;
        //1). Get reference to head of list
        t = ls->head;
        //2). Move head
        ls->head = ls->head->next;
        //3). Delete
        delete t;
        if(ls->n==1){
            ls->tail = NULL;
        }
        ls->n--;
    }
}
void deleteFromEnd(List *ls){
    if(ls->n==0){
        cout<<"List is empty";
    }else if(ls->n==1){
        Element *t;
        t = ls->head;
        ls->head = NULL;
        ls-> tail = NULL;
        delete t;

        ls->n--;
    }else if(ls->n>=2){
        Element *t;
        t = ls->head;
        for(int i=1; i<=ls->n-2; i++){
            t=t->next;
        }
        ls->tail = t;
        t = t->next;
        ls->tail->next = NULL;
        delete t;
        ls->n--;
    }
}
int searchData(List *ls, int myData){
    Element *t;
    int count=0;
    t = ls->head;
    while(t!=NULL){
        if(t->num==myData){
            count++;
        }
        t = t->next;
    }
    return count;
}
int main(){
    List *L1;
    L1 = createEmptyList();
    // deleteFromEnd(L1);
    // L2 = createEmptyList();
    insertTobegin(L1,3);
    insertTobegin(L1,5);
    insertTobegin(L1,7);
    insertTobegin(L1,5);
    // displayList(L1);
    // insertToend(L2,3);
    insertToend(L1,5);
    // insertToend(L2,7);
    // displayList(L2);
    cout<<endl;
    //deleteFromEnd(L1);
    displayList(L1);
    // int n;
    // n=searchData(L1, 5);
    // if(n==0){
    //     cout<<"Not Found";
    // }else{
    //     cout<<"Found "<<n<<" Times";
    // }
    // cout<<L1<<endl;
    // cout<<L2;
}