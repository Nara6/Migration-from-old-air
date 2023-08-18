#include <iostream>
using namespace std;

void swap(int *a, int *b){
    int tmp = *a;
    *a = *b;
    *b = tmp;
}
// usage for finding the greatest element of the root
void Heapify(int arr[],int size, int i){
    // initialize largest as the root
    int smallest = i;
    // left_childs
    int left_child = 2*i+1;
    // right_child
    int right_child = 2*i+2;

    // Find if left child is greater than parent
    if(size>left_child && arr[left_child] < arr[smallest]){
        smallest = left_child;
    }
    // Find if right child is greater than parent
    if(size>right_child && arr[right_child] < arr[smallest]){
        smallest = right_child;
    }
    // If largest is not the root, then swap it
    if(smallest != i){
        swap(&arr[i],&arr[smallest]);
        Heapify(arr,size,smallest);
    }

}

void heapSort(int arr[],int size){

    // build max heap
    // (size/2 - 1) is the last non-leaf node)
    int indexLastNonLeaf = size/2 - 1;
    
    for(int i = indexLastNonLeaf; i >= 0; i--){
        Heapify(arr,size,i);
    }
    // One by one extract an element
    // from heap
    for(int i = size-1; i > 0; i--){
        // Move current root to end
        swap(&arr[0],&arr[i]);
        //reduced the heap
        Heapify(arr,i,0);
    }
}

int main(){
    int arr[] = {5,19,-3,6,0};
    int size = sizeof(arr)/sizeof(arr[0]);
    cout<< "Array before sort: "<< endl;
    for(int i=0; i<size; i++){
        cout<< arr[i]<< " ";
    }
    heapSort(arr,size);
    cout<< "\nArray after sort: "<<endl;
    for(int i=0; i<size; i++){
        cout<< arr[i]<< " ";
    }
}