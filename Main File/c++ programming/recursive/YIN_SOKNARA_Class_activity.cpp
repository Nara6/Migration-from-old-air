#include<iostream>
using namespace std;

//task1
int CalculateFac(int n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n*CalculateFac(n-1);
    }
}
//task2
int CalculateSuitFibo(int n){
    if(n==0 || n==1){
        return 1;
    }else{
        return CalculateSuitFibo(n-1)+CalculateSuitFibo(n-2);
    }
}
//task3
int SumLoop(int n){
    if(n==1){
        return 1;
    }else{
        return n + SumLoop(n-1);
    }
}
//task4Problem1
int CalculateSummation(int n){
    if(n==2){
        return 2;
    }else{
        return n + CalculateSummation(n-2);
    }
}
//task4Problem2
void DisplayMessage(int start, int end){
    if(end>start){
        if(start == end-1){
            cout<<"Hello "<<start+1;
        }else{
            cout<<"Hello "<<start+1<<"\n";
        }
        DisplayMessage(start+1, end);
    }
}
//task4Problem3
int FindNumberDigit(int n){
    if(n==0){
        return 0;
    }else{
        return FindNumberDigit(n/10)+1;
    }
}
int main(){
    float num,result,result1,result2,result3,result4,result5;
    cout<<"Enter a number: "; cin>>num;
    result = CalculateFac(num);
    cout<<"The Factorial of "<<num<<" is "<<result;
    cout<<"\nSuit Fibonacci!";
    result1 = CalculateSuitFibo(num);
    cout<<"Suit Fibonacci of "<<num<<" = "<<result1;
    cout<<"\nSum User Input!";
    result2 = SumLoop(num);
    cout<<"\nSum = 1+2+3+....+n";
    cout<<"\nSummation = "<<result2;
    result3 = CalculateSummation(num)/num;
    cout<<"\nSummation = "<<result3;
    DisplayMessage(0,num);
    result5 = FindNumberDigit(num);
    cout<<"The Digit of number = "<<result5;

}