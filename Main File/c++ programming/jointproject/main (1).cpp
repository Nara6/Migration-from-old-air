#include<iostream>
#include<string.h>
using namespace std;
#include"function (1).h"

int main(){
    int n_symbol; 
    int n;        
    int n_tran;
    int n_final = 1; 
    int final[n_final];  

    char symbol_of_each_state[30];   
    
    cout << "Input number of states: "; cin >> n; 
    List *graph[n]; 
    for(int i = 0; i<n; i++){   
        graph[i] = createEmptyList(); 
    }
    cout << "Input number of symbol: "; cin >> n_symbol; 
    char symbol[n_symbol];   
    for(int i=0; i<n_symbol; i++){
        cout << "Symbol #"<<i+1<<": "; cin >> symbol[n_symbol];
    }
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
            addToBeginList(graph[i], symbol1, next_state); 
        }
        member* temp = graph[i] -> front;
        while(temp!=NULL){
            cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
            temp=temp->next;
        }
    }
    cout << "Input number of final state: "; cin >> n_final;    
    for(int i=0; i<n_final; i++){
        cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
    } 
    string str; 
    Queue *Q; 
    Q = createEmptyQueue(); 
    cout << "Test String: "; cin >> str;
    int accept; 
    testString(graph, Q, str, n_final, final); 
}