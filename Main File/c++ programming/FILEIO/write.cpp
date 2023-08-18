#include<iostream>
#include<fstream>

using namespace std;

int main(){
    fstream f1;
    int ID;
    string name;
    string gender;

    f1.open("test.txt", ios::out);
    for(int i=0; i<=3; i++){
        cout<<"Enter your info (ID name gender) seperate by space: ";
        cin>>ID>>name>>gender;
        // f1<<ID<<"\t"<<name<<"\t"<<gender<<endl;
        if(i!=3){
            f1<<ID<<"\t"<<name<<"\t"<<gender<<endl;
        }else{
            f1<<ID<<"\t"<<name<<"\t"<<gender;
        }
    }
    f1.close();
}