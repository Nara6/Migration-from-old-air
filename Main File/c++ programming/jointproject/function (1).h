#include<string.h>
struct member{    
    char symbol;
    int next_state;
    struct member *next; 
}; 
struct List{
    int n;
    member *front; 
}; 
List *createEmptyList(){
    List *list; 
    list = new List;
    list -> n = 0;
    list -> front = NULL; 

    return list; 
}
void addToBeginList(List *list, char symbol, int next_state){
    member *tmp; 
    tmp = new member; 
    tmp -> symbol = symbol; 
    tmp -> next_state = next_state;
    if(list -> n == 0){
        tmp -> next = NULL; 
        list -> front = tmp; 
    }else{
        tmp -> next = list -> front; 
        list -> front = tmp; 
    }
    list -> n += 1; 
}
struct Element{
    int data; 
    Element *next; 
}; 
struct Queue{
    int n;
    Element *front; 
    Element *rear;
};
Queue* createEmptyQueue(){
    Queue *Q; 
    Q = new Queue; 
    Q -> n = 0; 
    Q -> front = NULL; 
    Q -> rear = NULL; 

    return Q; 
} 
void enqueue(Queue *Q, int newData){
    Element *e; 
    e = new Element;
    e -> data = newData; 
    e -> next = NULL; 
    if(Q->n == 0){
        Q->front = e;
        Q->rear = e;  
    }else{
        Q->rear->next = e; 
        Q->rear = e; 
    }
    Q->n += 1;
}
void dequeue(Queue *Q){
    Element *tmp; 
    tmp = Q->front; 
    Q->front = Q->front->next; 
    delete tmp; 
    Q->n -= 1; 
}
void displayQueue(Queue *Q){
    Element *tmp; 
    tmp = Q->front;  
    while(tmp!=NULL){
        cout <<" "<<tmp->data; 
        tmp = tmp->next;
    }
    cout<<"\n"; 
}
int isFinal(Queue *Q, int n_final, int *final){
    Element *tmp; 
    tmp = Q -> front; 
    while(tmp!=NULL){
        for(int j=0;j<n_final;j++){
            if(tmp->data == final[j]){
                return 1; 
            }
        }
        tmp = tmp -> next; 
    }
    return 0; 
}
void testString(List **graph, Queue *Q, string str, int n_final, int* final){
    enqueue(Q, 0);
    for(int i = 0; i<str.length(); i++){
        member *tmp; 
        Element *tmp1; 
        int count = 0;
        for(int j=0;j<Q->n;j++){ 
            tmp1 = Q -> front;
            tmp = graph[tmp1->data] -> front;
            while(tmp!=NULL){
                if(str[i]==tmp->symbol){
                    enqueue(Q, tmp -> next_state); 
                }
                tmp = tmp -> next; 
                }
            dequeue(Q); 
        }
    }
    int accept;
    accept = isFinal(Q, n_final, final);
    if(accept == 1){
        cout << "String accepted"; 
    }else{
        cout << "String not accepted"; 
    }
     
    displayQueue(Q); 
}



