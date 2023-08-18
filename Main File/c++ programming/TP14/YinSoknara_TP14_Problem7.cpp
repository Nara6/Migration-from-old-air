#include<iostream>
#include<math.h>
using namespace std;

void sum1(double *sum,int n){
    *sum = 0;
    for(int i=1;i<n; i++){
        *sum = *sum + (1/pow(i,2));
    }

}
double sum2(int n){
    double sum = 0;
    for(int i=1;i<n;i++){
        sum = sum + (1/pow(i,2));
    }
    return sum;
}

int main(){
    double result;
    sum1 (&result,5);
    cout<<result<<endl;
    result = sum2(5);
    cout<<result;
}