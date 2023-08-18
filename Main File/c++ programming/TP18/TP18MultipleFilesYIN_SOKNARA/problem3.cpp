#include<sstream>
#include<fstream>
using namespace std;

int main(){
    int n = 10;
    for(int i=1; i<=1000; i++){
        fstream file;
        file.open("file"+to_string(i)+".txt", ios::out);
        for(int j=i; j<=10*i; j++){
            file<<j<<",";
        }
        file.close();
    }
}