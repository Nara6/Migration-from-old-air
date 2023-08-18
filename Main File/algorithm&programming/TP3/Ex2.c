#include <stdio.h>
#include<string.h>
main(){
    char text[50];
    printf("Please enter your text: ");
    scanf("%s",&text);
    printf("The text \"%s\" has %d characters", text, strlen(text));
}