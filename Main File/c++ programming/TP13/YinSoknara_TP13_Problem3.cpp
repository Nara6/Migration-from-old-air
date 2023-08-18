#include<iostream>
using namespace std;

int multiplyArrayElement(int a[], int size);

int main(){
    int size,result;
    cout<<"Multiplication of element in array!";
    cout<<"\n\tEnter size of array: "; cin>>size;
    int arr[size];
    cout<<"\nThere are "<<size<<" size.";
    for(int i=0; i<size; i++){
        cout<<"\nEnter a value element "<<i+1<<" : "; cin>>arr[i];
    }
    result = multiplyArrayElement(arr,size);
    cout<<"The multiplication of element = "<<result;
}
// array[5] = {2,3,4,5,6} = 720
int multiplyArrayElement(int a[],int size){
    int hold_value;
    //base case
    if(size == 0){
        return 1;
    //general case
    }else{
        hold_value = multiplyArrayElement(a,size-1);
        hold_value = hold_value * a[size-1];
        return hold_value;
    }
}
