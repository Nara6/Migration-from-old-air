#include<iostream>
#include <conio.h>
#include<string.h>
#include<math.h>
#include<stdbool.h>
#include<time.h>
using namespace std;
#include"DataStructure.h"

int n;
int n_tran;
int n_final;
int n_symbol;
List *ArrayOfState[10];
char *symbol;
int *final;

#include"function.h"

void arrowHere(int realPosition, int arrowPosition){
     if(realPosition == arrowPosition){
        cout<<" --->>> ";
     }
     else{
        cout<<"        ";
     }
}
int position=1;
int sub_pos1=1;
int sub_pos2 = 1;
int press = 0;
void menu(){

    int keyPressed = 0;
    //Sleep(300);
    while(keyPressed!=13){
        system("cls");

        //gotoxy(100, 0);
        arrowHere(1,position); cout<<"Create FA\n";
        //gotoxy(100, 1);
        arrowHere(2,position); cout<<"Load FA\n";
        //gotoxy(100, 2);
        //arrowHere(3,position); cout<<"Edit\n";
        //gotoxy(100, 3);
        arrowHere(3,position); cout<<"Exit\n\n";

        cout<<"NOTE: PRESS \"UP KEY\" AND \"DOWN KEY\" TO SCROLL\n";
        cout<<"      PRESS \"Enter KEY\" TO CHOOSE THE OPTION";


        keyPressed = getch();
        if(keyPressed == 80 && position !=3){
            position++;
        }
        else if(keyPressed == 72 && position !=1){
            position--;
        }
        else{
            position = position;
        }
    }
}

int main(){
    mysql = mysql_init(0);
    connection = mysql_real_connect(mysql,"localhost","root","","Automata",0,NULL,0);

    system("Color F4");

    HANDLE h = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD size;

    if (GetFontSize(h, &size)){
        size.X += (SHORT)(size.X * .5);
        size.Y += (SHORT)(size.Y * .5);
        SetFontSize(h, size);
    }

    Ascii_Art();
    loading();
    system("cls");
    menu();

    int option;

    int FA_id;
    int o=1;

    // error with variable

    //int editNfinal=1;
    //int editNfinalState[editNfinal];

    while(1<2){
//        if(o==2){
//            option = 2;
//        }
//        else{
//            cout <<"\n1. Create FA"<<endl;
//            cout <<"2. Load FA"<<endl;
//            //cout <<"3. Edit FA"<<endl;
//            //cout <<". Delete FA"<<endl;
//            cout <<"3. Exit"<<endl<<endl;
//            cout <<"Input option: "; cin >> option; fflush(stdin);
//        }

        if(position == 1){
            system("cls");
            cout << "Input number of states: "; cin >> n;
            //n=5;

            for(int i = 0; i<n; i++){
                ArrayOfState[i] = createEmptyList();
            }

            cout << "Input number of symbol: "; cin >> n_symbol;
            symbol = new char[n_symbol];
            // char symbol[n_symbol+1];
            for(int i=0; i<n_symbol; i++){
                cout << "Symbol #"<<i+1<<": "; cin >> symbol[i];
            }

            symbol[n_symbol] = 'e';

            //-------------------------
            int current_state_DB[100];
            int next_state_DB[100];
            char symbol_tran_DB[100];
            int index_tran = 0;
            //-------------------------

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

                    //Fetch the value------------------------
                    current_state_DB[index_tran] = i;
                    next_state_DB[index_tran] = next_state;
                    symbol_tran_DB[index_tran] = symbol1;
                    index_tran++;
                    //---------------------------------------

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


            cout << "Input number of final state: "; cin >> n_final;
            final = new int[n_final];
            for(int i=0; i<n_final; i++){
                cout << "Input final state #"<<i+1<<": "; cin >> final[i];
            }

            bool Save = false;
            int CheckConvert = 0;
            int CheckMinimize = 0;
            int option2;

            int current_state_cov_DB[100];
            int next_state_cov_DB[100];
            char symbol_tran_cov_DB[100];
            int index_tran_cov = 0;

            int current_state_mnm_DB[100];
            int next_state_mnm_DB[100];
            char symbol_tran_mnm_DB[100];
            int index_tran_mnm = 0;

            //displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);

            do{
                int keyPressed1 = 0;
                while(1){
                    system("cls");
                    displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                    arrowHere(1,sub_pos1); cout<<"1. Test String\n";
                    arrowHere(2,sub_pos1); cout<<"2. Test FA\n";
                    arrowHere(3,sub_pos1); cout<<"3. Convert NFA to DFA\n";
                    arrowHere(4,sub_pos1); cout<<"4. Minimize FA\n";
                    arrowHere(5,sub_pos1); cout<<"5. Save FA\n";
                    arrowHere(6,sub_pos1); cout<<"6. Back";


                    keyPressed1 = getch();
                    if(keyPressed1 == 80 && sub_pos1 !=6){
                        sub_pos1++;
                    }
                    else if(keyPressed1 == 72 && sub_pos1 !=1){
                        sub_pos1--;
                    }
                    else if(keyPressed1 == 13){
                        break;
                    }
                    else{
                        sub_pos1 = sub_pos1;
                    }
                    system("cls");
                }
                if(sub_pos1 == 1){
                    if(keyPressed1 == 13){
                        system("cls");
                        displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                        string str;
                        Queue *Q;
                        Q = createEmptyQueue();
                        cout << "\nTest String: "; cin >> str;
                        int accept;
                        enqueue(Q, 0);
                        testString(ArrayOfState, Q, str, n, final, n_final, 0);


                        cout<<"\n---Press Enter to continue";
                        press = getch();
                        if(press == 13){
                            system("cls");
                        }
                    }
                    //error cannot catch value after convert
                }else if(sub_pos1 == 2){
                    if(keyPressed1 ==13){
                        system("cls");
                        displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                        if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                        cout << "\nIt is DFA.";
                        }else{
                        cout << "\nIt is NFA.";
                        }


                        cout<<"\n---Press Enter to continue";
                        press = getch();
                        if(press == 13){
                            system("cls");
                        }
                    }
                }else if(sub_pos1 == 3){
                    if(keyPressed1==13){
                        system("cls");
                        displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                        if(!isDFA(ArrayOfState, n, symbol, n_symbol)){
                            convertNFAtoDFA(ArrayOfState, final, n_final, symbol, n_symbol);
                            displayTable(ArrayOfState, n, symbol, n_symbol-1, final, n_final);
                            cout << "n: "<<n<<endl;
                            cout << "n symbol: "<<n_symbol<<endl;
                            cout << "n final: "<<n_final<<endl;

                            CheckConvert = 1;

                            for(int i=0; i<n; i++){
                                member *help;
                                help = ArrayOfState[i]->front;
                                while(help!=NULL){
                                    current_state_cov_DB[index_tran_cov] = i;
                                    next_state_cov_DB[index_tran_cov] = help->next_state;
                                    symbol_tran_cov_DB[index_tran_cov] = help->symbol;
                                    index_tran_cov++;
                                    help = help->next;
                                }
                            }
                        cout<<"\n---Press Enter to continue";
                        press = getch();
                        if(press == 13){
                            system("cls");
                        }
                    }else{
                        cout << "It is already a DFA!!!";
                        cout<<"\n---Press Enter to continue";
                        press = getch();
                        if(press == 13){
                            system("cls");
                        }
                    }
                }
                }else if(sub_pos1 == 4){
                    system("cls");
                    displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                    if(keyPressed1 == 13){
                        if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                            minimizeDFA(ArrayOfState, n, final, n_final, symbol, n_symbol);
                            displayTable(ArrayOfState, n, symbol, n_symbol-1, final, n_final);
                            CheckMinimize = 1;
                            for(int i=0; i<n; i++){
                            member *help;
                            help = ArrayOfState[i]->front;
                            while(help!=NULL){
                                current_state_mnm_DB[index_tran_mnm] = i;
                                next_state_mnm_DB[index_tran_mnm] = help->next_state;
                                symbol_tran_mnm_DB[index_tran_mnm] = help->symbol;
                                index_tran_mnm++;
                                help = help->next;
                            }
                        }
                        cout<<"\n---Press Enter to continue";
                        press = getch();
                        if(press == 13){
                            system("cls");
                        }
                    }else{
                        cout << "It is not a DFA!!!";
                        cout<<"\n---Press Enter to continue";
                        press = getch();
                        if(press == 13){
                            system("cls");
                        }
                    }
                }
                }
                else if(sub_pos1 == 5){
                    // save
                    //system("cls");
                    //displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                    if(keyPressed1==13){
                        if(Save){
                            cout<<"This FA has already saved!"<<endl;
//                            cout<<"\n---Press Enter to continue";
//                            press = getch();
//                            if(press == 13){
//                                system("cls");
//                            }
                        }else{
                            if(CheckConvert == 0 && CheckMinimize == 0){
                                FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran, current_state_DB, symbol_tran_DB, next_state_DB);
                            }else if(CheckConvert == 1 && CheckMinimize == 0){
                                FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_cov, current_state_cov_DB, symbol_tran_cov_DB, next_state_cov_DB);
                            }else if(CheckMinimize == 1){
                                FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_mnm, current_state_mnm_DB, symbol_tran_mnm_DB, next_state_mnm_DB);
                            }
                            Save = true;
                            break;
//                            cout<<"\n---Press Enter to continue";
//                            press = getch();
//                            if(press == 13){
//                                system("cls");
                            //}
                        }
                    }

                }
                else if(sub_pos1 == 6){
                    fflush(stdin);
                    if(keyPressed1 ==13){
                        if(Save){
                            cout<<"Program exited!!!";
                            break;
                        }else{
                            char Confirm;
                            cout<<"Do you want to save? (Y/N): "; cin>>Confirm;
                            fflush(stdin);
                            if(toupper(Confirm) == 'Y'){
                                FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran, current_state_DB, symbol_tran_DB, next_state_DB);
                            }else if(toupper(Confirm) == 'N'){
                                cout<<"Program exited!!!";
                                break;
                            }
                        }
                    }
                }
            }while(sub_pos1 != 6);
        }else if(position == 2){
            
            
            // load from database
            LoadDataFromDB();
            cout<<"Input ID: "; cin>>FA_id;
            n = findnumberstate(FA_id);
            n_symbol = findnumbersymbol(FA_id);
            n_final = findnumberfinalstate(FA_id);
            final = new int[n_final];
            symbol = new char[n_symbol];
            LoadFinalState(FA_id,final);
            LoadSymbol(FA_id,symbol);
            for(int i=0; i<n; i++){
                ArrayOfState[i] = createEmptyList();
            }
            for(int i=0; i<n; i++){
                n_tran = findnumbertransition(FA_id,i);
                Loadtransition(FA_id,i,ArrayOfState[i],n_tran);
            }
            displayTable(ArrayOfState,n,symbol,n_symbol-1,final,n_final);
            // after loading display this menu

            //-------------------------
            int current_state_Load_DB[100];
            int next_state_Load_DB[100];
            char symbol_tran_Load_DB[100];
            int index_tran_Load = 0;
            //-------------------------
            for(int i=0; i<n; i++){
                member *help;
                help = ArrayOfState[i]->front;
                while(help!=NULL){
                    current_state_Load_DB[index_tran_Load] = i;
                    next_state_Load_DB[index_tran_Load] = help->next_state;
                    symbol_tran_Load_DB[index_tran_Load] = help->symbol;
                    index_tran_Load++;
                    help = help->next;
                }
            }

            bool Save = true;
            int CheckConvert = 0;
            int CheckMinimize = 0;

            int current_state_cov_DB[100];
            int next_state_cov_DB[100];
            char symbol_tran_cov_DB[100];
            int index_tran_cov = 0;

            int current_state_mnm_DB[100];
            int next_state_mnm_DB[100];
            char symbol_tran_mnm_DB[100];
            int index_tran_mnm = 0;

            int option3;
                        int keyPressed2 = 0;
            while(1){
                system("cls");
                displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                arrowHere(1,sub_pos2); cout<<"1. Test String\n";
                arrowHere(2,sub_pos2); cout<<"2. Test FA\n";
                arrowHere(3,sub_pos2); cout<<"3. Convert NFA to DFA\n";
                arrowHere(4,sub_pos2); cout<<"4. Minimize FA\n";
                arrowHere(5,sub_pos2); cout<<"5. Save FA\n";
                arrowHere(6,sub_pos2); cout<<"6. Back";


                keyPressed1 = getch();
                if(keyPressed1 == 80 && sub_pos1 !=6){
                    sub_pos1++;
                }
                else if(keyPressed1 == 72 && sub_pos1 !=1){
                    sub_pos1--;
                }
                else if(keyPressed1 == 13){
                    break;
                }
                else{
                    sub_pos1 = sub_pos1;
                }
                system("cls");
            }
            do{
//                cout << "\n1. Test String";
//                cout << "\n2. Test FA";
//                cout << "\n3. Convert NFA to DFA";
//                cout << "\n4. Minimize FA";
//                cout << "\n5. Edit FA";
//                cout << "\n6. Save FA";
//                cout << "\n7. Save as new FA";
//                cout << "\n8. Delete FA";
//                cout << "\n9. Back";
//                cout << "\nInput number: "; cin >> option3; fflush(stdin);
                if(option3 == 1){
                    string str;
                    Queue *Q;
                    Q = createEmptyQueue();
                    cout << "\nTest String: "; cin >> str;
                    int accept;
                    enqueue(Q, 0);
                    testString(ArrayOfState, Q, str, n, final, n_final, 0);
                }else if(option3 == 2){
                    if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                        cout << "\nIt is DFA.";
                    }else{
                        cout << "\nIt is NFA.";
                    }
                }else if(option3 == 3){
                    if(!isDFA(ArrayOfState, n, symbol, n_symbol)){
                        convertNFAtoDFA(ArrayOfState, final, n_final, symbol, n_symbol);
                        displayTable(ArrayOfState, n, symbol, n_symbol-1, final, n_final);

                        CheckConvert = 1;
                        for(int i=0; i<n; i++){
                            member *help;
                            help = ArrayOfState[i]->front;
                            while(help!=NULL){
                                current_state_cov_DB[index_tran_cov] = i;
                                next_state_cov_DB[index_tran_cov] = help->next_state;
                                symbol_tran_cov_DB[index_tran_cov] = help->symbol;
                                index_tran_cov++;
                                help = help->next;
                            }
                        }

                        Save = false;
                    }else{
                        cout << "It is already a DFA!!!";
                    }
                }else if(option3 == 4){
                    if(isDFA(ArrayOfState, n, symbol, n_symbol)){
                        minimizeDFA(ArrayOfState, n, final, n_final, symbol, n_symbol);
                        displayTable(ArrayOfState, n, symbol, n_symbol-1, final, n_final);
                        CheckMinimize = 1;
                        for(int i=0; i<n; i++){
                            member *help;
                            help = ArrayOfState[i]->front;
                            while(help!=NULL){
                                current_state_mnm_DB[index_tran_mnm] = i;
                                next_state_mnm_DB[index_tran_mnm] = help->next_state;
                                symbol_tran_mnm_DB[index_tran_mnm] = help->symbol;
                                index_tran_mnm++;
                                help = help->next;
                            }
                        }
                        Save = false;
                    }else{
                        cout << "It is not a DFA!!!";
                    }
                }else if(option3 == 5){
                    // edit
                    // funtion: add symbol, add transition, add state, remove transition, remove state
                    // sub menu
                    displayTable(ArrayOfState,n,symbol,n_symbol-1,final,n_final);

                    int option1;
                    //int beforeEdit=0;
                    //if(beforeEdit == 0){
                        //displayTable(ArrayOfState, n, symbol, n_symbol, editNfinalState, editNfinal);
                        //beforeEdit += 1;
                    //}

                    int CheckAdd = 0;
                    int CheckRemove = 0;

                    char AddSymbol[10];
                    int index_newsymbol = 0;
                    int CheckAddSymbol = 0;

                    DBstate AddState[10];
                    int index_newstate = 0;
                    int CheckAddState = 0;

                    DBtransition AddTransition[10];
                    int index_newtransition = 0;
                    int CheckAddTransition = 0;

                    char DeleteSymbol[10];
                    int index_deletesymbol = 0;
                    int CheckDeleteSymbol = 0;

                    int DeleteState[10];
                    int index_deletestate = 0;
                    int CheckDeleteState = 0;

                    DBtransition DeleteTransition[10];
                    int index_deletetransition = 0;
                    int CheckDeleteTransition = 0;

                    while(1>0){
                        cout << "\n1. Add symbol"<<endl;
                        cout << "2. Add transition"<<endl;
                        cout << "3. Add state"<<endl;
                        cout << "4. Remove transition" <<endl;
                        cout << "5. Remove symbol"<<endl;
                        cout << "6. Remove state"<<endl;
                        cout << "7. Rename description"<<endl;
                        cout << "8. Save"<<endl;
                        cout << "9. Back" <<endl;
                        cout <<"Input: "; cin >> option1; fflush(stdin);
                        if(option1 == 1){
                            cout <<"---Add symbol---"<<endl;
                            cout << "Input symbol: "; cin >> symbol[n_symbol];

                            //Get value to input intoData to save later
                            AddSymbol[index_newsymbol] = symbol[n_symbol];
                            index_newsymbol++;
                            CheckAdd++;
                            CheckAddSymbol = 1;
                            //-------------------------------------------

                            n_symbol = n_symbol + 1;
                            for(int i=0;i<n_symbol;i++){
                                cout << symbol[i]<<" ";
                            }
                            symbol[n_symbol] = 'e';
                        }else if(option1 == 2){
                            int state;
                            char symbol;
                            int next_state1;
                            cout <<"---Add new transition---"<<endl;
                            cout <<"Input State: "; cin >> state;
                            cout <<"Symbol: "; cin >> symbol;
                            cout <<"Next state: "; cin >> next_state1;

                            //---------------------------------------------------------
                            AddTransition[index_newtransition].current_state = state;
                            AddTransition[index_newtransition].symbol = symbol;
                            AddTransition[index_newtransition].next_state = next_state1;
                            index_newtransition++;
                            CheckAdd++;
                            CheckAddTransition = 1;
                            //----------------------------------------------------------

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

                                //---------------------------------------------------------
                                AddTransition[index_newtransition].current_state = n;
                                AddTransition[index_newtransition].symbol = symbol12;
                                AddTransition[index_newtransition].next_state = next_state12;
                                index_newtransition++;
                                CheckAdd++;
                                CheckAddTransition = 1;
                                //----------------------------------------------------------

                                addToBeginList(ArrayOfState[n], symbol12, next_state12);
                            }
                            char FinalState;
                            cout << "\nIs it a final state? (Y/N): "; cin >> FinalState;
                            if(FinalState == 'Y'){
                                final[n_final] = n;
                                n_final += 1;
                                //editNfinalState[editNfinal] = n;
                                //editNfinal += 1;

                                //------------------------------------------
                                AddState[index_newstate].finalstate = true;
                                //------------------------------------------
                            }

                            //---------------------------------
                            AddState[index_newstate].state = n;
                            index_newstate++;
                            CheckAdd++;
                            CheckAddState = 1;
                            //---------------------------------

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

                            //-------------------------------------------------------------------------
                            DeleteTransition[index_deletetransition].current_state = stateToRemoveTran;
                            DeleteTransition[index_deletetransition].symbol = symbol;
                            DeleteTransition[index_deletetransition].next_state = next_state;
                            index_deletetransition++;
                            CheckRemove++;
                            CheckDeleteTransition = 1;
                            //-------------------------------------------------------------------------

                            DeleteTranFromState(ArrayOfState, symbol, next_state, stateToRemoveTran);

                            member *tmpp = ArrayOfState[stateToRemoveTran] -> front;
                            while(tmpp!=NULL){
                                cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
                                tmpp=tmpp->next;
                            }
                            // delete element has this symbol and next state
                        }else if(option1 == 5){ // stil error on remove symbol
                            char symbolToRemove;
                            cout << "---Remove symbol---"<<endl;
                            cout << "Warning: All transitions with input symbol will be deleted!!!"<<endl;
                            cout <<"Input Symbol: "; cin >> symbolToRemove;

                            //-------------------------------------------------
                            DeleteSymbol[index_deletesymbol] = symbolToRemove;
                            index_deletesymbol++;
                            CheckRemove++;
                            CheckDeleteSymbol = 1;
                            //-------------------------------------------------

                            for(int i=0;i<n;i++){
                                DeleteSymbolFromState(ArrayOfState, symbolToRemove, i);
                            }
                            int m;
                            for(int i=0;i<n_symbol;i++){
                                if(symbol[i] == symbolToRemove){
                                    m = i;
                                    break;
                                }
                            }
                            memmove(symbol + m, symbol + m + 1, (n_symbol - m - 1)*sizeof(int));
                            n_symbol--;
                            symbol[n_symbol] = 'e';
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
                            // error
                            int stateToDelete;
                            cout << "---Remove State---"<<endl;
                            cout << "Warning: All transitions with this input state will be deleted!!!"<<endl;
                            cout << "Input State: "; cin >> stateToDelete;

                            //---------------------------------------------
                            DeleteState[index_deletestate] = stateToDelete;
                            index_deletestate++;
                            CheckRemove++;
                            CheckDeleteState = 1;
                            //---------------------------------------------

                            //ArrayOfState[stateToDelete] = createEmptyList();
                            int Count = 0;
                            // delete an index from ArrayOfState

                            memmove(ArrayOfState + stateToDelete, ArrayOfState + stateToDelete+1, (n - stateToDelete - 1) * sizeof(int));
                            n--;
                            int isFinal=-1;
                            for(int i=0;i<n_final;i++){
                                if(stateToDelete == final[i]){
                                    isFinal = i;
                                }
                            }
                            if(isFinal!=-1){
                                memmove(final + isFinal, final + isFinal +1, (n_final - isFinal - 1) * sizeof(int));
                                n_final--;
                            }

                            // display FA
//                            for(int i=0;i<n;i++){
//                                member *tmpp = ArrayOfState[i] -> front;
//                                while(tmpp!=NULL){
//                                    cout << "Symbol: " << tmpp -> symbol << "   ->   " << tmpp->next_state <<endl;
//                                    tmpp=tmpp->next;
//                                }
//                                cout << "\n\n";
//                            }
                        }else if(option1 == 7){
                            string newDes;
                            cout<<"New Description: "; getline(cin,newDes);
                            ChangeDescription(FA_id,newDes);
                            cout<<"Description is changed!"<<endl;
                        }else if(option1 == 8){
                            // save edited FA to database
                            char ConfirmSaveEdit;
                            cout<<"Do you want to save?(Y/N): "; cin>>ConfirmSaveEdit;
                            if(toupper(ConfirmSaveEdit) == 'Y'){
                                if(CheckAdd != 0){
                                    if(CheckAddSymbol == 1){
                                        for(int i=0; i<index_newsymbol; i++){
                                            cout<<AddSymbol[i]<<endl;
                                            InsertSymbol(FA_id, AddSymbol[i]);
                                        }
                                    }
                                    if(CheckAddState == 1){
                                        for(int i=0; i<index_newstate; i++){
                                            cout<<AddState[i].state<<"\t"<<AddState[i].startstate<<"\t"<<AddState[i].finalstate<<endl;
                                            InsertState(FA_id, AddState[i].state, AddState[i].startstate, AddState[i].finalstate);
                                        }
                                    }
                                    if(CheckAddTransition == 1){
                                        for(int i=0; i<index_newtransition; i++){
                                            InsertDataToTransition(FA_id, AddTransition[i].current_state, AddTransition[i].symbol, AddTransition[i].next_state);
                                        }
                                    }
                                }
                                if(CheckRemove != 0){
                                    if(CheckDeleteTransition == 1){
                                        for(int i=0; i<index_deletetransition; i++){
                                            Removetransition(FA_id, DeleteTransition[i].current_state, DeleteTransition[i].symbol, DeleteTransition[i].next_state);
                                        }
                                    }
                                    if(CheckDeleteSymbol == 1){
                                        for(int i=0; i<index_deletesymbol; i++){
                                            RemoveSymbol(FA_id, DeleteSymbol[i]);
                                        }
                                    }
                                    if(CheckDeleteState == 1){
                                        for(int i=0; i<index_deletestate; i++){
                                            RemoveState(FA_id, DeleteState[i]);
                                        }
                                    }
                                }

                                cout<<"Save is completed!"<<endl;
                            }else if(toupper(ConfirmSaveEdit) == 'N'){
                                cout<<"Back!"<<endl;
                            }
                        }
                        else if(option1 == 9){
                            break;
                        }
                        displayTable(ArrayOfState, n, symbol, n_symbol, final, n_final);
                    }
                }else if(option3 == 6){
                    // save
                    if(Save){
                        cout<<"This FA has already saved!"<<endl;
                    }else{
                        if(CheckConvert == 1 && CheckMinimize == 0){
                            SaveData(FA_id,ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_cov, current_state_cov_DB, symbol_tran_cov_DB, next_state_cov_DB);
                        }else if(CheckMinimize == 1){
                            SaveData(FA_id,ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_mnm, current_state_mnm_DB, symbol_tran_mnm_DB, next_state_mnm_DB);
                        }
                        Save = true;
                        break;
                    }
                }else if(option3 == 7){
                    // save as
                    if(CheckConvert == 0 && CheckMinimize == 0){
                        FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_Load, current_state_Load_DB, symbol_tran_Load_DB, next_state_Load_DB);
                    }else if(CheckConvert == 1 && CheckMinimize == 0){
                        FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_cov, current_state_cov_DB, symbol_tran_cov_DB, next_state_cov_DB);
                        CheckConvert == 0;
                    }else if(CheckMinimize == 1){
                        FA_id = InsertDataToDatabase(ArrayOfState, n, n_symbol, symbol, final, n_final, index_tran_mnm, current_state_mnm_DB, symbol_tran_mnm_DB, next_state_mnm_DB);
                        CheckMinimize = 0;
                    }
                }else if(option3 == 8){
                    // delete
//                    LoadDataFromDB();
                    char ConfirmDeleteFa;
//                    cout<<"Input FA ID: "; cin>>FA_id;
                    cout<<"Do you want to delete this FA? (Y/N): "; cin>>ConfirmDeleteFa;
                    if(toupper(ConfirmDeleteFa) == 'Y'){
                        DeleteFaFromDatabase(FA_id);
                        o = 2;
                        break;
                        //LoadDataFromDB();


                    }else if(toupper(ConfirmDeleteFa) == 'N'){
                        //cout<<"Program exited!!!";
                        break;
                    }
                }else if(option3 == 9){
                    //cout << "Program exited!!!";
                    break;
                }
            }while(option3 != 9);
        }else if(position == 3){
            cout << "\n\tExited the program!!!";
            break;
        }
    }
    mysql_close(connection);
}
