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

int main(){
    Element *tmp;
    Element *head;

    tmp = new Element; // Book memory allocation
     
    tmp -> num =5;
    tmp -> next = NULL;
    head = tmp;

    tmp = new Element; //Book a new memory allocation
    tmp -> num = 10;
    tmp -> next = head;
    head = tmp;
    cout<<head->num<<endl;
    head = head -> next;
    cout<<head->num<<endl;
}