#include<iostream>
#include<fstream>

using namespace std;
struct student{
    int ID;
    string name;
    string gender;
};
student Student_list[100];
int main(){
    fstream f1;
    int ID;
    string name;
    string gender;
    string linetext;
    f1.open("test.txt", ios::in);
    // f1>>s;
    // cout<<s;
    int i=0;
    // while(!f1.eof()){ //read until end of file
    //     f1>>ID>>name>>gender;
    //     cout<<ID<<" "<<name<<" "<<gender<<endl;
    // }
    while(!f1.eof()){ //read until end of fil
        f1>>Student_list[i].ID;
        f1>>Student_list[i].name;
        f1>>Student_list[i].gender;
        i++;
    }
    // getline(f1,linetext);
    // cout<<linetext;
    // while(getline(f1,linetext)){
    //     cout<<" "<<linetext<<endl;
    // }
    for(int k=0; k<i; k++){
        cout<<Student_list[k].ID<<" ";
        // cout<<Student_list[k].name<<" ";
        // cout<<Student_list[k].gender<<"\n";


    }
    f1.close();
}