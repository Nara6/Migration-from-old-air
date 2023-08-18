#include<stdio.h>
#include<string.h>
main(){
    char cha[50];
    int i;

    printf("Enter a string: "); gets(cha);
    i=strlen(cha)-1;
    for(i;i>=0;i--){
        printf("%c",cha[i]);
    }
}
