#include<string.h>
struct member{    
    char symbol;
    int next_state;
    member *next; 
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
List *DeleteTranFromState(List **ArrayOfState, char symbol, int next_state, int state){
    member* tmp = ArrayOfState[state] -> front;
    member* prev = NULL;

    while(tmp!=NULL){
        if(tmp->symbol==symbol && tmp->next_state==next_state){
            if(prev == NULL){
                ArrayOfState[state] -> front = tmp -> next; 
                delete tmp; 
                break; 
            }else{
                if(tmp->next == NULL){
                    prev->next = NULL;
                }
                prev -> next = tmp -> next; 
                delete tmp; 
                break;
            }
        }else{
            prev = tmp; 
            tmp = tmp -> next;
        }
    }
    ArrayOfState[state]->n -= 1; 
    return ArrayOfState[state]; 
} 
List *DeleteSymbolFromState(List **ArrayOfState, char symbol, int state){
    member* tmp = ArrayOfState[state] -> front;
    member* prev = NULL;

    while(tmp!=NULL){
        if(tmp->symbol==symbol){
            if(prev == NULL){
                ArrayOfState[state] -> front = tmp -> next; 
                delete tmp; 
                break; 
            }else{
                if(tmp->next == NULL){
                    prev->next = NULL;
                }
                prev -> next = tmp -> next; 
                delete tmp;
                break; 
            }
        }
        prev = tmp; 
        tmp = tmp -> next;
    }
    if(tmp!=NULL){
        ArrayOfState[state] = DeleteSymbolFromState(ArrayOfState, symbol, state); 
    }
    ArrayOfState[state]->n -= 1; 
    return ArrayOfState[state]; 
}
Queue *copyQ(Queue *Q) {
    Element *tmp = Q->front;  //holds the current node
    Queue *QueueCopy = createEmptyQueue();

    //enqueue data into new Queue
    while(tmp != NULL) {
        enqueue(QueueCopy, tmp->data);
        tmp = tmp->next;
    }
    return QueueCopy;
}
Queue *deleteQueue(Queue *Q){
    Element *tmp = Q -> front;
    while(tmp != NULL){
        tmp = tmp->next;
        Q->n -= 1;
        delete Q->front; 
        Q->front=tmp;
    }
    return Q;
}
int checkIfExistSqSum(int * sumOfSquare, int p, int data){
    for(int i=0;i<p;i++){
        if(sumOfSquare[i]==data){
            return i;
            break;
        }
    }
    return -1;          //not exist (create new state)
}
void displayTable(List **ArrayOfState,int n ,char* symbol,int n_symbol,int* final, int nf){
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
            member* temp = ArrayOfState[i]->front;
            member* temp1 = ArrayOfState[i]->front;
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
int hasEpsilonTran(List **ArrayOfState, int currentState){
    member *tmp; 
    tmp = ArrayOfState[currentState] -> front; 

    while(tmp!= NULL){
        if(tmp->symbol == 'e'){
            return tmp->next_state; 
        }
        tmp = tmp -> next; 
    }
    return -1;
}
void testString(List* ArrayOfState[], Queue *Q , string str, int n, int final[], int n_final ,int index){
    
    if(index == str.length()){
        if(isFinal(Q, n_final, final)){
            cout << "\nString accepted"; 
            //displayQueue(Q);
        }else{
            cout << "\nString not accepted"; 
            //displayQueue(Q);
        }
    }else{
        int k = Q->n; 
        for(int i=0;i<k;i++){
            Element* tmp1 = Q -> front;           
            member* tmp = ArrayOfState[tmp1->data] -> front;        
            while(tmp != NULL){
                if(str[index] == tmp -> symbol){
                    enqueue(Q, tmp -> next_state);
                    //cout << "After enqueue: "; displayQueue(Q); 
                }
                tmp = tmp -> next;
                int k = hasEpsilonTran(ArrayOfState, tmp1->data); 
                enqueue(Q, k);
                //cout << "After enqueue: "; displayQueue(Q); 
            }
            dequeue(Q);
            //cout << "Afer dequeue: "; displayQueue(Q);
            
        }
        
        testString(ArrayOfState, Q, str, n, final , n_final, index+1);
    }   
}
// to test that it is DFA or NFA:
// check e transition
// check number of transition in each state if it's different from number of symbol then it's NFA
// check each symbol in state if there are the same symbol in two transition then it's NFA
bool isDFA(List **ArrayOfState, int n, char *symbol, int n_symbol){
    for(int i=0;i<n;i++){    // loop access to each state
        int count = 0;       // check if each states have equal transition and symbol
        member * tmp = ArrayOfState[i] -> front; 
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
        tmp = ArrayOfState[i] -> front; 
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

void convertNFAtoDFA(List **ArrayOfState ,int *final, int numFinal, char *symbol, int numSymbol){
    Queue *Q[25];
    List *NewArrayOfState[25];
    int sq_sum[25];
    string Str[25]; 

    //Book memory allocate for list
    for(int i=0; i<25; i++){
        NewArrayOfState[i] = createEmptyList();
    }
    Queue *Qtmp, *Qtmp1;
    int newFinal[25], newNumF = 0;

    // take Q = 0 as a new state;
    Q[0] = createEmptyQueue();
    enqueue(Q[0],0);
    Qtmp1 = createEmptyQueue();

    int next_state = hasEpsilonTran(ArrayOfState, 0); 
    if(next_state!=-1){
        enqueue(Q[0], next_state); 
    }
    // initialize new q0 of DFA
    int S = 0;
    int CurrentState=0, NewState=1;    // initialize current element in the sum square

    Element *Tmp = Q[0]->front;
    while(Tmp !=NULL){
        S += pow(2,Tmp->data);
        Tmp = Tmp->next;
    }// Start state;
    sq_sum[0] = S;

    //Str[0] = GenerateNewString(Q[0]); 
    // To check if q0 is the final state.
    if(isFinal(Q[0], numFinal, final)){
        newFinal[newNumF] = 0;
        newNumF++;
    }
    // ---------- Loop for any transition in any state ----------;
    // ---------- The process below are similar q0 as well -------;
    while(CurrentState < NewState){
        // Loop current symbol in FA
        for(int i=0; i<numSymbol;i++){
            Qtmp = copyQ(Q[CurrentState]);
            Qtmp1 = deleteQueue(Qtmp1);
            int count = Qtmp->n;
            // The transition through symbol
            for(int j=0; j<count; j++){
                // tmp1 for data in queue
                // tmp for test current data in graph
                Element *tmp1 = Qtmp->front;
                member *tmp = ArrayOfState[tmp1->data]->front;
                 
                while(tmp!=NULL){
                    if(tmp->symbol == symbol[i]){
                        if(isNotExistInQueue(Qtmp1,tmp->next_state)){
                            enqueue(Qtmp1,tmp->next_state);
                            // displayQueue(Qtmp1);
                        }
                    }
                    tmp = tmp->next;
                }
                dequeue(Qtmp);
            }
            Qtmp = copyQ(Qtmp1);
            // Apply epsilon closure for the epsilon transition.
            count = Qtmp->n;
            for(int k = 0; k < count; k++){
                Element *tmp1 = Qtmp->front;
                member *tmp = ArrayOfState[tmp1->data]->front;
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
            int S=0;
            Element *tmp4 = Qtmp1->front;
            while(tmp4!=NULL){
                S += pow(2,tmp4->data);
                tmp4 = tmp4->next;
            }
            int index = checkIfExistSqSum(sq_sum,NewState,S);
            if(index==-1){// if not;
                sq_sum[NewState] = S;
                Q[NewState] = copyQ(Qtmp1);
                addToBeginList(NewArrayOfState[CurrentState], symbol[i], NewState);
                // Find the current final in NFA;
                if(isFinal(Qtmp1,numFinal,final)){// If found in transition
                    // take it as the current DFA 
                    newFinal[newNumF] = NewState;
                    newNumF++;
                }
                NewState++;
            }else{
                // if sum square
                // cout << "Index: "<<index; 
                addToBeginList(NewArrayOfState[CurrentState], symbol[i], index);
            }
        }
        CurrentState++;
    }
    cout<<endl<<"\t\t\t\tAn equivalent DFA!"<<endl;
    displayTable(NewArrayOfState, NewState, symbol, numSymbol, newFinal, newNumF);
}