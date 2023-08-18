#include<mysql.h>
#include<sstream>
#include<stdlib.h>
#include <cstdio>
#include<iostream>
#include<string.h>

MYSQL_RES *result;
MYSQL_ROW row;
MYSQL *connection, *mysql;
char *query;
string command;


void DisplayFaSymbol(string id){
    command = "Select alphabet.id,symbol From fa join alphabet on fa.id = fa_id where fa_id = '"+id+"';";
    mysql_query( connection, command.c_str());
    result = mysql_store_result(connection);
    printf(" ---------------\n");
    printf(" | %-2s | %-5s | \n","ID","Symbol");
    printf(" ---------------\n");
    while(row = mysql_fetch_row(result)){
        printf(" | %-2s |    %-3s | \n", row[0], row[1]);
    }
    printf(" ---------------\n");
    mysql_free_result(result);
}
void DisplayFaSymbolV1(int id){
    command = "Select symbol FROM FA join alphabet on fa.id = fa_id where fa.id = '"+id+"';";
    mysql_query( connection, command.c_str());
    result = mysql_store_result(connection);
    printf(" ---------------\n");
    printf(" | %-2s \n","Symbol");
    printf(" ---------------\n");
    while(row = mysql_fetch_row(result)){
        printf(" | %-2s | \n", row[0]);
    }
    printf(" ---------------\n");
    mysql_free_result(result);
}



void DisplayFaState(string id){
    command = "Select states.id,state,start_state,final_state From fa join states on fa.id = fa_id where fa_id = '"+id+"';";
    mysql_query(connection, command.c_str());
    result = mysql_store_result(connection);
    printf(" ------------------------------------------\n");
    printf(" | %-2s | %-2s | %-5s | %-10s | \n","ID", "State", "Start_state", "Final_state");
    printf(" ------------------------------------------\n");
    while(row = mysql_fetch_row(result)){
        printf(" | %-2s |   %-2s  |      %-5s  |      %-5s  |  \n", row[0], row[1], row[2],row[3]);
    }
    printf(" ------------------------------------------\n");
    mysql_free_result(result);
}
void DisplayTransition(string fa_ID){
    command = "Select state_id,symbol_id,next_state_id from transition join alphabet on alphabet.id = symbol_id where fa_id = '"+fa_ID+"' order by state_id;";
    mysql_query(connection, command.c_str());
    result = mysql_store_result(connection);
    printf(" ----------------------------------------\n");
    printf(" | %-2s | %-5s | %-10s | \n", "state_id", "symbol_id", "next_state_id");
    printf(" ----------------------------------------\n");
    while(row = mysql_fetch_row(result)){
        printf(" |     %-2s   |     %-5s |       %-6s  | \n", row[0], row[1], row[2]);
    }
    printf(" ----------------------------------------\n");
    mysql_free_result(result);
}
void LoadDataFromDB(){

    mysql_query (connection, "Select * from fa;");
    result = mysql_store_result(connection);
    printf(" ---------------------------------------------------------------------------------------\n");
    printf(" | %-2s | %-15s | %-60s |\n", "ID", "FA Type", "Description");
    printf(" ---------------------------------------------------------------------------------------\n");
    while(row = mysql_fetch_row(result)){
        printf(" | %-2s | %-15s | %-60s | \n", row[0], row[1], row[2]);
    }
    printf(" ---------------------------------------------------------------------------------------\n");

    string fa_access_id;
    cout<<"\nEnter fa id: ";
    cin>>fa_access_id;

//    cout<<"\n ----------------------\n";
//    cout<<" | 1. Load Symbol     |"<<endl;
//    cout<<" | 2. Load State      |"<<endl;
//    cout<<" | 3. Load transition |"<<endl;
//    cout<<" ----------------------\n";

//    int choice;
//    cout<<"\nEnter your choice: ";
//    cin>>choice;
//    cout<<endl;

//    switch(choice){
//        case 1:
            DisplayFaSymbol(fa_access_id);
//            break;
//        case 2:
            DisplayFaState(fa_access_id);
//            break;
//        case 3:
            DisplayTransition(fa_access_id);
//            break;
//    }

//    mysql_query (connection, "Select * from states;");
//    // cout << connection;
////    if (connection == NULL)
////    {
////        cout << mysql_error(mysql)<<endl;
////        // return tables;
////    }
//    result = mysql_store_result(connection);
//    // std::cout << "tables: " << mysql_num_rows(result) << std::endl;
//    printf("\n");
//    printf(" ---------------------------------------------------------------------------------------\n");
////    printf(" | %-2s | %-15s | %-60s |\n", "ID", "FA Type", "Description");
//    printf(" ---------------------------------------------------------------------------------------\n");
//
//    while ((row = mysql_fetch_row(result))){
////        printf(" | %-2s | %-15s | %-60s | %-65s| %-70s\n", row[0], row[1], row[2],row[3],row[4]);
//        printf("%-2s\t%s\t%s\t%s\t%s\n",row[0],row[1],row[2],row[3],row[4]);
//    }
//    printf(" ---------------------------------------------------------------------------------------\n");

    mysql_free_result(result);
    mysql_close(connection);
}
void getFADescription(int fa_id){
    char fa_type[5];
    char *description;

    connection = mysql_real_connect(mysql,"127.0.0.1","root","","Automata",0,0,0);

    // cout << connection;
    result = mysql_store_result(connection);
    // std::cout << "tables: " << mysql_num_rows(result) << std::endl;
    sprintf(query,"SELECT * FROM fa WHERE id=%d;",fa_id);
    mysql_query(connection,query);
    result=mysql_store_result(connection);
    row=mysql_fetch_row(result);
    if(row[1]==NULL){
        strcpy(fa_type,"No Row!");
    }else{
        strcpy(fa_type,row[1]);
    }
    strcpy(description,row[2]);
    mysql_free_result(result);
    mysql_close(connection);
}

//List **LoadFA(int id){
//    int nstate;
//    nstate = findnumberstate(id);
//    List *newList[nstate];
//    newFA = new List;
//    newFA = createEmptyList();
//
//
//}

int findnumberstate( int id){

    mysql_query (connection, "Select * from states;");
    result = mysql_store_result(connection);
    int i=0;
    while ((row = mysql_fetch_row(result))){
        if(stoi(row[1]) == id){
            i++;
        }
    }
    return i;
    mysql_free_result(result);
    mysql_close(connection);
}
