#include<iostream>
using namespace std;

int sum(int num){
    int result;
    if(num==1){
        return num;
    }else{
        return result = num + sum(num-1);
    }
}
int sumNumber(int num){
		int result=0;
		for(int j=0; j<=num; j++){
			result = result + j ;
		}
		return result;
	}

int main(){
    int sum1;
    sum1 = sumNumber(4);
    cout<<sum1;
}