//#include<mysql.h>
//
//#include<iostream>
//#include<string.h>
using namespace std;
#include"DB (1).h"


int main(){
    mysql = mysql_init(0);
    connection = mysql_real_connect(mysql,"localhost","root","","Automata",0,NULL,0);

    // LoadDataFromDB();

    int find1;

    find1 = findnumberstate(3);
    cout<<find1;
    DisplayFaSymbolV1(2);

//    List *ArrayofState[find];
//    for(int i=0; i<find; )
}
