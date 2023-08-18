#include<iostream>
using namespace std;

int findMinElement(int array[], int size);

int main(){
    int size,result;
    cout<<"Please Enter size of array: "; cin>>size;
    int array[size];
    for(int i=0; i<size; i++){
        cout<<"\tEnter a Value of element "<<i+1<<" : "; cin>>array[i];
    }
    result = findMinElement(array,size);
    cout<<"Minimuim element = "<<result;
}
// array[5] = {3,5,4,-1,5}; min = -1;
int findMinElement(int array[],int size){
    int min;
    if(size!=1){
        min = findMinElement(array,size-1);
        if(min<array[size-1]){
            return min;
        }else{
            return array[size-1];
        }
    }else{
        return array[0];
    }
}