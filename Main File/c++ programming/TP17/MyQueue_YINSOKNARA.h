#include<iostream>
using namespace std;
// =====>> Since Queue using FIFO method thus that mean(First Element in are need to out first).
struct Element{
    int data;
    char ch;
    Element *next;
};
struct Queue{
    int n;
    Element *front;
    Element *rear;
};
Queue *createEmptyQueue(){
    Queue *queue = new Queue;
    queue->n = 0;
    queue->front = NULL;
    queue->rear = NULL;
    return queue;
}
//=========>> Method Enqueue Using add to the end
void enQueue(Queue *queue, int newData){
    Element *e = new Element;
    e->data = newData;
    e->next = NULL;
    if(queue->n == 0){
        queue->front = e;
        queue->rear = e;
    }else{
        queue->rear->next = e;
        queue->rear = e;
    }
    queue->n++;
}
void enQueueText(Queue *queue, char newData){
    Element *e = new Element;
    e->ch = newData;
    e->next = NULL;
    if(queue->n == 0){
        queue->front = e;
        queue->rear = e;
    }else{
        queue->rear->next = e;
        queue->rear = e;
    }
    queue->n++;
}
//=========>> Method Dequeue Using add from begin
void Dequeue(Queue* queue){
    if(queue->n == 0){
        cout<<"Cannot be deleted!";
    }else if(queue->n == 1){
        Element *e = new Element;
        e = queue->front;
        queue->front =NULL;
        queue->rear = NULL;
        queue->n--;
    }else{
        Element *e = new Element;
        e = queue->front;
        queue-> front = queue->front->next;
        cout<<"Dequeue: "<<e->ch<<endl;
        delete e;
        queue->n--;
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
void displayCharInQueue(Queue *q){
    Element *tmp = new Element;
    tmp = q->front;
    while(tmp!=NULL){
        cout<<tmp->ch <<" ";
        tmp = tmp->next;
    }
}