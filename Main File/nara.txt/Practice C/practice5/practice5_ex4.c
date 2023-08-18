#include<stdio.h>

int main(){
    int n;

    printf("Input number: ");
    scanf("%d", &n);

    int i;
    printf("Odd: ");
    for(i=1;i<=n;i=i+2)
    printf("%d ", i);

    printf("\nEven: ");
    for(i=2; i<=n; i=i+2)
    printf("%d ", i);
}
