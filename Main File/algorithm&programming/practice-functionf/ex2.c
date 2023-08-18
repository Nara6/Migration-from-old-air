#include<stdio.h>

int calculat(int a, int b, int c){
    int sum;
    sum = a + b + c;
    return sum;
}
main(){
    int a, b, c;
    int check;
    printf("Enter value a: ");
    scanf("%d",&a);
    printf("Enter value b: ");
    scanf("%d",&b);
    printf("Enter value c: ");
    scanf("%d",&c);
    check = calculat(a,b,c);
    printf("The summation is: %d", check);
}
