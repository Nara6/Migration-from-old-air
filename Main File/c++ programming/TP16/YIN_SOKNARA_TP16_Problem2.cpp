#include<iostream>
#include"YIN_SOKNARA-SingleLinkList.h"
using namespace std;
int main(){
    List *ls;
    ls = emptyList();
    int n;
    cout<<"Enter a number: "; cin>>n;
    for(int i=1; i<=n; i++){
        addToEndOfList(ls,i);
    }
    displayList(ls);
}