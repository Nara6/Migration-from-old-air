#include<stdio.h>
#include<string.h>
void testIfExist(char s[50], char c);
main(){
    char cha;
    char string[50];
    printf("Enter a string: "); gets(string);
    printf("Enter a character: "); scanf("%c",&cha);
    testIfExist(string,cha);
}
void testIfExist(char s[50], char c){
    int n,status;
    n=strlen(s);
    for(int i=0;i<n;i++){
        if(s[i]==c){
            status=1;
            printf("The character %c exist in string %s",c,s);
            break;
        }
    }
    if(status!=1){
        printf("The character %c not exist in string %s",c,s);
    }
}
