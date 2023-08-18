#include<iostream>
using namespace std;
// 4.Create a singly linked list for storing information of students.
//  Each student has id, name, and average score.
//  Then write a program to ....
//  •Create a function to ask for  information  (id,  name, average score)
//   for a student then add her/him to the list.  
//   The program does not add the student tothe list when the input id is already exist in the list.
// •Create a function to display information of all students in the list.
struct Element{
    string ID;
    string name;
    int avgScore;
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};
List* EmptyList(){
    List *ls;
    ls = new List;
    ls->n = 0;
    ls->head = NULL;
    ls->tail = NULL;
    return ls;
}
Element storeData(){
    Element newData;
    newData.next = NULL;
    cout<<"Enter Student ID: "; cin>>newData.ID;
    cout<<"Enter Student Name: "; cin>>newData.name;
    cout<<"Enter Average Score: "; cin>>newData.avgScore;
    cout<<endl;
    return newData;
}
void addDataToList(List *ls, Element newData){
    Element *T;
    T = new Element;
    T->ID = newData.ID;
    T->name = newData.name;
    T->avgScore = newData.avgScore;
    if(ls->n == 0){
        ls->head = T;
        ls->tail = T;
    }else{
        ls->tail->next = T;
        ls->tail = T;
    }
    ls->n++;
}
void checkExistID(List *ls, Element newData){
    int state = 0;
    if(ls->n==0){
    addDataToList(ls,newData);
    }
    else{
        Element *temp;
        temp=ls->head;
        while(temp!=NULL){
            if(temp->ID==newData.ID){
                state=1;
                cout<<"This id is already exist in list...!\n\n";
                break;
            }
            temp=temp->next;
        }
        if(state==0){
            addDataToList(ls,newData);
        }
    }
}
void displayData(List *ls){
    Element *temp;
    temp=ls->head;
    cout<<"ID:"<<"\t\t"<<"Name: "<<"\t"<<"Average Score: "<<endl;
    while(temp!=NULL){
        cout<<temp->ID<<"\t"<<temp->name<<"\t"<<temp->avgScore<<endl;
        temp=temp->next;
    }
    cout<<endl;
}

int main(){
    List *ls;
    ls=EmptyList();
    int choice;
    Element newData;
    while(1>0){
        cout<<"Choose one operation......!\n";
        cout<<"1. Add Student to the list.\n";
        cout<<"2. Display Student information in the list.\n";
        cout<<"Enter a number : "; cin>>choice;
        cout<<endl;
        if(choice==1){
            newData=storeData();
            checkExistID(ls,newData);
        }
        else if(choice==2){
            displayData(ls);
        }
    }
}