#include<iostream>
#include<string.h>
#include<math.h>
using namespace std; 

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
                    cout << "After enqueue: "; displayQueue(Q); 
                }
                tmp = tmp -> next;
                int a = hasEpsilonTran(ArrayOfState, tmp1->data); 
                if(a!=-1){
                    enqueue(Q, a);
                }
                cout << "After enqueue: "; displayQueue(Q); 
            }
            dequeue(Q);
            cout << "Afer dequeue: "; displayQueue(Q);
            
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
//function for minimizationminimizeDFA
void minimizeDFA(List** ArrayOfState, int n_state, int* final, int nf ,char* symbol, int n_symbol){
    ////copy graph
    List* NewArrayOfState[n_state];
    for(int i=0;i<n_state;i++){
        NewArrayOfState[i] = ArrayOfState[i]; 
    }
    Queue *Q1 = createEmptyQueue(); 
    Queue *Q2 = createEmptyQueue(); 

    enqueue(Q1,0);
    enqueue(Q2,0);

    ////find all accessible state:
    while(Q2->n!=0){
        Element *tmp = Q2 -> front; 
        member* tmp1 = NewArrayOfState[tmp->data] -> front;//temp for adjacency list of graph
        while (tmp1 != NULL){
            if(isNotExistInQueue(Q1,tmp1->next_state)){       //////////////////////////
                enqueue(Q1,tmp1->next_state);
                enqueue(Q2,tmp1->next_state);
            }
            tmp1=tmp1->next;
        }
        dequeue(Q2);
    }
    //check non accessible state
    int as[n_state];       //array for store accessible states
    int nas[n_state];    //array for store non accessible states
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

    int **mat = new int*[n_as];
    for(int i=0;i<n_as;i++){
        mat[i] = new int[n_as]; 
    }
    int **matcopy = new int*[n_as];
    for(int i=0;i<n_as;i++){
        matcopy[i] = new int[n_as]; 
    }
    //initail zero to lower triangle of matrix
    for(int i=0;i<n_as;i++){                //i : column    j:row
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
                    mat[j][i]=1;
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
    displayQueue(Q1); 
    // error

    int deletestate[n_as];
    int n_delstate=0;
    for(int i=0;i<n_as-1;i++){
        for(int j=i+1;j<n_as;j++){
            if(mat[j][i]==0){
                // display
                for(int i=0;i<n_as;i++){
                    for(int j=0;j<n_as;j++){
                        cout << matcopy[i][j]<<" "; 
                    }
                    cout<<"\n"; 
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
    printf("\n\n\t\t\t\tTransition of the minimize DFA:\n");
    
    for(int i=0;i<n_newstate;i++){
        member *tmpp = NewArrayOfState1[i] -> front; 
        while(tmpp!=NULL){
            cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
            tmpp=tmpp->next;
        }
        cout << "\n\n"; 
            
    }
    displayTable(NewArrayOfState1,n_newstate,symbol,n_symbol,newfinal,n_newfinal);
}


int main(){
    int n_symbol; 
    int n;        
    int n_tran;
    int n_final = 1; 
    int final[n_final];  
    int option; 
    List *ArrayOfState[n];
    n_symbol = 1;
    char symbol[n_symbol];

    char symbol_of_each_state[30];
    cout <<"1. Create FA"<<endl; 
    cout <<"2. Edit FA"<<endl; 
    cout <<"3. Exit"<<endl; 
    cout <<"Input option: "; cin >> option; 
    if(option == 1){
        cout << "Input number of states: "; cin >> n;
        for(int i = 0; i<n; i++){   
            ArrayOfState[i] = createEmptyList(); 
        }
        cout << "Input number of symbol: "; cin >> n_symbol; 
        
        //symbol[n_symbol];
        for(int i=0; i<n_symbol; i++){
            cout << "Symbol #"<<i+1<<": "; cin >> symbol[i];
        }
        
        // n_symbol = 2;
        // symbol[n_symbol+1];
        // symbol[0] = 'a';
        // symbol[1] = 'b';
        symbol[n_symbol] = 'e';
        for(int i=0; i<n; i++){
            cout << "<<State q"<<i<<">>"; 
            cout << "\n---Input transition---\n";
            cout << "Input number of transition: "; cin >> n_tran;
            int next_state;
            char symbol1;
            for(int j = 1; j <= n_tran; j++){
                cout << "---Transition #"<<j<<"---"<<endl; 
                cout << "Symbol: "; cin >> symbol1;
                cout << "Next State: "; cin >> next_state;
               addToBeginList(ArrayOfState[i], symbol1, next_state); 
            }
            member* temp = ArrayOfState[i] -> front;
            while(temp!=NULL){
                cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
                temp=temp->next;
            }
        }
        //symbol[n_symbol] = 'e'; 
        //state 0 

        // addToBeginList(ArrayOfState[0], 'a', 1);
        // addToBeginList(ArrayOfState[0], 'b', 1);

        // addToBeginList(ArrayOfState[1], 'a', 2);
        // addToBeginList(ArrayOfState[1], 'b', 2);

        // addToBeginList(ArrayOfState[2], 'a', 3);
        // addToBeginList(ArrayOfState[2], 'b', 3);

        // addToBeginList(ArrayOfState[3], 'a', 2);
        // addToBeginList(ArrayOfState[3], 'b', 2);

        // addToBeginList(ArrayOfState[4], 'a', 3);
        // addToBeginList(ArrayOfState[4], 'b', 2);


        for(int i=0;i<n;i++){
            member *tmp; 
            tmp = ArrayOfState[i]-> front; 
            while(tmp!=NULL){
                cout << "Symbol: " << tmp -> symbol << "   ->   " << tmp->next_state <<endl; 
                tmp=tmp->next;
            }
        }
 
        int n_final = 1;
        int final[n_final];
        cout << "Input number of final state: "; cin >> n_final;    
        for(int i=0; i<n_final; i++){
            cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
        } 
        // n_final = 2;
        // final[0] = 1;
        // final[1] = 3;
        int option2;
        displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
        while(option2 != 5){
            cout << "\n1. Test String ";
            cout << "\n2. Test FA"; 
            cout << "\n3. Convert NFA to DFA";
            cout << "\n4. Minimize FA";
            cout << "\n5. Exit";
            cout << "\nInput number: "; cin >> option2;
            if(option2 == 1){
                string str; 
                Queue *Q; 
                Q = createEmptyQueue(); 
                cout << "\nTest String: "; cin >> str;
                int accept; 
                enqueue(Q, 0); 
                testString(ArrayOfState, Q, str, n, final, n_final, 0);
            }else if(option2 == 2){
                if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                    cout << "\nIt is DFA."; 
                }else{
                    cout << "\nIt is NFA.";
                }
            }else if(option2 == 3){
                if(!isDFA(ArrayOfState, n, symbol, n_symbol)){
                    convertNFAtoDFA(ArrayOfState, final, n_final, symbol, n_symbol); 
                }else{
                    cout << "It is already a DFA!!!";
                }
            }else if(option2 == 4){
                // if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                    minimizeDFA(ArrayOfState, n, final, n_final, symbol, n_symbol); 
                // }else{
                //     cout << "It is not a DFA!!!";
                // }
            }else if(option2 == 5){
                cout << "Program exited!!!";
            }
        }
        //displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final); 
    // displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final); 
    }else if(option == 2){     // Edit
        // funtion: add symbol, add transition, add state, remove transition, remove state
        // sub menu
        int option1;
        cout << "\nTo add symbol, input 1"<<endl; 
        cout << "To add transition, input 2"<<endl; 
        cout << "To add state, input 3"<<endl; 
        cout << "To remove transition, input 4" <<endl; 
        cout << "To remove symbol, input 5"<<endl; 
        cout << "To remove state, input 6"<<endl; 
        cout <<"Input: "; cin >> option1; 
        if(option1 == 1){
            cout <<"---Add symbol---"<<endl; 
            cout << "Input symbol: "; cin >> symbol[n_symbol]; 
            n_symbol = n_symbol + 1;
        }else if(option1 == 2){
            int state;
            char symbol;
            int next_state1;
            cout <<"---Add new transition---"<<endl; 
            cout <<"Input State: "; cin >> state; 
            cout <<"Symbol: "; cin >> symbol;
            cout <<"Next state: "; cin >> next_state1;
            // error
            addToBeginList(ArrayOfState[state], symbol, next_state1); 
            // to test if it works
            member* temp = ArrayOfState[state] -> front;
            while(temp!=NULL){
                cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
                temp=temp->next;
            }
        }else if(option1 == 3){    // does not work
            int n_tran_new_state; 
            int next_state12;
            char symbol12;
            cout <<"---Add new state---"<<endl;   
            cout << "<<State q"<<n<<">>";
            cout << "\n---Input transition---\n";
            cout << "Input number of transition: "; cin >> n_tran_new_state;
            ArrayOfState[n] = createEmptyList();
            for(int j = 0; j < n_tran_new_state; j++){
                cout << "/n---Transition #"<<j+1<<"---"<<endl;
                cout << "Symbol: "; cin >> symbol12;
                cout << "Next State: "; cin >> next_state12;
                addToBeginList(ArrayOfState[n], symbol12, next_state12);
            }
            member* temp = ArrayOfState[n] -> front;
            cout <<endl; 
            while(temp!=NULL){
                cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl;
                temp=temp->next;
            }
            n = n + 1;
        }else if(option1 == 4){
            int next_state=0;
            int stateToRemoveTran=0;
            char symbol='a';
            cout << "---Remove transition---"<<endl;
            cout << "Input State: "; cin >> stateToRemoveTran;
            cout << "Symbol: "; cin >> symbol;
            cout << "Next State: "; cin >> next_state;
            DeleteTranFromState(ArrayOfState, symbol, next_state, stateToRemoveTran);

            member *tmpp = ArrayOfState[stateToRemoveTran] -> front; 
            while(tmpp!=NULL){
                cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
                tmpp=tmpp->next;
            }
            // delete element has this symbol and next state
        }else if(option1 == 5){
            char symbolToRemove; 
            cout << "---Remove symbol---"<<endl;
            cout << "Warning: All transitions with input symbol will be deleted!!!"<<endl;  
            cout <<"Input Symbol: "; cin >> symbolToRemove; 

            for(int i=0;i<n;i++){
                DeleteSymbolFromState(ArrayOfState, symbolToRemove, i); 
            }
            // display FA
            for(int i=0;i<n;i++){
                member *tmpp = ArrayOfState[i] -> front; 
                while(tmpp!=NULL){
                    cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
                    tmpp=tmpp->next;
                }
            }
        }else if(option1 == 6){
            // might add more feature next time if we still have time
            int stateToDelete; 
            cout << "---Remove State---"<<endl;
            cout << "Warning: All transitions with input state will be deleted!!!"<<endl; 
            cout << "Input State: "; cin >> stateToDelete; 
            ArrayOfState[stateToDelete] = createEmptyList(); 

            // display FA
            for(int i=0;i<n;i++){
                member *tmpp = ArrayOfState[i] -> front; 
                while(tmpp!=NULL){
                    cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
                    tmpp=tmpp->next;
                }
                cout << "\n\n"; 
            }
        }
        //displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final); 
    }else if(option == 3){
        cout << "\n\tExited the program!!!"; 
    }
}