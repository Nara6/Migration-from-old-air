#include<iostream>
#include"MyQueue_YINSOKNARA.h"
#include<string.h>
using namespace std;
int main(){
    Queue *q1;
    string text ;
    q1 = createEmptyQueue();
    cout<<"Enter a Text: "; getline(cin,text);
    for(int i=0;i<text.length();i++){
        if(text[i]>=65 && text[i]<=90 || text[i]>=97 && text[i]<=122){
            enQueueText(q1,text[i]);
        }else if(text[i] == '*'){
            Dequeue(q1);
        }
    }
    cout<<"\nThe text after Dequeu: ";
    if(q1->n==0){
        cout<<"--------- NULL! ------------";
    }else{
        displayCharInQueue(q1);
    }
}