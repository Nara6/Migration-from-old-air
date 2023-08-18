#include<stdio.h>
#include <mysql.h>
#include <stdlib.h>
#include<string.h>
//using namespace std;
MYSQL *conn;
MYSQL_ROW row;
MYSQL_RES * res;
char *query;

struct Fa{
    int id;
    char fa_type[5];
    char *description;
};
typedef struct Fa Fa;
Fa *getFaDescription(int id){
    Fa *detail;
    detail=(Fa*)malloc(sizeof(Fa));
    conn = mysql_init(0);
    conn = mysql_real_connect(conn, "localhost", "root", "", "automata", 0, NULL, 0);
    //store data of table fa
    sprintf(&query,"SELECT * FROM fa WHERE id=%d;",id);
    mysql_query(conn,&query);
    res=mysql_store_result(conn);
    row=mysql_fetch_row(res);
    if(row[1]==NULL){
        strcpy(detail->fa_type,"No Specify!");
    }else{
        strcpy(detail->fa_type,row[1]);
    }
    strcpy(&detail->description,row[2]);
    mysql_close(conn);
    return detail;
}
int main(){
    Fa *fa;
    fa = getFaDescription(2);
}