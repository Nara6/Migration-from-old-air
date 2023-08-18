#include<stdio.h>
#include<string.h>
main(){

    char text[100];
    printf("Input a piece of text : ");
    gets(text);
    strupr(text);
    printf("Uppercase: %s",text);

}
