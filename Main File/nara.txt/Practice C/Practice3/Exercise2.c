#include<stdio.h>

int main(){
    int n1;
    int n2;
    int n3;

    printf("Enter number n1: ");
    scanf("%d", &n1);

    printf("Enter number n2: ");
    scanf("%d", &n2);

    printf("Enter number n3: ");
    scanf("%d", &n3);

    if (n1>n2&&n1>n3){
        printf("The maximum number is %d\n", n1);

    }
    else if (n2>n1&&n2>n3){
        printf("The maximum number is %d\n", n2);

    }
    else if (n3>n1&&n3>n2){
        printf("The maximum number is %d\n", n3);
    }
    if (n1<n2&&n1<n3){
        printf("The minimum number is %d\n", n1);

    }
    else if (n2<n1&&n2<n3){
        printf("The minimum number is %d\n", n2);

    }
    else if (n3<n1&&n3<n2){
        printf("The minimum number is %d\n", n3);
    }
    
    





}