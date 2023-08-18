//Ask user to input 10numbers.Find indexod the biggest and the smallest number.
#include<stdio.h>
int main(){
    int num[10], i, smallest, biggest;
    for(i=0; i<10; i++){
        printf("Plz Input the value:");
        scanf("%d", &num[i]);
    }
    smallest = biggest = num[0];
    for(i=1; i<10; i++){
        if(biggest<num[i]){
            biggest = num[i];
        }
        if(smallest>num[i]){
            smallest = num[i];
        }
    }
    printf("the biggest number is %d", biggest);
    printf("the smallest number is %d", smallest);

}