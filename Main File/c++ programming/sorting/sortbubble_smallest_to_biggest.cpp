#include<iostream>
using namespace std;
void exchange(int *a, int *b){
    int tmp;
    tmp = *a;
    *a = *b;
    *b = tmp;
}

void sortBubble(int a[], int n){
    bool state;

    for(int i=0; i<n-1; i++){
        state = false;
        for(int j =0; j<n-i-1; j++){
            if(a[j] > a[j+1]){
                exchange(&a[j], &a[j+1]);
                state = true;
            }
        }
        if(state == false){
            break;
        }
    }

}
int main(){
    int a[] = {1,5,-3,90,-54,34};
    int sizearr = sizeof(a)/sizeof(a[0]);
    cout<<sizeof(a[0])<<endl;
    for(int i=0; i<sizearr; i++){
        cout<<a[i]<<" ";
    }
    sortBubble(a,6);
    cout<<endl;
    for(int i=0; i<sizearr; i++){
        cout<<a[i]<<" ";
    }
}