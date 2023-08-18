#include<iostream>
using namespace std;
int main(){
    int option,subOption1;
    string description,symbol,position;
    int numState,numFinalState;
    do{
        cout<<"===================\n";
        cout<<"        MENU       \n";
        cout<<"1. Create FA.\n";
        cout<<"2. Load FA from Database.\n";
        cout<<"3. Edit FA.\n";
        cout<<"4. Delete FA.\n";
        cout<<"5. Exit\n";
        cout<<"===================";
        cout<<"\nOption: "; cin>>option;
        switch(option){
            case 1: 
            cout<<"Description: "; cin>>description;
            cout<<"Number of symbols: "; cin>>numState;
            for(int i=0; i<numState; i++){
                cout<<"symbol #"<<i+1<<": "; cin>>symbol[i];
            }
            cout<<"Number of states: "; cin>>numState;
            cout<<"Number of final states: "; cin>>numFinalState;
            for(int i=0; i<numFinalState; i++){
                cout<<"Mark position #"<<i+1<<": "; cin>>position[i];
            }
            // for(int i=1; i<=numState; i++){
            //     if(state)
            // }
            case 5:
                break;
        }
    }while(option!=0);
}