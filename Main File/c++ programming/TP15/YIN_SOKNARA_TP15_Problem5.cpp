#include<iostream>
using namespace std;
// 5.Get many numbersfrom a user and store in a singly linked list.
// The program ask a user for a number then store in the list. 
// When users input 0, stop asking user for more numbers. 
// Display all data in the list.
//  Find summation of all data in the list and show the result.
struct Element{
    int data;
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};
List *createList(){
    List *ls;
    ls=new List();
    ls->n=0;
    ls->head=NULL;
    ls->tail=NULL;
    return ls;
}
int addNumberToList(List *ls){
    int sum=0;
    int num;
    while(1>0){
        cout<<"Enter a number : "; cin>>num;
        sum=sum+num;
        Element *e;
        e=new Element();
        e->data=num;
        if(ls->n==0){
            ls->head = e;
            ls->tail = e;
        }else{
            ls->tail->next=e;
            ls->tail = e;
        }
        if(num==0){
            break;
        }
        ls->n ++;
    }
    return sum;
}
void displayData(List *ls){
    Element *temp;
    temp=ls->head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
}
int main(){
    int sum;
    List *ls;
    ls=createList();
    sum=addNumberToList(ls);
    displayData(ls);
    cout<<endl<<"The summation of number in link is : "<<sum<<endl;
    // cout<<ls->n;
}
