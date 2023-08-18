#include <stdio.h>
#include<string.h>
main(){
    char name[20];
    printf("Enter your name: "); 
    scanf("%s", name);
    printf("Your name is %s.", name);
    printf("The first letter of your name is %c and\n the last letter of your name is %c.", name[0], name[strlen(name)-1] );
}
