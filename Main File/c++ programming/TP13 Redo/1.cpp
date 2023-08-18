#include<iostream>
#include<math.h>
using namespace std;

int power(int m, int n);
int sumSquare(int n);
int main(){
    int m,n,result,result1;
    // cout<<"Calculate m^n!";
    // cout<<"\n\tEnter a value m: "; cin>>m;
    // cout<<"\tEnter a value n: "; cin>>n;
    // result = power(m,n);
    // cout<<"The "<<m<<"^"<<n<<" = "<<result;
    cout<<"\nSum Square 1^2 + 2^2 +...+ n^2";
    cout<<"\n\tEnter a value of n: "; cin>>n;
    result1 = sumSquare(n);
    cout<<"1^2 + 2^2 +...+ n^2: "<<result1;
}
// Ex 3^3 = 3*3*3; = 27
int power(int m,int n){
    int sub_result;
    if(n==0){
        return 1;
    }else{
        sub_result = power(m,n-1);
        sub_result = sub_result*m;
        return sub_result;
    }
}
// Ex 1^2 + 2^2 + 3^2 4^2 = 2+5+9+16 = 16
int sumSquare(int n){
    int sub_result;
    if(n==0){
        return n;
    }else{
        sub_result = sumSquare(n-1);
        sub_result = sub_result + power(n,2);
        return sub_result;
    }
}