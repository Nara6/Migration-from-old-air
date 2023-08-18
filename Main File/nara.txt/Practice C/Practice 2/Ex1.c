#include <stdio.h>
#include <string.h>
main(){
    char name1[20], name2[20];
    printf("Enter Name:");                           scanf("%s", name1);

    printf("\n Hello %s", strcpy(name2,name1));
}