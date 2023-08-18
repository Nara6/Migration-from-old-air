#include<stdio.h>


main(){
    int num;
    printf("Enter a number : ");
    scanf("%d",&num);
    if (num%2==0){
        printf("The number is even");
    }

    else if (num==0){
        printf("The number is Zero");
    }
    else{
        printf("The number is odd");
    }

}
