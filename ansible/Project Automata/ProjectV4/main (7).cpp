#include<iostream>
#include<string.h>
#include<math.h>
#include<stdbool.h>
#include<time.h>
#include<mysql.h>
#include<sstream>
#include<windows.h>
using namespace std;
MYSQL *connection;
MYSQL_ROW row;
MYSQL_RES *result;
string query;
#include"function.h"



int main(){
    int n_symbol;
    int n=1;
    int n_tran;
    int n_final = 1;
    int final[n_final];
    int option;
    List *ArrayOfState[n];
    n_symbol = 2;
    char symbol[n_symbol];
    int k=0;
    // error with variable

    int editNfinal=1;
    int editNfinalState[editNfinal];

    connection = mysql_init(0);
    connection = mysql_real_connect(connection, "localhost", "root", "", "Automata", 0, NULL, 0);

    while(k!=4){

        cout <<"\n1. Create FA"<<endl;
        cout <<"2. Load FA"<<endl;
        cout <<"3. Edit FA"<<endl;
        cout <<"4. Exit"<<endl;
        cout <<"Input option: "; cin >> option;
        if(option == 1){


            cout << "Input number of states: "; cin >> n;
            //n=5;

            for(int i = 0; i<n; i++){
                ArrayOfState[i] = createEmptyList();
            }

            cout << "Input number of symbol: "; cin >> n_symbol;

            // char symbol[n_symbol+1];
            for(int i=0; i<n_symbol; i++){
                cout << "Symbol #"<<i+1<<": "; cin >> symbol[i];
            }
            symbol[n_symbol] = 'e';

            int a=0; // Index to reference to all added elements in list
            int *next_state_DB;
            char *symbol_DB;
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
                    symbol_DB[a] = symbol1;
                    next_state_DB[a] = next_state;
                    a++;

                addToBeginList(ArrayOfState[i], symbol1, next_state);

                }
                member* temp = ArrayOfState[i] -> front;
                while(temp!=NULL){
                    cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl;
                    temp=temp->next;
                }
            }

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
            // int editNfinal=1;
            // int editNfinalState[editNfinal];
            editNfinal = n_final;
            for(int i=0; i<n_final; i++){
                editNfinalState[i] = final[i];
            }
            // n_final = 1;
            // final[0] = 2;

            //InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final);

            int option2;



            int fa_id = InsertDataToFA(ArrayOfState, n, symbol, n_symbol);

            int sym_id[n_symbol];
            string sym[n_symbol];
            for(int i=0; i<n_symbol; i++){
                sym[i] = ConvertCharToString(symbol[i]);  // Convert char * symbol to string symbol
                sym_id[i] = InsertSymbol(fa_id, sym[i], n_symbol); //Return primary key of each symbol
                cout<<"Primary key of Symbol #"<<i+1<<" : "<<sym_id[i]<<endl;
            }

             // Insert Data to states table in database
            // Check for final state
            int state_id[n];
            int check;
            for(int i=0; i<n; i++){
                for(int j=0; j<n_final; j++){
                    if(final[j] == i){ // Final state
                        check = 1;
                        break; // Confirm only one final state has one value
                    }
                    else if(final[j] != i && i != 0){ // Normal state
                        check = 2;
                    }
                    else{ // Start state
                        check = 0;
                    }
                }
                // End checking

                if(check == 1 && i == 0){ // Check if the state is both start state and final state
                    state_id[i] = InsertState(fa_id, i, true, true);
                }
                else if(check == 1){ // Check if exist only final state
                    state_id[i] = InsertState(fa_id, i, false, true);
                }
                else if(check == 0){ // Check if exist only start state
                    state_id[i] = InsertState(fa_id, i, true, false);
                }
                else if(check == 2){ // Check if not exist both start state and final state
                    state_id[i] = InsertState(fa_id, i, false, false);
                }
                // Insert Successful
                // Return primary key of each state
                cout<<"Primary key of State q"<<i<<" : "<<state_id[i]<<endl;
            }

            string primary_state[n];
            for(int i=0; i<n; i++){
                primary_state[i] = ConvertIntToString(state_id[i]);
            }
            char AllSym[a];
            int AllNextState[a];

            for(int i=0; i<a; i++){
                AllSym[i] = symbol_DB[i];
                AllNextState[i] = next_state_DB[i];
                cout<<AllSym[i]<<" -> "<<AllNextState[i]<<endl;
            }

//            int primary_key_AllState[a];
//            for(int i=0; i<a; i++){
//                for(int j=0; j<n; i++){
//                    if(i == j){
//                        primary_key_AllState[i] = state_id[j];
//
//                        break;
//                    }
//                }
//            }

            int p = 0;
            int primary_key_AllSym[a];
            for(int i=0; i<a; i++){
                cout<<"Transition #"<<i+1<<": "<<symbol_DB[i]<<" -> "<<next_state_DB[i]<<endl;
                for(int j=0; j<n_symbol; j++){
                    if(symbol[j] == AllSym[i]){
                        primary_key_AllSym[p] = sym_id[j];
                        p++;
                        break;
                    }
                }
            }
//            for(int i=0; i<a; i++){
//                cout<<"Primary State #"<<i+1<<": "<<primary_key_AllState[i]<<endl;
//            }

            for(int i=0; i<a; i++){
                cout<<"Primary key #"<<i+1<<": "<<primary_key_AllSym[i]<<endl;
            }

            string ID_sym[a];
            string Next_State_Value[a];
            for(int i=0; i<a; i++){
                ID_sym[i] = ConvertIntToString(primary_key_AllSym[i]);
                Next_State_Value[i] = ConvertIntToString(AllNextState[i]);
                cout<<ID_sym[i]<<" -> "<<Next_State_Value[i]<<endl;
            }

//            for(int i=0; i<a; i++){
//
//                InsertDataToTransition(primary_state[i], ID_sym[i], Next_State_Value[i]);
//
//            }



            displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
            while(option2 != 6){
                cout << "\n1. Test String";
                cout << "\n2. Test FA";
                cout << "\n3. Convert NFA to DFA";
                cout << "\n4. Minimize FA";
                cout << "\n5. Save FA";
                cout << "\n6. Back";
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
                    if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                        minimizeDFA(ArrayOfState, n, final, n_final, symbol, n_symbol);
                    }else{
                        cout << "It is not a DFA!!!";
                    }
                }else if(option2 == 5){
                    // save
                }else if(option2 == 6){
                    cout << "Program exited!!!";
                }
            }
            //displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
        // displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);

        }else if(option == 2){
            // load from database

            cout << "\n\n---Load FA---";
            cout << "\nInput FA ID: ";
            int option3;
            cout << "\n1. Test String";
                cout << "\n2. Test FA";
                cout << "\n3. Convert NFA to DFA";
                cout << "\n4. Minimize FA";
                cout << "\n5. Save FA";
                cout << "\n6. Back";
                cout << "\nInput number: "; cin >> option3;
            // after loading display this menu

        }else if(option == 3){     // Edit
            // funtion: add symbol, add transition, add state, remove transition, remove state
            // sub menu
            int option1;
            //int beforeEdit=0;
            //if(beforeEdit == 0){
                displayTable(ArrayOfState, n, symbol, n_symbol, editNfinalState, editNfinal);
                //beforeEdit += 1;
            //}


            cout << "\n1. Add symbol"<<endl;
            cout << "2. Add transition"<<endl;
            cout << "3. Add state"<<endl;
            cout << "4. Remove transition" <<endl;
            cout << "5. Remove symbol"<<endl;
            cout << "6. Remove state"<<endl;
            cout << "7. Save"<<endl;
            cout << "8. Back" <<endl;
            while(1>0){
                cout <<"Input: "; cin >> option1;
                if(option1 == 1){
                    cout <<"---Add symbol---"<<endl;
                    cout << "Input symbol: "; cin >> symbol[n_symbol];
                    n_symbol = n_symbol + 1;
                    for(int i=0;i<n_symbol;i++){
                        cout << symbol[i]<<" ";
                    }
                }else if(option1 == 2){
                    int state;
                    char symbol;
                    int next_state1;
                    cout <<"---Add new transition---"<<endl;
                    cout <<"Input State: "; cin >> state;
                    cout <<"Symbol: "; cin >> symbol;
                    cout <<"Next state: "; cin >> next_state1;
                    addToBeginList(ArrayOfState[state], symbol, next_state1);
                    // to test if it works
                    member* temp = ArrayOfState[state] -> front;
                    while(temp!=NULL){
                        cout << "Symbol: " << temp -> symbol << "   ->   " << temp->next_state <<endl;
                        temp=temp->next;
                    }
                }else if(option1 == 3){
                    int n_tran_new_state;
                    int next_state12;
                    char symbol12;
                    cout <<"---Add new state---"<<endl;
                    cout << "<<State q"<<n<<">>";
                    cout << "\n---Input transition---\n";
                    cout << "Input number of transition: "; cin >> n_tran_new_state;
                    ArrayOfState[n] = createEmptyList();
                    for(int j = 0; j < n_tran_new_state; j++){
                        cout << "\n---Transition #"<<j+1<<"---"<<endl;
                        cout << "Symbol: "; cin >> symbol12;
                        cout << "Next State: "; cin >> next_state12;
                        addToBeginList(ArrayOfState[n], symbol12, next_state12);
                    }
                    char FinalState;
                    cout << "\nIs it a final state? (Y/N): "; cin >> FinalState;
                    if(FinalState == 'Y'){
                        editNfinalState[editNfinal] = n;
                        editNfinal += 1;
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
                }else if(option1 == 7){
                    // save edited FA to database
                }
                else if(option1 == 8){
                    break;
                }
                displayTable(ArrayOfState, n, symbol, n_symbol, editNfinalState, editNfinal);
            }
        }else if(option == 4){
            cout << "\n\tExited the program!!!";
            break;
        }
    }

    mysql_close(connection);
}
