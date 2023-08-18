
#include <iostream>
#include <stack>
using namespace std;

int main(){
    stack<int> s1;
    s1.push(2);
    s1.push(5);
    s1.push(7);
    s1.pop();
    s1.pop();
    s1.peek();
    while(!s1.empty()){
        cout<<s1.top()<<" ";
        s1.pop();
    }
}