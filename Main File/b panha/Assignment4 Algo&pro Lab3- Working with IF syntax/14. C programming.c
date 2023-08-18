#include<stdio.h>
main(){
    int n1;
    printf("Input a number : ");
    scanf("%d",&n1);
    if (n1>0){
        printf("The number is positive.");
    }
    else if (n1==0){
        printf("The number Zero is neutral number.");
    }
    else{
        printf("The number is negative.");
    }


}
