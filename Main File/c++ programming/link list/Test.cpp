#include<iostream>
using namespace std;

struct Element{
    int data;
    Element *next;
};
// struct List{
//     int n;
//     Element *head;
//     Element *tail;
// };
int main(){
    Element *tmp;
    Element *head;

    tmp = new Element;
    tmp->data = 10;
    tmp->next = NULL;
    head = tmp;

    tmp = new Element;
    tmp->data = 100;
    tmp->next = head;
    head = tmp;

    cout<<head->data<<endl;
    head = head->next;
    cout<<head->data<<endl;
}