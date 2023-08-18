#include<stdio.h>
//=============>> Display numbers in a2 from back to forth
main(){
    int a2[7], a1[7];

    for(int i=0; i<7; i++){
        printf("Enter a Number: ");
        scanf("%d",&a1[i]);
        a2[i] = a1[i];
    }
    for(int i=6; i>=0; i--){
        printf("%d ",a2[i]);
    }
}