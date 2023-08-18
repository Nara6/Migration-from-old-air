#include<iostream>
#include<graphics.h>
using namespace std;

class Student{
    private:
        int studentID;
        float score;
        string name;
        string pin;
    public:
        void displayInfo(){
            cout<<"Name: "<<name;
            cout<<"\nID: "<<studentID;
            cout<<"\nScore: "<<score;
            cout<<"\n\n";
        }
        int getID(){
            return studentID;
        }
        string getname(string pin1);
        void setData(int ID1, float score1, string name1){
            name = name1;
            studentID = ID1;
            score = score1;
            pin = "123";
        }
};
string Student::getname(string pin1){
    if(pin == pin1){
        return name;
    }else{
        return "\nPin not correct";
    }
}
int main(){
    Student s1;
    s1.setData(123,90,"Jackie");
    s1.displayInfo();
    //s1.getname(123);
    cout<<s1.getname("123");
    // Student s2;
    // for(int i=0; i<2; i++){
    //     cout<<"Enter name: "<<
    // }
    // s2.setData(123,90,"Jackie");
    // s2.displayInfo();
}