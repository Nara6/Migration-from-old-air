#include<stdio.h>
#include<string.h>
int main(){
    char text[100];
    printf("Enter the Text: \n ");
    scanf("%s", text);
    printf("%s", strrev(text));
}