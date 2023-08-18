#include<stdio.h>
//=======>>>>> Display all numbers in array
main(){
    int num[10];

    for(int i=0; i<10; i++){
        printf("Enter a Number: ");
        scanf("%d",&num[i]);
    }
    for(int i=0; i<10; i++){
        printf("%d ",num[i]);
    }
}