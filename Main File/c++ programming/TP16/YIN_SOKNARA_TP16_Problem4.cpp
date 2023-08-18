#include<iostream>
using namespace std;

struct Element{
    string name;
    string ID;
    string gender;
    int score;
    Element *next;
    Element *previous;
};
struct List{
    int n;
    Element *tail;
    Element *head;
};

List *emptyList(){
    List *ls = new List;
    ls->n = 0;
    ls->tail = NULL;
    ls->head = NULL;
    return ls;
}
Element storeData(){
    Element Data;
    Data.next = NULL;
    Data.previous = NULL;
    cout<<"Input Information Student Here!"<<endl;
    cout<<"\tID: "; cin>>Data.ID;
    cout<<"\tName: "; cin>>Data.name;
    cout<<"\tGender: "; cin>>Data.gender;
    cout<<"\tScore: "; cin>>Data.score;
    return Data;
}
void insertToBegin(List *ls, Element newData){
    Element *P;
    P = new Element;
    P->name = newData.name;
    P->ID = newData.ID;
    P->gender = newData.gender;
    P->score = newData.score;
    P->previous = NULL;
    if(ls->n == 0){
        P->next = NULL;
        ls->head = P;
        ls->tail = P;
    }else{
        P->next = ls->head;
        ls->head->previous = P;
        ls->head = P;
    }
    ls->n++;
}
void insertToEnd(List *ls, Element newData){
    Element *P;
    P = new Element;
    P->name = newData.name;
    P->ID = newData.ID;
    P->gender = newData.gender;
    P->score = newData.score;
    P->next = NULL;
    if(ls->n == 0){
        P->previous = NULL;
        ls->head = P;
        ls->tail = P;
    }else{
        P->previous = ls->tail;
        ls->tail->next = P;
        ls->tail = P;
    }
    ls->n++;
}
float findAvg(List *ls){
    int sum = 0;
    float avg;
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
    sum = sum + tmp->score;
    tmp = tmp->next;
    }
    avg = 1.0*sum / ls->n;
    return avg;
}
void displayDataFromBegin(List *ls){
    Element *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<tmp->ID<<"\t\t"<<tmp->name<<"\t\t"<<tmp->gender<<"\t\t"<<tmp->score<<endl;
        tmp = tmp->next;
    }
}
void displayDataFromEnd(List *ls){
    Element *tmp;
    tmp = ls->tail;
    while(tmp!=NULL){
        cout<<tmp->ID<<"\t\t"<<tmp->name<<"\t\t"<<tmp->gender<<"\t\t"<<tmp->score<<endl;
        tmp = tmp->previous;
    }
}
void displayMoreThanAvg(List *ls){
    Element *tmp;
    tmp = ls->head;
    int avg = findAvg(ls);
    while(tmp!=NULL){
        if(tmp->score>avg){
            cout<<tmp->ID<<"\t\t"<<tmp->name<<"\t\t"<<tmp->gender<<"\t\t"<<tmp->score<<endl;
        }
        tmp = tmp->next;
    }
}
int main(){
    List *ls;
    ls=emptyList();
    int choice;
    Element newData;
    float avg;
    while(1>0){
        cout<<"Choose one operation......!\n";
        cout<<"1. Add Student to the begin of the List.\n";
        cout<<"2. Add Student to the end of the List.\n";
        cout<<"3. Display Student information in the list From Begin.\n";
        cout<<"4. Display Student information in the list From End.\n";
        cout<<"5. Display The Average.\n";
        cout<<"6. Display List of student who got score more than Average.\n";
        cout<<"Enter a number : "; cin>>choice;
        cout<<endl;
        if(choice==1){
            newData=storeData();
            insertToBegin(ls,newData);
        }else if(choice==2){
            newData=storeData();
            insertToEnd(ls,newData);
        }
        else if(choice==3){
            displayDataFromBegin(ls);
        }else if(choice==4){
            displayDataFromEnd(ls);
        }else if(choice==5){
            avg = findAvg(ls);
            cout<<"Average: "<<avg<<endl;
        }else if(choice==6){
            displayMoreThanAvg(ls);
        }
    }
}