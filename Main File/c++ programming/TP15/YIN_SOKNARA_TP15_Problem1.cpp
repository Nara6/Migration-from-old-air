#include<iostream>
using namespace std;
// We want to storea list of all engineer students’IDat ITC
// (more students are added every year thus the list should be able to store unlimited numberofstudentIDs). 
// Definea linked list data structure for this kind of problem.
//  Hint: Create a structure element and list. Data in element is ITC’s student ID.
struct Element{
    int studentID; //student ID
    Element *next;
};
struct List{
    int n;
    Element *head;
    Element *tail;
};

int main(){
    
}