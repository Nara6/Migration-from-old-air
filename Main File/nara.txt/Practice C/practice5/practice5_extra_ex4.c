#include<stdio.h>

int main(){

    int i, n;

    printf("Enter n value: "); 
    scanf("%d", &n); 

    if (n%2==0){
        printf("Your input number is Even: ");
        for(i=2;i<=n;i=i+2)
        printf("%d ", i); 
    }
    else if(n%2!=0){
        printf("Your input number is Odd: ");
        for(i=1;i<=n;i=i+2)
        printf("%d ", i);
    }
    


}