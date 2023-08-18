#include<iostream>
using namespace std;
// sub program 
void findMinMax(int num[], int *max, int *min){
    *min = num[0];
    *max = num[0];
    for(int i = 0; i <7; i++){
        if(*min>num[i]){
            *min = num[i];
        }
        if(*max<num[i]){
            *max = num[i];
        }
    }
}

int main(){
    int num[7],min,max;
    for(int i=0; i<7; i++){
        cout<<"Enter a number: "; cin>>num[i];
    }
    findMinMax(num, &max, &min);
    cout<<"Minimuim: "<<min<<endl;
    cout<<"Maximuim: "<<max<<endl;
}