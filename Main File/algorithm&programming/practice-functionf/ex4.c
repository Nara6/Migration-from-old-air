#include<stdio.h>
#include<string.h>

void checkString(char a,char text[20])
{
    int i;
    int s=0;
    for(i=0;text[i]!='\0';i++)
    {
        if(text[i]==a)
        {
            s=1;
            break;
        }
    }
    if(s==1)
    {
        printf("\nCharacter is in text.");
    }
    else
    {
        printf("\nCharacter is not in text.");
    }
}
main()
{
    char text[20];
    char a;
    printf("Enter a string: ");
    gets(text);
    printf("Enter a character: ");
    scanf("%c",&a);
    checkString(a,text);
}
