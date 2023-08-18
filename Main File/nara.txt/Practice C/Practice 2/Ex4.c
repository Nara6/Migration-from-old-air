#include<stdio.h>
#include<string.h>
main(){
    char name[40];
    int c = strlen(name) - 1;
    printf("Enter Ya Name: ");                      scanf("%s", name);
    printf("your name is %s", name);
    printf("\n The First letter of Your name is %c and the last letter is %c", name[0], name[5]);
}
