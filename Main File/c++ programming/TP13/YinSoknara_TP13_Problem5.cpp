#include<iostream>
using namespace std;

int findSumArray(int array[],int size);
int sum=0;
int main(){
    int size,result;
    cout<<"Enter a size of array: "; cin>>size;
    int array[size];
    for(int i=0; i<size; i++){
        cout<<"Enter a element "<<i+1<<" : "; cin>>array[i];
    }
    result = findSumArray(array,size);
    cout<<"The summation is equal to "<<result;
}
// array[6] = {2,3,4,5,6,7} sum = 27;
int findSumArray(int array[],int size){
    int i;
    if(size>0){
        i = size - 1;
        sum = sum + array[i];
        findSumArray(array,i);
        return sum;
    }
}
int findSumArrayMethod2(int array[],int size){
    if(size==0){
            return 0;
        }else{
            sum = findSumArray(array,size-1);
            sum = sum + array[size-1];
            return sum;
        }
}