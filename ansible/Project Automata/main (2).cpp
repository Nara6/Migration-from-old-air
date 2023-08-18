#include<iostream>
#include<string.h>
#include<math.h>
using namespace std;
#include"function (2).h"

int main(){
    int n_symbol; 
    int n;        
    int n_tran;
    int n_final = 1; 
    int final[n_final];  

    char symbol_of_each_state[30];   
    
    cout << "Input number of states: "; cin >> n; 
    //n=3; 
    node *graph[n]; 
    for(int i = 0; i<n; i++){   
        graph[i] = NULL;
    }
    cout << "Input number of symbol: "; cin >> n_symbol; 
    char symbol[n_symbol+1];   
    //n_symbol = 2; 
    for(int i=0; i<n_symbol; i++){
        cout << "Symbol #"<<i+1<<": "; cin >> symbol[i]; 
    }
    // symbol[0] = 'a'; 
    // symbol[1] = 'b'; 
    symbol[n_symbol] = 'e';
    for(int i=0; i<n; i++){
        cout << "<<State q"<<i<<">>"; 
        cout << "\n---Input transition---\n";
        cout << "Input number of transition: "<<endl; cin >> n_tran;
        int next_state;
        char symbol1;   
        for(int j = 1; j <= n_tran; j++){
            cout << "---Transition #"<<j<<"---"<<endl; 
            cout << "Symbol: "; cin >> symbol1;
            cout << "Next State: "; cin >> next_state;
            graph[i]= push(graph[i], symbol1, next_state); 
        }
        node* temp = graph[i];
        while(temp!=NULL){
            cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
            temp=temp->next;
        }
    }
    // state 0 
    // n_tran[0] = 3; 
    // int next_state; 
    // char symbol1; 

    // next_state = 0;
    // symbol1 = 'a';  

    // addToBeginList(graph[0], symbol1, next_state); 

    // next_state = 1;
    // symbol1 = 'a';  

    // addToBeginList(graph[0], symbol1, next_state);

    // next_state = 1;
    // symbol1 = 'b';  

    // addToBeginList(graph[0], symbol1, next_state);

    // //state 1 
    // n_tran[1]; 

    // next_state = 1;
    // symbol1 = 'b'; 
    // addToBeginList(graph[1], symbol1, next_state);

    // next_state = 2;
    // symbol1 = 'a'; 
    // addToBeginList(graph[1], symbol1, next_state);

    // n_tran[2]; 

    // next_state = 2; 
    // symbol1 = 'a'; 
    // addToBeginList(graph[2], symbol1, next_state);

    // next_state = 1; 
    // symbol1 = '1'; 
    // addToBeginList(graph[2], symbol1, next_state);

    // next_state = 0; 
    // symbol1 = 'b'; 
    // addToBeginList(graph[2], symbol1, next_state);

    cout << "Input number of final state: "; cin >> n_final;    
    for(int i=0; i<n_final; i++){
        cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
    } 
    string str; 
    Queue *Q; 
    Q = createEmptyQueue(); 
    cout << "Test String: "; cin >> str;
    //int accept; 
    if(isDFA(graph, n, symbol, n_symbol)){
        cout << "It is DFA."; 
    }else{
        cout << "It is NFA."; 
    }
    testString(graph, Q, str, n_final, final); 
    displayTable(graph,n,symbol,n_symbol,final,n_final);

    convertNfatoDfa(graph,final,n_final,symbol,n_symbol,0);
}