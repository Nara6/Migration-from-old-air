#include<iostream>
#include<math.h>
using namespace std;

//a. A power function to calculate m^n it is m multiply m for n times(m*m*m.....)
int power(int m, int n);
//b. A function to calculate sum of square of first n integer 1^2 + 2^2 +....+ n^2;
int sumSquare(int n);
//c. Sum the digit of a number
int sumDigit(int n);
int main(){
    int n,m,result,result1,result2;
    cout<<"\nCalculate m^n!";
    cout<<"\n\tEnter a value m: "; cin>>m;
    cout<<"\tEnter a value n: "; cin>>n;
    result = power(m,n);
    cout<<"The power of "<<m<<"^"<<n<<" = "<<result;
    cout<<"\nCalculate sum of square 1^2 + 2^2 +....+ n^2";
    cout<<"\n\tEnter a value n: "; cin>>n; 
    result1 = sumSquare(n);
    cout<<"Sum of square 1^2 + 2^2 +....+ n^2: "<<result1;
    cout<<"\nSum Digit Number!";
    cout<<"\n\tEnter a number: "; cin>>n;
    result2 = sumDigit(n); 
    cout<<"Sum digit of Number "<<n<<" = "<<result2;

}

int power(int m,int n){
    int hold_value=1;
    //base case
    if(n>0){
        hold_value = power(m,n-1);
        hold_value = hold_value*m;
        return hold_value;
    }else{
        return hold_value;
    }
}
int sumSquare(int n){
    int hold_result=0;
    if(n>0){
        hold_result = sumSquare(n-1);
        hold_result = hold_result + power(n,2);
        return hold_result;
    }else{
        return hold_result;
    }
}
// 2022  2022%10 = 202.2 remainder = 2 
int sumDigit(int n){
    int sum, remainder;
    if(n>0){
        sum = sumDigit(n/10);
        remainder = n%10;
        sum = sum + remainder;
        return sum;
    }else{
        return 0;
    }
}
