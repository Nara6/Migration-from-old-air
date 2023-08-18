#include<stdio.h>
#include<string.h>
main(){

    char first[20];
    int a;
    printf("Input your first name : ");
    gets(first);
    a=strlen(first);
    printf("Your name is %s\n",first);
    printf("The first letter of your name is %c and the last letter of your name is %c.",first[0],first[a-1]);


}
