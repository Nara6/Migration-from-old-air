#include<iostream>
#include<string.h>
#include<math.h>
using namespace std;
#include"function.h"

int main(){
    int n_symbol; 
    int n;        
    int n_tran;
    int n_final = 1; 
    int final[n_final];  

    char symbol_of_each_state[30];   
    
    cout << "Input number of states: "; cin >> n; 
    member *graph[n]; 
    for(int i = 0; i<n+1; i++){   
        graph[i] = NULL;
    }
    cout << "Input number of symbol: "; cin >> n_symbol; 
    char symbol[n_symbol+1];   
    for(int i=0; i<n_symbol; i++){
        cout << "Symbol #"<<i+1<<": "; cin >> symbol[i]; 
    }
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
        member* temp = graph[i];
        while(temp!=NULL){
            cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
            temp=temp->next;
        }
    }
    cout << "Input number of final state: "; cin >> n_final;    
    for(int i=0; i<n_final; i++){
        cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
    } 
    for(int i=0; i<n; i++){
        cout<< graph[i]<<endl;
    }
    string str; 
    Queue *Q; 
    Q = createEmptyQueue(); 
    cout << "Test String: "; cin >> str;
    if(isDFA(graph, n, symbol, n_symbol)){
        cout << "It is DFA.\n"; 
    }else{
        cout << "It is NFA.\n"; 
    }
    // --------- Function Test String Work Well with NFA(100%) -----------;
    testString(graph, Q, str, n_final, final); 

    // --------- Function Display Table doesn't work well with more state(70%); -----------;
    displayTable(graph,n,symbol,n_symbol,final,n_final);

    // --------- Function Convert Done(100%) -----------;
    convertNFAtoDFA(graph,final,n_final,symbol,n_symbol);
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
// int main(){
//     int n_symbol; 
//     int n;        
//     int n_tran;
//     int n_final; 
//     int final[n_final];  
//     // int option; 
     

//     char symbol_of_each_state[30];  
    // cout <<"Input number one for Create FA"<<endl; 
    // cout <<"Input number two for Edit FA"<<endl; 
    // cout <<"Input option: "; cin >> option; 
    
    //if(option == 1){
        //cout << "Input number of states: "; cin >> n;  
        // n = 3; 
        // List *ArrayOfState[n];
        // for(int i = 0; i<n; i++){   
        //     ArrayOfState[i] = createEmptyList(); 
        // }
        // // cout << "Input number of symbol: "; cin >> n_symbol; 
        // n_symbol = 2; 
        // char symbol[n_symbol];
        // for(int i=0; i<n_symbol; i++){
        //     cout << "Symbol #"<<i+1<<": "; cin >> symbol[n_symbol];
        // }
        // symbol[0] = 'a'; 
        // symbol[1] = 'b';
        // for(int i=0; i<n; i++){
        //     cout << "<<State q"<<i<<">>"; 
        //     cout << "\n---Input transition---\n";
        //     cout << "Input number of transition: "; cin >> n_tran;
        //     int next_state;
        //     char symbol1;   
        //     for(int j = 1; j <= n_tran; j++){
        //         cout << "---Transition #"<<j<<"---"<<endl; 
        //         cout << "Symbol: "; cin >> symbol1;
        //         cout << "Next State: "; cin >> next_state;
        //         addToBeginList(ArrayOfState[i], symbol1, next_state); 
        //     }
        //     member* temp = ArrayOfState[i] -> front;
        //     while(temp!=NULL){
        //         cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
        //         temp=temp->next;
        //     }
        // }
        //state 0 
        //n_tran[0] = 3; 
    //     int next_state; 
    //     char symbol1; 

    //     next_state = 0;
    //     symbol1 = 'a';  

    //     addToBeginList(ArrayOfState[0], symbol1, next_state); 

    //     next_state = 1;
    //     symbol1 = 'a';  

    //     addToBeginList(ArrayOfState[0], symbol1, next_state);

    //     next_state = 1;
    //     symbol1 = 'b';  

    //     addToBeginList(ArrayOfState[0], symbol1, next_state);

    //     //state 1 
    //     //n_tran[1]; 

    //     next_state = 1;
    //     symbol1 = 'b'; 
    //     addToBeginList(ArrayOfState[1], symbol1, next_state);

    //     next_state = 2;
    //     symbol1 = 'a'; 
    //     addToBeginList(ArrayOfState[1], symbol1, next_state);

    //     // //n_tran[2]; 

    //     next_state = 2; 
    //     symbol1 = 'a'; 
    //     addToBeginList(ArrayOfState[2], symbol1, next_state);

    //     next_state = 1; 
    //     symbol1 = 'a'; 
    //     addToBeginList(ArrayOfState[2], symbol1, next_state);

    //     next_state = 0; 
    //     symbol1 = 'b'; 
    //     addToBeginList(ArrayOfState[2], symbol1, next_state);

    //     cout << "Input number of final state: "; cin >> n_final;    
    //     for(int i=0; i<n_final; i++){
    //         cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
    //     } 
    //     string str; 
    //     Queue *Q; 
    //     Q = createEmptyQueue(); 
    //     cout << "Test String: "; cin >> str;
    //     int accept; 
    //     testString(ArrayOfState, Q, str, n_final, final); 

    //     if(isDFA(ArrayOfState, n, symbol, n_symbol)){
    //         cout << "It is DFA."; 
    //     }else{
    //         cout << "It is NFA."; 
    //     }
    // //}else if(option == 2){     // Edit
    //     // funtion: add symbol, add transition, add state, remove transition, remove state
    //     // sub menu
    //     int option1;
    //     cout << "\nTo add symbol, input 1"<<endl; 
    //     cout << "To add transition, input 2"<<endl; 
    //     cout << "To add state, input 3"<<endl; 
    //     cout << "To remove symbol, in put 4" <<endl; 
    //     cout << "To remove transition, input 5"<<endl; 
    //     cout << "To remove state, input 6"<<endl; 
    //     cout <<"Input: "; cin >> option1; 
    //     if(option1 == 1){
    //         cout <<"---Add symbol---"<<endl; 
    //         cout << "Input symbol: "; cin >> symbol[n_symbol]; 
    //         n_symbol = n_symbol + 1;
    //     }else if(option1 == 2){
    //         int state;
    //         char symbol;
    //         int next_state1;
    //         cout <<"---Add new transition---"<<endl; 
    //         cout <<"Input State: "; cin >> state; 
    //         cout <<"Symbol: "; cin >> symbol;
    //         cout <<"Next state: "; cin >> next_state1;
    //         // error
    //         addToBeginList(ArrayOfState[state], symbol, next_state1); 
    //         // to test if it works
    //         member* temp = ArrayOfState[state] -> front;
    //         while(temp!=NULL){
    //             cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
    //             temp=temp->next;
    //         }
    //     }else if(option1 == 3){    // does not work
    //         int n_tran_new_state; 
    //         cout <<"---Add new state---"<<endl;   
    //         cout << "<<State q"<<n<<">>"; 
    //         n = n + 1;
    //         cout << "\n---Input transition---\n";
    //         cout << "Input number of transition: "; cin >> n_tran_new_state;
    //         for(int j = 0; j <= n_tran_new_state; j++){
    //             int next_state12;
    //             char symbol12;
    //             cout << "---Transition #"<<j+1<<"---"<<endl;
    //             cout << "Symbol: "; cin >> symbol12;
    //             cout << "Next State: "; cin >> next_state12;
    //             addToBeginList(ArrayOfState[n-1], symbol12, next_state12); 
    //         } 
            
    //         member* temp = ArrayOfState[n] -> front;
    //         while(temp!=NULL){
    //             cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl;
    //             temp=temp->next;
    //         }
    //     }else if(option1 == 4){
    //         int next_state=0;
    //         int stateToRemoveTran=0;
    //         char symbol='a';
    //         cout << "---Remove transition---"<<endl;
    //         cout << "Input State: "; cin >> stateToRemoveTran;
    //         cout << "Symbol: "; cin >> symbol;
    //         cout << "Next State: "; cin >> next_state;
    //         DeleteFromList(ArrayOfState, n, symbol, next_state, stateToRemoveTran);
            // delete element has this symbol and next state
        // }else if(option1 == 5){
        //     // remove symbol
        // }else if(option1 == 6){
        //     // remove state
        // }
//}
//     cout << "Input number of states: "; cin >> n; 
//         //n=3; 
//     member *graph[n+1]; 
//     for(int i = 0; i<n+1; i++){   
//         graph[i] = NULL;
//     }
//     cout << "Input number of symbol: "; cin >> n_symbol; 
//     char symbol[n_symbol+1];   
//         //n_symbol = 2; 
//     for(int i=0; i<n_symbol; i++){
//         cout << "Symbol #"<<i+1<<": "; cin >> symbol[i]; 
//     }
//         // symbol[0] = 'a'; 
//         // symbol[1] = 'b'; 
//     symbol[n_symbol] = 'e';
//     for(int i=0; i<n; i++){
//         cout << "<<State q"<<i<<">>"; 
//         cout << "\n---Input transition---\n";
//         cout << "Input number of transition: "<<endl; cin >> n_tran;
//         int next_state;
//         char symbol1;   
//         for(int j = 1; j <= n_tran; j++){
//             cout << "---Transition #"<<j<<"---"<<endl; 
//             cout << "Symbol: "; cin >> symbol1;
//             cout << "Next State: "; cin >> next_state;
//             graph[i]= List(graph[i], symbol1, next_state); 
//         }
//         member* temp = graph[i];
//         while(temp!=NULL){
//             cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
//             temp=temp->next;
//         }
//     }
//     cout << "Input number of final state: "; cin >> n_final;    
//     for(int i=0; i<n_final; i++){
//         cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
//     } 
//     string str; 
//     Queue *Q; 
//     Q = createEmptyQueue(); 
//     cout << "Test String: "; cin >> str;
//     if(isDFA(graph, n, symbol, n_symbol)){
//         cout << "It is DFA."; 
//     }else{
//         cout << "It is NFA."; 
//     }
//     testString(graph, Q, str, n_final, final); 
//     displayTable(graph,n,symbol,n_symbol,final,n_final);

//     convertNFAtoDFA(graph,final,n_final,symbol,n_symbol);
// }