#include<stdio.h>
#include<string.h>
main(){

    char first[20], last[20];
    printf("Input your first name : ");
    scanf("%s",&first);
    printf("Input your last name : ");
    scanf("%s",&last);
    strcat(first,"_");
    strcat(first,last);
    printf("Username of the user is: %s",first);


}
