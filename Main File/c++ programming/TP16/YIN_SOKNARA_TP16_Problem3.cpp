#include<iostream>
#include<ctime>
#include<cstdlib>
#include"YIN_SOKNARA-SingleLinkList.h"
using namespace std;

int main(){
    List *ls = emptyList();
    Element *tmp;
    srand(time(0));
    int n; 
    int min=1,max=100;
    int num;
    int sum = 0;
    int avg;
    cout<<"Enter a number: "; cin>>num;
    for(int i=1; i<=num; i++){
        n=rand()%max+min;
        sum = sum + n;
        addToEndOfList(ls,n);
    }
    displayList(ls);
    avg = sum/num;
    cout<<endl<<"The Summation : "<<sum<<endl;
    cout<<"The Average : "<<avg<<endl;
    tmp = ls->head;
    int minimuim = ls->head->num;
    int maximuim = ls->head->num;
    while(tmp!=NULL){
        if(minimuim>tmp->num){
            minimuim=tmp->num;
        }
        if(maximuim<tmp->num){
            maximuim=tmp->num;
        }
        tmp = tmp->next;
    }
    cout<<"Minimuim: "<<minimuim<<endl;
    cout<<"Maximuim: "<<maximuim<<endl;
}
