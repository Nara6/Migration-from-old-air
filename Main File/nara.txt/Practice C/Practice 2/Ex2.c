#include <stdio.h>
#include <string.h>

main(){
    char adjective[20] ,noun[20], tgt[30];

    printf("Enter Adjective: ");                            scanf("%s", adjective);
    printf("Enter Noun: ");                                 scanf("%s", noun);
    strcpy(tgt, adjective);
    strcat(tgt," ");
    strcat(tgt, noun);
    printf("%s", tgt);
}