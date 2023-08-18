#include<iostream>
using namespace std;


struct Person{
    string name;
    char sex;
    float salary;
};
int main(){
    float tax;
    Person person;
    cout<<"---------------Insert Info Below---------------\n";
    cout<<"\tName: "; cin>>person.name;
    cout<<"\tGender: "; cin>>person.sex;
    cout<<"\tSalary: "; cin>>person.salary;
    if(person.sex=='M'||person.sex=='m'){
        if(person.salary>1000){
            tax = (person.salary/100)*10;
        }else if(person.salary>=500 && person.salary<=1000){
            tax = (person.salary/100)*7;
        }else if(person.salary<500){
            tax = (person.salary/100)*5;
        }
    }
    if(person.sex=='F'||person.sex=='f'){
        if(person.salary>1000){
            tax = (person.salary/100)*8;
        }else if(person.salary>=500 && person.salary<=1000){
            tax = (person.salary/100)*5;
        }else if(person.salary<500){
            tax = (person.salary/100)*3;
        }
    }
    if(person.sex=='F'||person.sex=='f'){
        cout<<"\nHI, Mrs."<<person.name<<" you have to pay tax "<<tax<<"$";
    }else if(person.sex=='M'||person.sex=='m'){
        cout<<"\nHI, Mr."<<person.name<<" you have to pay tax "<<tax<<"$";
    }


}