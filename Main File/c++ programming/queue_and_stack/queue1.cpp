#include<iostream>
using namespace std;

struct Element{
    int data;
    Element *next;
};
struct Queue{
    int n;
    Element *front;
    Element *rear;
};
Queue *createEmtpyQueue(){
    Queue *q;
    q = new Queue;
    q->front = NULL;
    q->rear = NULL;
    q->n = 0;
    return q;
}
// ==========>> Add to End
void enQueue(Queue *q, int newData){
    Element *e = new Element;
    e->data = newData;
    e->next = NULL;
    if(q->n ==0){ //when queue is empty
    q->front = e;
    q->rear = e;
    }else{ //When queue is not empty
    q->rear->next = e;
    q->rear = e;
    }
    q->n = q->n + 1;
}
// ============>> Delete from begin
void deQueue(Queue *q){
    if(q->n == 0){
        cout<<"Cannot be deleted!";
    }else if(q->n == 1){
        Element *e = new Element;
        e = q->front;
        q->front = NULL;
        q->rear = NULL;
        q->n--;
    }else{
        Element *e = new Element;
        e = q->front;
        q-> front = q->front->next;
        delete e;
        q->n--;
    }
}
void displayQueue(Queue *q){
    Element *tmp = new Element;
    tmp = q->front;
    while(tmp!=NULL){
        cout<<tmp->data<<" ";
        tmp = tmp->next;
    }
}
int main(){
    Queue *q1;
    q1 = createEmtpyQueue();
    enQueue(q1,2);
    enQueue(q1,4);
    enQueue(q1,5);
    enQueue(q1,9);
    displayQueue(q1);
    cout<<endl;
    deQueue(q1);
    displayQueue(q1);
}