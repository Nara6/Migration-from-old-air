#include<iostream>
using namespace std;

int main(){
    while(1>0){
        char ch;
        char check;
        int state=0;
        cout<<"\nEnter a Character: "; cin>>ch;
        for(int i=97; i<123; i++){
            check = i;
            if(check==ch){
                if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
                    state = 1;
                    break;
                }else{
                    state = 2;
                }
            }
        }
        if(state==1){
            cout<<"\nThe character "<<ch<<" is vowel.";

        }else if(state==2){
            cout<<"\nThe character "<<ch<<" is consonant.";
        }else{
            cout<<"\ninvalid";
        }
    }
    
    
}
