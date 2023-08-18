#include<stdio.h>
main(){
    int n,i=1,num=1;
    printf("Enter a number: "); scanf("%d",&n);

    while(i<=n){
        num=num*i;
        i++;
    }
    printf("The number is: %d",num);
}
