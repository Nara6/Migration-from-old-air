#include<iostream>
using namespace std;

void exchange(int *a, int *b){
    int tmp;
    tmp = *a;
    *a = *b;
    *b = tmp;
}
// sort from smallest to largest
void sortSelection(int a1[], int n){
    // find the index of the minimum element
    int maxIndex;

    for(int i = 0; i< n-1; i++){
        maxIndex = i;
        for(int j=i+1;j<n; j++){
            if(a1[j]> a1[maxIndex]){ // value at index j is less than value a1
                maxIndex = j;
            }
        }
        // swap value at Index j with index that has the minimum value
        exchange(&a1[i], &a1[maxIndex]);
    }
}
int main(){
    int a[] = {-1,9,-5,9,43};
    sortSelection(a,5);
    for(int i = 0; i < 5; i++){
        cout<<a[i]<<" ";
    }
}
