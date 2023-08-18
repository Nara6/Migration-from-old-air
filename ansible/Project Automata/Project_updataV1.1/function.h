
struct member{    
    char symbol;
    int next_state;
    member *next; 
}; 

// A adjency list to store a NFA
member *push(member* first , char edgetype , int data){
    if (first==NULL){
        member *new_node = new member;
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
    Element *temp;
    temp=q->front;

    while(temp != NULL)
    {
        temp = temp->next;
        q->n --;
        free(q->front);
        q->front=temp;
    }
    return q;
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
// List *DeleteFromList(List **ArrayOfState,int n, char symbol, int next_state, int state){
//     ArrayOfState[state]; 
//     member * tmp; 
//     int counter=0; 
//     tmp = ArrayOfState[state] -> front; 
//     while(tmp != NULL){
//         counter ++;
//         if(tmp -> symbol == symbol && tmp ->next_state == next_state){
//             delete tmp; 
//             ArrayOfState[state] -> n -= 1; 
//             break; 
//         }
//     }
//     tmp = ArrayOfState[state] -> front; 
//     for(int i=0;i<counter-1;i++){
//         tmp = tmp -> next; 
//     }
//     member * tmp1;
//     tmp1 = ArrayOfState[state] -> front; 
//     for(int i=0;i<counter+1;i++){
//         tmp1 = tmp1 -> next; 
//     }
//     tmp -> next = tmp1; 
    
//     return ArrayOfState[state]; 
// }
void testString(member **ArrayOfState, Queue *Q, string str, int n_final, int* final){
    enqueue(Q, 0);
    for(int i = 0; i<str.length(); i++){
        member *tmp; 
        Element *tmp1; 
        int count = 0;
        for(int j=0;j<Q->n;j++){ 
            tmp1 = Q -> front;
            tmp = ArrayOfState[tmp1->data];
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
        cout << "String accepted"; 
    }else{
        cout << "String not accepted"; 
    }
     
    displayQueue(Q); 
}
// to test that it is DFA or NFA:
// check e transition
// check number of transition in each state if it's different from number of symbol then it's NFA
// check each symbol in state if there are the same symbol in two transition then it's NFA
bool isDFA(member **ArrayOfState, int n, char *symbol, int n_symbol){
    for(int i=0;i<n;i++){    // loop access to each state
        int count = 0;       // check if each states have equal transition and symbol
        member * tmp = ArrayOfState[i]; 
        while(tmp != NULL){
            if(tmp -> symbol == 'e'){
                return false; 
            }
            tmp = tmp -> next; 
            count += 1; 
        }
        if(count != n_symbol){
            return false; 
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
int checkIfExistSqSum(int * sqsum,int p, int data){
    for(int i=0;i<p;i++){
        if(sqsum[i]==data){
            return i;
            break;
        }
    }
    return -1;          //not exist
}
void displayTable(member **graph,int n ,char* symbol,int n_symbol,int* final, int nf){
    cout<<endl;
    cout<<("\t\t\t\t\t|");
    for(int i=0; i<n_symbol+1; i++){
        cout<<"\t"<<symbol[i]<<"\t|";
    }
    cout<<("\n\t\t\t\t========");
    for(int i=0; i<n_symbol+1; i++){
        cout<<("================");
    }
    cout<<endl;
    for(int i=0;i<n;i++){
        cout<<("\t\t\t\t  ");
        for(int k=0; k<nf; k++){
            if(final[k]==i) cout<<("*");
        }
        if(i==0) cout<<("->");
        cout<<"q"<<i<<"\t|\t";
        for(int j=0; j<n_symbol+1; j++){
            member* temp = graph[i];
            member* temp1 = graph[i];
            int count=0;
            int count1=0;

            while(temp!=NULL){
                if(temp->symbol==symbol[j]){
                    // printf("q%d ",temp->next_state);
                    cout<<"q"<<temp->next_state;
                    if(temp->symbol=='e') count1++;
                }else if(temp->symbol!='e'&&j==n_symbol){
                    count1++;
                    if(count1==1) cout<<("-");
                    else         cout<<("");
                }
                temp=temp->next;
            }
            cout<<("\t|\t");
        }
        cout<<("\n\t\t\t\t========");
        for(int i=0; i<n_symbol+1; i++){
            cout<<("================");
        }
        cout<<endl;
    }
}

// To convert NFA to DFA
// Initialize Q' = P(Q) where P(Q) is a subset of Q

void convertNFAtoDFA(member **graph,int *final, int numFinal, char *symbol, int numSymbol){
    // array of graph list Q
    Queue *Q[25];
    member *g[25];
    int sq_sum[25];

    //Book memory allocate for list
    for(int i=0; i<25; i++){
        g[i] = NULL;
    }
    Queue *Qtmp, *Qtmp1;
    int newFinal[25], newNumF = 0;

    // take Q = 0 as a new state;
    Q[0] = createEmptyQueue();
    enqueue(Q[0],0);
    Qtmp1 = createEmptyQueue();

    // Check if the state q0 have epsilon transition
    member *tmp = graph[0];
    while(tmp != NULL){
        if(tmp->symbol== 'e'){
            //to check epsilon closure in Queue
            // if not insert to queue
            if(isNotExistInQueue(Q[0],tmp->next_state)){
                enqueue(Q[0],tmp->next_state);
            }
        }
        tmp = tmp->next;
    }
    // initialize new q0 of DFA
    int allS = 0;
    int t=0,p=1;    // initialize current element in the sum square

    Element *Tmp = Q[0]->front;
    while(Tmp !=NULL){
        allS += pow(2,Tmp->data);
        Tmp = Tmp->next;
    }// Start state;
    sq_sum[0] = allS;
    // To check if q0 is the final state.
    if(isFinal(Q[0], numFinal, final)){
        newFinal[newNumF] = 0;
        newNumF++;
    }
    // ---------- Loop for any transition in any state ----------;
    // ---------- The process below are similar q0 as well -------;
    while(t < p){
        // Loop current symbol in FA
        for(int i=0; i<numSymbol;i++){
            // Qtmp as new state of all current transition and symbol;
            Qtmp = copyQ(Q[t]);
            Qtmp1 = deleteQueue(Qtmp1);
            int count = Qtmp->n;
            // The transition through symbol
            for(int j=0; j<count; j++){
                // tmp1 for data in queue
                // tmp for test current data in graph
                Element *tmp1 = Qtmp->front;
                member *tmp = graph[tmp1->data];
                while(tmp!=NULL){
                    if(tmp->symbol == symbol[i]){
                        if(isNotExistInQueue(Qtmp1,tmp->next_state)){
                            enqueue(Qtmp1,tmp->next_state);
                        }
                    }
                    tmp = tmp->next;
                }
                dequeue(Qtmp);
            }
            // Copy to Q' of the current data (NFA)
            Qtmp = copyQ(Qtmp1);
            // Apply epsilon closure for the epsilon transition.
            count = Qtmp->n;
            for(int j = 0; j < count; j++){
                Element *tmp1 = Qtmp->front;
                member *tmp = graph[tmp1->data];
                while(tmp!=NULL){
                    if(tmp->symbol =='e'){
                        if(isNotExistInQueue(Qtmp1,tmp->next_state)){
                            enqueue(Qtmp1,tmp->next_state);
                        }
                    }
                    tmp = tmp -> next;
                }
                dequeue(Qtmp);
            }
            // ----------- Process the same as q0 ----------------;
            // Initialize the transition of any state by using sum square;
            int allS=0;
            Element *tmp = Qtmp1->front;
            while(tmp!=NULL){
                allS += pow(2,tmp->data);
                tmp = tmp->next;
            }
            // Check if the state having the sum square
            int index = checkIfExistSqSum(sq_sum,p,allS);
            if(index==-1){// if not;
                sq_sum[p]=allS;
                Q[p] = copyQ(Qtmp1);
                g[t] = push(g[t],symbol[i],p);
                // Find the current final in NFA;
                if(isFinal(Qtmp1,numFinal,final)){// If found in transition
                    // take it as the current DFA 
                    newFinal[newNumF] = p;
                    newNumF++;
                }
                p++;
            }else{
                // if sum square
                g[t] = push(g[t],symbol[i],index);
            }
        }
        t++;
    }
    cout<<endl<<"\t\t\t\tAn equivalent DFA!"<<endl;
    displayTable(g,p,symbol,numSymbol,newFinal,newNumF);

}
