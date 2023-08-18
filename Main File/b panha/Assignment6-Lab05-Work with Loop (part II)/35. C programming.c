#include<stdio.h>
main(){
    int num,i,reverse=0,original;
    printf("Enter a number: ");
    scanf("%d",&num);
    original=num;

    while(num>0){
        i=num%10;
        reverse=(reverse*10)+i;
        num=num/10;
    }
    if(original==reverse){
        printf("The enter number is palindrome number.");
    }
    else{
        printf("The enter number isn't palindrome number.");
    }
}
