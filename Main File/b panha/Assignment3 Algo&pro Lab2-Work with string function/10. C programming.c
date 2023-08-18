#include<stdio.h>
#include<string.h>
main(){

    char text[50];
    int a;
    printf("Input the text : ");
    gets(text);
    a=strlen(text);
    printf("The text \"%s\" has %d characters",text,a);

}
