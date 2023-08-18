#include<stdio.h>
#include<string.h>
int main(){
    char text[30];
    int num;
    printf("Enter Your Text: ");                            scanf("%s", text);
    num = strlen(text);
    printf("The Text '%s' have %d characters",text,num); 
}