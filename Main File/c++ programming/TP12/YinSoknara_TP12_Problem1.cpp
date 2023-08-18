#include<iostream>
using namespace std;

struct student{
    string name,
    sex,
    major;
    int age;
};
student Student;
int main(){
    cout<<"--------------Student Insert Section-------------!\n";
    cout<<"\tName: "; cin>>Student.name;
    cout<<"\tSex: "; cin>>Student.sex;
    cout<<"\tMajor: "; cin>>Student.major;
    cout<<"\tAge: "; cin>>Student.age;
    cout<<"\n\n------------- Display Info Student -----------------\n";
    if(Student.sex =="M" || Student.sex =="m"){
        cout<<"Hi, Mr."<<Student.name<<", your age is "<<Student.age<<" year old and you learn "<<Student.major<<"";
    }else{
        cout<<"Hi, Mrs."<<Student.name<<", your age is "<<Student.age<<" year old and you learn "<<Student.major<<"";
    }

}