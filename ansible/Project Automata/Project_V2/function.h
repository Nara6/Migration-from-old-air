#include<string.h>
#include<stdio.h>
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
void minimizeDFA(List** ArrayOfState, int n_state, int* final, int nf ,char* symbol, int n_symbol);
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
int checkIfExistSqSum(int * sqsum,int p, int data){
    for(int i=0;i<p;i++){
        if(sqsum[i]==data){
            return i;
            break;
        }
    }
    return -1;          //not exist
}
// void testString(List** ArrayOfState, Queue *Q, string str, int* final, int n_final ,int index){

//     if(index == str.length()){
//         if(isFinal(Q, n_final, final)){
//             cout << "\nString accepted"; 
//         }else{
//             cout << "\nString not accepted"; 
//         }
//     }
//     enqueue(Q, 0); 
//     int k = Q->n;
//     for(int i=0;i<k;i++){
//         Element* temp1 = Q -> front;           
//         member* temp = ArrayOfState[temp1->data] -> front;        
//         while (temp != NULL){
//             if (str[index] == temp->symbol){
//                 enqueue(Q,temp->next_state);
//             }
//             temp=temp->next;
//         }
//         dequeue(Q);

//     }
//     testString(ArrayOfState, Q, str, final ,n_final, index+1);
// }
void displayTable(List **graph,int n ,char* symbol,int n_symbol,int* final, int nf){
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
            member* temp = graph[i]->front;
            member* temp1 = graph[i]->front;
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
void testString(List** ArrayOfState, Queue *Q , string str, int* final, int n_final ,int index){
    
    if(index == str.length()){
        if(isFinal(Q, n_final, final)){
            cout << "\nString accepted"; 
            displayQueue(Q);
        }else{
            cout << "\nString not accepted"; 
            displayQueue(Q);
        }
    }else{
        int k = Q->n; 
        for(int i=0;i<k;i++){
            Element* tmp1 = Q -> front;           
            member* tmp = ArrayOfState[tmp1->data] -> front;        
            while(tmp != NULL){
                if(str[index] == tmp -> symbol){
                    enqueue(Q, tmp -> next_state);
                    cout << "Afer enqueue: "; displayQueue(Q); 
                }
                
                tmp = tmp -> next;
            }
            dequeue(Q);
            cout << "Afer dequeue: "; displayQueue(Q);
            
        }
        
        testString(ArrayOfState, Q, str, final , n_final, index+1);
    }   
}
// bool checkIfMarked(int a , int b, int k,int mat[k][k]){
//     if(a>=b){
//         if( mat[a][b]==1 ){
//             return true;
//         }
//         else if(mat[a][b]==0){
//             return false;
//         }
//     }
//     else if(a<b){
//         if( mat[b][a]==1 ){
//             return true;
//         }
//         else if(mat[b][a]==0){
//             return false;
//         }
//     }
// }

// bool matrixChanged( int k, int mat1[k][k], int mat2[k][k] ){
//     for(int i=0;i<k-1;i++){
//         for(int j=i+1;j<k;j++){
//             if( mat1[j][i] != mat2[j][i]){
//                 return true;
//                 break;
//             }
//         }
//     }
//     return false;
// }
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
// To convert NFA to DFA
// Initialize Q' = P(Q) where P(Q) is a subset of Q

void convertNFAtoDFA(List **ArrayOfState ,int *final, int numFinal, char *symbol, int numSymbol){
    // Create array of linked list Queue and ArrayOfState
    Queue *Q[25];
    List *Arrstate[25];
    int sq_sum[25];
    Queue *Qtmp, *Qtmp1;
    int newFinal[25], newNumF = 0;

    // initialize new q0 of DFA
    int allS = 0;
    int t=0,pState=1;    // initialize current element in the sum square

    //Book memory allocate for list
    for(int i=0; i<25; i++){
        Arrstate[i] = createEmptyList();
    }

    // take Q = 0 as a new state;
    Q[0] = createEmptyQueue();
    enqueue(Q[0],0);
    Qtmp1 = createEmptyQueue();

    // Check if the state q0 have epsilon transition
    member *tmp = ArrayOfState[0]->front;
    while(tmp != NULL){
        if(tmp->symbol== 'e'){
            //to check epsilon closure in Queue
            // if not insert to queue
            if(isNotExistInQueue(Q[0],tmp->next_state)){
                enqueue(Q[0],tmp->next_state);
                // displayQueue(Q);
            }
        }
        tmp = tmp->next;
    }

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
    while(t < pState){
        // Loop current symbol in FA
        for(int i=0; i<numSymbol;i++){
            Qtmp = copyQ(Q[t]);
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
            int allS=0;
            Element *tmp = Qtmp1->front;
            while(tmp!=NULL){
                allS += pow(2,tmp->data);
                tmp = tmp->next;
            }
            // Check if the state having the sum square
            int index = checkIfExistSqSum(sq_sum,pState,allS);
            if(index==-1){// if not;
                sq_sum[pState]=allS;
                Q[pState] = copyQ(Qtmp1);
                addToBeginList(Arrstate[t], symbol[i], pState);
                // Find the current final in NFA;
                if(isFinal(Qtmp1,numFinal,final)){// If found in transition
                    // take it as the current DFA 
                    newFinal[newNumF] = pState;
                    newNumF++;
                }
                pState++;
            }else{
                // if sum square
                addToBeginList(Arrstate[t], symbol[i], index);
            }
        }
        t++;
    }
    cout<<endl<<"\t\t\t\tAn equivalent DFA!"<<endl;
    displayTable(Arrstate,pState,symbol,numSymbol,newFinal,newNumF);
    if(isDFA(Arrstate, pState, symbol, numSymbol)){
            cout << "\nIt is DFA."; 
        }else{
            cout << "\nIt is NFA."; 
        }
    minimizeDFA(Arrstate,pState,newFinal,newNumF,symbol,numSymbol);

}
bool checkIfMarked(int a, int b, int k, int **mat){
    if(a>=b){
        if( mat[a][b]==1 ){
            return true;
        }
        else if(mat[a][b]==0){
            return false;
        }
    }
    else if(a<b){
        if( mat[b][a]==1 ){
            return true;
        }
        else if(mat[b][a]==0){
            return false;
        }
    }
    return false;
}

bool matrixChanged( int k, int** mat1, int** mat2){

    for(int i=0;i<k-1;i++){
        for(int j=i+1;j<k;j++){
            if( mat1[j][i] != mat2[j][i]){
                return true;
                break;
            }
        }
    }
    return false;
}
//function for minimize a DFA
void minimizeDFA(List** ArrayOfState, int n_state, int* final, int nf ,char* symbol, int n_symbol){
    //copy array of linked list
    List* NewArrayOfState[n_state];
    for(int i=0;i<n_state;i++){
        NewArrayOfState[i] = ArrayOfState[i];
    }
    Queue *Q1 = createEmptyQueue();
    Queue *Q2 = createEmptyQueue();

    enqueue(Q1,0);  // create start state
    enqueue(Q2,0);
    // step one: we need to find accessible states and delete non accessible states
    //find all accessible state:
    while(Q2->n!=0){
        Element *tmp = Q2 -> front;
        member* tmp1 = NewArrayOfState[tmp->data] -> front;  //temp for adjacency list of graph
        while (tmp1 != NULL){
            if(isNotExistInQueue(Q1,tmp1->next_state)){
                enqueue(Q1,tmp1->next_state);   // save all next state that means the state is accessible
                enqueue(Q2,tmp1->next_state);
            }
            tmp1=tmp1->next;
        }
        dequeue(Q2);
    }
    //check non accessible state
    int as[n_state];        //array for store accessible states
    int nas[n_state];       //array for store non accessible states
    int n_nas=0;            //number of non accessible state
    int n_as=0;             //number of accessible state

    for(int i=0; i<n_state; i++){
        if(isNotExistInQueue(Q1,i)){
            nas[n_nas] = i;
            n_nas++;
        }
        else{
            as[n_as]=i;
            n_as++;
        }
    }
    //displayQueue(Q1);
    //delete non accessible state
    for (int i=0;i<n_nas;i++){          //delete graph of non accessible state
        NewArrayOfState[nas[i]]= createEmptyList();
    }
    // create 2D array to do first second third iteration
    int **mat = new int*[n_as];
    for(int i=0;i<n_as;i++){
        mat[i] = new int[n_as];
    }
    int **matcopy = new int*[n_as];
    for(int i=0;i<n_as;i++){
        matcopy[i] = new int[n_as];
    }

    //initail zero to lower triangle of matrix
    for(int i=0;i<n_as;i++){                // where i:column    j:row
        for(int j=0;j<n_as;j++){
            mat[j][i]=0;
            matcopy[j][i]=0;
        }
    }
    // for(int i=0;i<n_as;i++){
    //     for(int j=0;j<n_as;j++){
    //         cout << mat[i][j]<<" ";
    //     }
    //     cout<<"\n";
    // }
    //displayQueue(Q1);
    //first iteration, mark all pairs that contain final state, but not include pair of 2 final states
    for(int i=0;i<n_as-1;i++){
        for(int j=i+1;j<n_as;j++){
            for(int k=0;k<nf;k++){
                if( as[i]==final[k]){
                    mat[j][i]=1;       // mark it if it contains final state
                }
            }
        }
    }

    for(int i=0;i<n_as-1;i++){
        for(int j=i+1;j<n_as;j++){
            for(int k=0;k<nf;k++){
                if( as[j]==final[k]){
                    if(mat[j][i]==0){
                       mat[j][i]=1;
                    }
                    else if(mat[j][i]==1){  //exclude pair of 2 final states;
                       mat[j][i]=0;
                    }
                }
            }
        }
    }
    //displayQueue(Q1);
    while (matrixChanged(n_as, mat , matcopy)){
     //copy matrix to compare

        for(int i=0;i<n_as-1;i++){
            for(int j=i+1;j<n_as;j++){
                matcopy[j][i]=mat[j][i];
            }
        }
        // for(int i=0;i<n_as;i++){
        //     for(int j=0;j<n_as;j++){
        //         cout << matcopy[i][j]<<" ";
        //     }
        //     cout<<"\n";
        // }
        int x1,x2,index_x1,index_x2;
        for(int i=0;i<n_as-1;i++){
            for(int j=i+1;j<n_as;j++){
                if(mat[j][i]==0){           //for pair that is not marked yet
                    for(int t=0;t<n_symbol;t++){            //note that: each pair of state is ( as[i],as[j]  )  i,j index of matrix
                        member* temp = NewArrayOfState[as[i]] -> front;          //find as[i] transition to what?
                        while (temp != NULL){
                            if ( symbol[t] == temp->symbol){
                                x1=temp->next_state;
                                break;
                            }
                            temp=temp->next;
                        }
                        member* temp1 = NewArrayOfState[as[j]] -> front;        //find as[j] transition to what?
                        while (temp1 != NULL){
                            if (symbol[t] == temp1->symbol){
                                x2=temp1->next_state;
                                break;
                            }
                            temp1=temp1->next;
                        }
                        //get index
                        for(int r=0;r<n_as;r++){
                            if(as[r]==x1){
                                index_x1=r;
                                break;
                            }
                        }
                        for(int r=0;r<n_as;r++){
                            if(as[r]==x2){
                                index_x2=r;
                                break;
                            }
                        }

                        //check if the pair of after-transition of ( as[i],as[j] ) is already marked?
                        if(checkIfMarked(index_x1, index_x2 ,n_as, mat)){
                            mat[j][i]=1;
                            break;
                        }
                    }
                }
            }
        }
    }
    // displayQueue(Q1);

    int deletestate[n_as];
    int n_delstate=0;
    for(int i=0;i<n_as-1;i++){
        for(int j=i+1;j<n_as;j++){
            if(mat[j][i]==0){
                // display
                for(int i=0;i<n_as;i++){
                    for(int j=0;j<n_as;j++){
                        // cout << matcopy[i][j]<<" ";
                    }
                    // cout<<"\n";
                }
                // display
                deletestate[n_delstate]=as[j];
                n_delstate++;

                //delete one of the equivalent state : delete its graph
                // here we delete big-number state which is as[j]
                NewArrayOfState[as[j]]= createEmptyList();

                // change all as[j] to as[i]
                for(int k=0;k<n_as;k++){
                        member* temp = NewArrayOfState[as[k]] -> front;
                        while (temp != NULL){
                            if ( as[j] == temp->next_state){
                                temp->next_state = as[i];
                            }
                            temp=temp->next;
                        }
                }

            }
        }
    }

    //error
    int n_newstate=0; //number of accessible state - number of deleted state
    int newstate[n_as];
    int n_newfinal=0;
    int newfinal[nf];

    //new state:
    for(int k=0;k<n_as;k++){
        int r=0;
        for(int j=0;j<n_delstate;j++){
            if( as[k] == deletestate[j] ){
                r=1;        //meaning it is the deleted state
                break;
            }

        }
        if(r==0){
            newstate[n_newstate]=as[k];
            n_newstate++;
        }
    }

    //find new final state after delete equivalent state;
    for(int k=0;k<nf;k++){
        int re=0;
        for(int j=0;j<n_delstate;j++){
            if( final[k] == deletestate[j] ){
                re=1;        //meaning it is the deleted state
                break;
            }
        }
        if(re==0){
            newfinal[n_newfinal]=final[k];
            n_newfinal++;
        }
    }

    //change to new states to order index (0,1,2,3,....)
    for(int i=0;i<n_as;i++){
            member* temp = NewArrayOfState[i] -> front;
            while (temp != NULL){
                for(int k=0;k<n_newstate;k++){
                    if ( newstate[k] == temp->next_state){
                        temp->next_state = k;
                        break;
                    }
                }
                temp=temp->next;
            }
    }


    ////change index of new final state
    for (int i=0;i<n_newfinal;i++){
        for(int j=0;j<n_newstate;j++){
            if(newfinal[i]==newstate[j]){
                newfinal[i]=j;
                break;
            }
        }
    }


    ////
    List* NewArrayOfState1[n_newstate];
    for(int k=0;k<n_newstate;k++){
        NewArrayOfState1[k] = createEmptyList();
    }
    // error here
    for(int k=0;k<n_newstate;k++){
        NewArrayOfState1[k]=NewArrayOfState[newstate[k]];
    }
    cout << "\n\n\t\t\t\tTransition of the minimize DFA:\n";

    // for(int i=0;i<n_newstate;i++){
    //     member *tmpp = NewArrayOfState1[i] -> front;
    //     while(tmpp!=NULL){
    //         cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
    //         tmpp=tmpp->next;
    //     }
    //     cout << "\n\n";

    // }
    displayTable(NewArrayOfState1, n_newstate, symbol, n_symbol, newfinal, n_newfinal);
    // for(int i=0;i<n_newstate;i++){
    //     ArrayOfState[i] = NewArrayOfState1[i];
    // }
    // n_newfinal = n_NewFinal;
    // n_newState = n_newstate;
    // for(int i=0;i<n_newfinal;i++){
    //     newfinal[i] = NewFinal[i];
    // }
}