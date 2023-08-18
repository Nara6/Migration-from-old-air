
struct member{    
    char symbol;
    int next_state;
    member *next; 
}; 
struct List{
    int n;
    member *front; 
}; 
struct node{
    int next_state;
    char symbol;
    node *next;
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
node *push(node* first , char edgetype , int data)
{
    if (first==NULL){
        node* new_node = (node*)malloc(sizeof(node));
        new_node->symbol = edgetype;
        new_node->next_state = data;
        new_node->next = NULL;
        first = new_node;
        return new_node;
    }
    first->next = push(first->next,edgetype,data);
    return first;
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
Queue *copyQ(Queue *q) {

    Element *current = q->front;  //holds the current node

    Queue *copy = createEmptyQueue();

    //traverses the list
    while (current != NULL) {
        enqueue(copy,current->data);
        current = current->next;
    }
    return copy;
}
Queue *deleteQueue(Queue *q){
    Element * tmp;
    tmp = q->front;
    while(tmp!=NULL){
        tmp = tmp->next;
        q -> n--;
        delete q->front;
        q->front = tmp;
    }
    return q;
}
void displayQueue(Queue *Q){
    Element *tmp; 
    tmp = Q->front;  
    while(tmp!=NULL){
        cout<<" "<<tmp->data; 
        tmp = tmp->next;
    }
    cout<<"\n"; 
}
bool isFinal(Queue *Q, int n_final, int *final){
    Element *tmp; 
    tmp = Q -> front; 
    while(tmp!=NULL){
        for(int j=0;j<n_final;j++){
            if(tmp->data == final[j]){
                return true; 
            }
        }
        tmp = tmp -> next; 
    }
    return false; 
}
bool isNotExistInQueue(Queue *Q, int state){
    Element *tmp; 
    tmp = Q -> front; 
    while(tmp != NULL){
        if(tmp -> data == state){
            return false;
        }
        tmp = tmp -> next; 
    }
    return true; 
}
bool checkIfExistQ(Queue* Q,int data){           //check if data is already in Q
    Element* temp=Q->front;
    for(int i=0;i<Q->n;i++){
        if( temp->data==data ){
            return true;
            break;
        }
        temp=temp->next;
    }
    return false;
}
int checkIfExistSqSum(int * sqsum,int p, int data){
    for(int i=0;i<p;i++){
        if(sqsum[i]==data){
            return i;
            break;
        }
    }
    return -1;          //not exist
}
void displayTable(node **graph,int n ,char* symbol,int n_symbol,int* final, int nf){
    printf("\n");
    printf("\t\t\t\t\t|");
    for(int i=0; i<n_symbol+1; i++){
        printf("\t%c\t|",symbol[i]);
    }
    printf("\n\t\t\t\t========");
    for(int i=0; i<n_symbol+1; i++){
        printf("================");
    }
    printf("\n");
    for(int i=0;i<n;i++){
        printf("\t\t\t\t  ");
        for(int k=0; k<nf; k++){
            if(final[k]==i) printf("*");
        }
        if(i==0) printf("->");
        printf("q%d\t|\t",i);
        for(int j=0; j<n_symbol+1; j++){
            node* temp = graph[i];
            node* temp1 = graph[i];

            int count=0;
            int count1=0;

            while(temp!=NULL){
                if(temp->symbol==symbol[j]){
                    printf("q%d ",temp->next_state);
                    if(temp->symbol=='e') count1++;
                }else if(temp->symbol!='e'&&j==n_symbol){
                    count1++;
                    if(count1==1) printf("-");
                    else         printf("");
                }
                temp=temp->next;
            }
            printf("\t|\t");
        }
        printf("\n\t\t\t\t========");
        for(int i=0; i<n_symbol+1; i++){
            printf("================");
        }
        printf("\n");
    }
}
int checkfinalstate(Queue* queue,int* final,int nf){
    Element* temp=queue->front;

    for(int i=0;i<queue->n;i++){
        for(int j=0;j<nf;j++){
            if(temp->data==final[j]){
                return 1;
                break;
            }
        }
        temp=temp->next;
    }
    return 0;
}
void testString(node **graph, Queue *Q, string str, int n_final, int* final){
    enqueue(Q, 0);
    for(int i = 0; i<str.length(); i++){
        node *tmp; 
        Element *tmp1; 
        int count = 0;
        for(int j=0;j<Q->n;j++){ 
            tmp1 = Q -> front;
            tmp = graph[tmp1->data];
            while(tmp!=NULL){
                if(str[i]==tmp->symbol){
                    //if(isNotExistInQueue(Q,tmp1->data)==true){
                        enqueue(Q, tmp -> next_state);
                    //}
                }
                tmp = tmp -> next; 
            }
            dequeue(Q); 
        }
    }
    //int accept;
    //accept = isFinal(Q, n_final, final);
    if(isFinal(Q, n_final, final)){
        cout << "\nString accepted"; 
    }else{
        cout << "\nString not accepted"; 
    }
     
    displayQueue(Q); 
}
// to test that it is DFA or NFA:
// check e transition
// check number of transition in each state if it's different from number of symbol then it's NFA
// check each symbol in state if there are the same symbol in two transition then it's NFA
bool isDFA(node **ArrayOfState, int n, char *symbol, int n_symbol){
    for(int i=0;i<n;i++){    // loop access to each state
        int count = 0;       // check if count states have equal transition and symbol
        node * tmp = ArrayOfState[i]; 
        while(tmp != NULL){
            if(tmp -> symbol == 'e'){
                return false; 
            }
            tmp = tmp -> next; 
            count += 1; 
        }
        if(count != n_symbol){
            return false; 
            // NFA
        }
        char sym_in_state[n_symbol]; 
        int k=0; 
        tmp = ArrayOfState[i]; 
        // copy symbol from state into 'sym_in_state' in order to compare
        while(tmp != NULL){
            sym_in_state[k] = tmp -> symbol; 
            tmp = tmp->next; 
            k++; 
        }
        //compare all symbol in state to check if it is the same
        // if it's the same it's NFA 
        for(int i=0;i<n_symbol;i++){
            for(int j=i+1;j<n_symbol;j++){
                if(sym_in_state[i] == sym_in_state[j]){
                    return false; 
                }
            }
        }
    }
    return true; 
}
// void convertNFAtoDFA(List **graph,int *final, int numFinal, char *symbol, int numSymbol){
//     // array of linked list Q
//     Queue *Q[25];
//     List *g[25];
//     int sq_sum[25];

//     for(int i=0; i<25; i++){
//         g[i] = NULL;
//     }
//     Queue *Qtmp, *Qtmp1;
//     int newFinal[25], newNumF = 0;

//     // take Q = 0 as a new state;
//     Q[0] = createEmptyQueue();
//     enqueue(Q[0],0);
//     Qtmp1 = createEmptyQueue();

//     // Check if the state q0 have epsilon transition
//     member *tmp = graph[0]->front;
//     while(tmp != NULL){
//         if(tmp->symbol== 'e'){
//             //to check epsilon closure in Queue
//             if(!checkIfExistQ(Q[0],tmp->next_state)){
//                 enqueue(Q[0],tmp->next_state);
//             }
//         }
//         tmp = tmp->next;
//     }
//     // initialize new q0 of DFA
//     int allS = 0;
//     int t=0,p=1;
//     Element *Tmp = Q[0]->front;
//     while(Tmp !=NULL){
//         allS += pow(2,Tmp->data);
//         Tmp = Tmp->next;
//     }
//     sq_sum[0] = allS;
//     int check = checkfinalstate(Q[0],final,numFinal);
//     if(check==1){
//         newFinal[newNumF] = 0;
//         newNumF++;
//     }

//     while(t < p){
//         for(int i=0; i<numSymbol;i++){
//             Qtmp = copyQ(Q[t]);
//             Qtmp1 = deleteQueue(Qtmp1);
//             int count = Qtmp->n;
//             for(int j=0; j<count; j++){
//                 Element *tmp1 = Qtmp->front;
//                 member *tmp = graph[tmp1->data]->front;
//                 while(tmp!=NULL){
//                     if(tmp->symbol == symbol[j]){
//                         if(!checkIfExistQ(Qtmp1,tmp->next_state)){
//                             enqueue(Qtmp1,tmp->next_state);
//                         }
//                     }
//                     tmp = tmp->next;
//                 }
//                 dequeue(Qtmp);
//             }
//             Qtmp = copyQ(Qtmp1);
//             count = Qtmp->n;
//             for(int j = 0; j < count; j++){
//                 Element *tmp1 = Qtmp->front;
//                 member *tmp = graph[tmp1->data]->front;
//                 while(tmp!=NULL){
//                     if(tmp->symbol =='e'){
//                         if(!checkIfExistQ(Qtmp1,tmp->next_state)){
//                             enqueue(Qtmp1,tmp->next_state);
//                         }
//                     }
//                     tmp = tmp -> next;
//                 }
//                 dequeue(Qtmp);
//             }
//             int allS=0;
//             Element *tmp = Qtmp1->front;
//             while(tmp!=NULL){
//                 allS += pow(2,tmp->data);
//                 tmp = tmp->next;
//             }
//             int index = checkIfExistSqSum(sq_sum,p,allS);
//             if(index==-1){
//                 sq_sum[p]=allS;
//                 Q[p] = copyQ(Qtmp1);
//                 addToBeginList(g[t],symbol[i],p);
//                 // find new final state;
//                 int f=checkfinalstate(Qtmp1,final,numFinal);
//                 if(f==1){
//                     newFinal[newNumF] = p;
//                     newNumF++;
//                 }
//                 p++;
//             }else{
//                 addToBeginList(g[t],symbol[i],index);
//             }
//         }
//         t++;
//     }
//     displayTable(g,p,symbol,numSymbol,newFinal,newNumF);

// }
void convertNfatoDfa(node** graph,int* final, int nf ,char* symbol,int n_symbol,int c){

    node* g[20];
    Queue * Q[20];
    int sq_sum[20];

    for(int i=0;i<20;i++){
        g[i]=NULL;
    }

    Queue* Qtemp,*Qtemp1;
    int newfinal[20],newnf=0;

    Q[0]=createEmptyQueue();  //initialize 0 as new state
    enqueue(Q[0],0);
    Qtemp1=createEmptyQueue();

    ////check if state 0 have epsilon transition

    node* temp = graph[0];         //temp for adjacency list of graph
    while ( temp != NULL){
        if ( temp->symbol == 'e'){
            if(!checkIfExistQ(Q[0],temp->next_state)){         //check if state by epsilon closure already exist in Q
                enqueue(Q[0],temp->next_state);
            }
        }
        temp=temp->next;
    }

    int s=0;
    Element* Temp = Q[0]->front;
    while(Temp!=NULL){
        //element* temp =Qtemp->front;
        s += pow(2,Temp->data) ;
        Temp=Temp->next;
    }

    sq_sum[0]=s;    //start state
    int t=0,p=1;            //current number of element in sq_sum

    int z=checkfinalstate(Q[0],final,nf);
    if(z==1){
        newfinal[newnf]=0;
        newnf++;
    }



    while( t < p){
        for(int j=0;j<n_symbol;j++){
            Qtemp=copyQ(Q[t]);
            Qtemp1=deleteQueue(Qtemp1);

            // transition through symbol
            int k=Qtemp->n;
            for(int i=0;i<k;i++){
                Element* temp1 =Qtemp->front;           //temp1 for front of the queue
                node* temp = graph[temp1->data];        //temp for adjacency list of graph
                while (temp != NULL){
                    if ( temp->symbol == symbol[j]){
                        if(!checkIfExistQ(Qtemp1,temp->next_state)){       //////////////////////////
                           enqueue(Qtemp1,temp->next_state);
                        }
                    }
                    temp=temp->next;
                }
                dequeue(Qtemp);
            }

            Qtemp=copyQ(Qtemp1);

            // epsilon-closure
            k=Qtemp->n;                                  //new number of node in queue
            for(int i=0;i<k;i++){
                Element* temp1 =Qtemp->front;            //temp1 for front of the queue
                node* temp = graph[temp1->data];        //temp for adjacency list of graph
                while (temp != NULL){
                    if ( temp->symbol == 'e'){
                        if(!checkIfExistQ(Qtemp1,temp->next_state)){         //check if state by epsilon closure already exist in Q
                           enqueue(Qtemp1,temp->next_state);
                        }
                    }
                    temp=temp->next;
                }
                dequeue(Qtemp);
            }

            int s=0;
            Element* temp = Qtemp1->front;
            while(temp!=NULL){
                s += pow(2,temp->data) ;
                temp=temp->next;
            }

            int index=checkIfExistSqSum(sq_sum,p,s);
            if(index==-1){              //new state is found
                sq_sum[p]=s;
                Q[p]=copyQ(Qtemp1);
                g[t]=push(g[t],symbol[j],p);

                // find new final state;
                int c=checkfinalstate(Qtemp1,final,nf);
                if(c==1){       //Qtemp1 contain final state
                   newfinal[newnf]=p;
                   newnf++;
                }

                p++;
            }
            else{
                g[t]=push(g[t],symbol[j],index);
            }
        }
        t++;
    }

    if(c==0){
        printf("\n\t\t\t\tTransition of the equivalent DFA:\n");

        displayTable(g,p,symbol,n_symbol,newfinal,newnf);
    }

    // if(c==1){
    //     minimizeDFA(g,p,newfinal,newnf,symbol,n_symbol);
    // }

}