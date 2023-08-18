#include<stdio.h>
main(){
    int num,i,reverse=0;
    printf("Enter a number: ");
    scanf("%d",&num);

    while(num>0){
        i=num%10;
        reverse=(reverse*10)+i;
        num=num/10;
    }
    printf("The reverse of the enter number is: %d",reverse);
}
