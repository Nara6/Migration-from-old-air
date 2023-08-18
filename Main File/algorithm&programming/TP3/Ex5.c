#include <stdio.h>
#include<string.h>
main(){
    char str[20];
    printf("Enter a string: ");
    scanf("%s", &str);
    printf("%s", strrev(strlwr(str)));
}