#include<stdio.h>
#include<string.h>
main(){

    char sting[100];
    printf("Input a string : ");
    gets(sting);
    strlwr(sting);
    strrev(sting);
    printf("Output: %s",sting);
}

