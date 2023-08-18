#include <stdio.h>
#include <string.h>
main(){
    char text[100];
    printf("Please input the text: ");
    scanf("%s",text);
    printf("uppercase: %s", strupr(text));

}