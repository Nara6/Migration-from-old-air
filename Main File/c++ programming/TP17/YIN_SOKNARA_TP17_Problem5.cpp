#include<iostream>
#include"MyQueue_YINSOKNARA.h"
#include<ctime>
using namespace std;

void dequeueKtime(Queue *q,int k){
    Element *tmp;
    tmp=q->front;
    for(int i=0;i<k;i++){
        cout<<tmp->data<<" ";
        tmp=tmp->next;
        Dequeue(q);
    }
}

int main(){
    Queue *q1;
    int n,k;
    srand(time(0));
    q1 = createEmptyQueue();
    for(int i=0; i<20; i++){
        n=rand()%1000+1;
        enQueue(q1,n);
    }
    
    cout<<endl<<"Enter a number: ";
    cin>>k;
    if(k<=20){
        cout<<endl<<"There are "<<k<<" element in the queue: ";
        dequeueKtime(q1,k);
    }else{
        cout<<"There are only 20 element in the queue!";
    }
}