#include<iostream>
#include<fstream>
using namespace std;
struct student{
    string name;
    string age;
    string gmail;
};
int main(){
    fstream f1,f2;
    student s1[10],s2[10];
    int i=0;
    f1.open("data.txt", ios::in);
    while(!f1.eof()){
        f1>>s1[i].name;
        f1>>s1[i].age;
        f1>>s1[i].gmail;
        i++;
    }
    for(int k=0; k<i; k++){
        cout<<s1[k].name<<" ";
        cout<<s1[k].age<<" ";
        cout<<s1[k].gmail<<"\n";
    }
    f1.close();
    f2.open("data.txt", ios::app);
    for(int j=0;j<3;j++){
        cout<<"\t\tSudent#"<<j+1;
        cout<<"\nName: ";cin>>s2[j].name;//fflush(stdin);
        cout<<"Age: ";cin>>s2[j].age;//fflush(stdin);
        cout<<"Gmail: ";cin>>s2[j].gmail;//fflush(stdin);
        f2<<"\n"<<s2[j].name<<"\t"<<s2[j].age<<"\t"<<s2[j].gmail;
    }
    f2.close();

}