#include<iostream>
#include<fstream>
using namespace std;

int main(){
    fstream file1;
    file1.open("test.txt", ios::out);

    file1<<"Welcome to File IO";
    file1.close();
}