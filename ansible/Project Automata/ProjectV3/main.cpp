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
    int option; 
    List *ArrayOfState[n];
    n_symbol = 2;
    char symbol[n_symbol+1];

    char symbol_of_each_state[30];
    cout <<"1. Create FA"<<endl; 
    cout <<"2. Edit FA"<<endl; 
    cout <<"3. Exit"<<endl; 
    cout <<"Input option: "; cin >> option; 
    if(option == 1){
        //cout << "Input number of states: "; cin >> n;
        n=5; 
        for(int i = 0; i<n; i++){   
            ArrayOfState[i] = createEmptyList(); 
        }
        //     cout << "Input number of symbol: "; cin >> n_symbol; 
        
        // for(int i=0; i<n_symbol; i++){
        //     cout << "Symbol #"<<i+1<<": "; cin >> symbol[n_symbol];
        // }
        // n_symbol = 2;
        // symbol[n_symbol+1];
        symbol[0] = 'a';
        symbol[1] = 'b';
        symbol[n_symbol] = 'e'; 
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
        //        addToBeginList(ArrayOfState[i], symbol1, next_state); 
        //     }
        //     member* temp = ArrayOfState[i] -> front;
        //     while(temp!=NULL){
        //         cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl; 
        //         temp=temp->next;
        //     }
        // }
        //symbol[n_symbol] = 'e'; 
        //state 0 

        addToBeginList(ArrayOfState[0], 'a', 1);



        addToBeginList(ArrayOfState[1], 'b', 2);
        addToBeginList(ArrayOfState[1], 'b', 3);


        addToBeginList(ArrayOfState[2], 'b', 3);
        addToBeginList(ArrayOfState[2], 'a', 2);
        addToBeginList(ArrayOfState[2], 'b', 2);


        addToBeginList(ArrayOfState[3], 'a', 4);
        for(int i=0;i<n;i++){
            member *tmp; 
            tmp = ArrayOfState[i]-> front; 
            while(tmp!=NULL){
                cout << "Symbol: " << tmp -> symbol << "   ->   " << tmp->next_state <<endl; 
                tmp=tmp->next;
            }
        }
 
        // cout << "Input number of final state: "; cin >> n_final;    
        // for(int i=0; i<n_final; i++){
        //     cout << "Input final state #"<<i+1<<": "; cin >> final[i]; 
        // } 
        int n_final = 1;
        int final[n_final];
        n_final = 1;
        final[0] = 4;
        int option2;
        displayTable(ArrayOfState, n, symbol, n_symbol,final, n_final);
        while(option2 != 4){
            cout << "\n1. Test String ";
            cout << "\n2. Test FA"; 
            cout << "\n3. Convert NFA to DFA";
            cout << "\n4. Exit";
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