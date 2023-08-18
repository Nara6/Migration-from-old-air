#include <stdio.h>
#include<string.h>
main(){
    char firstname[20], lastname[20], fullname[20];
    
    printf("Please input your Firstname: ");
    scanf("%s",firstname);
    printf("Please input your Lastname: ");
    scanf("%s",lastname);
    strcpy(fullname,firstname);
    strcat(fullname, "_");
    strcat(fullname,lastname);
    printf("Username of the user is: %s", fullname);

}
