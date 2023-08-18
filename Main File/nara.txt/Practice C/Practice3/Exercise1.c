#include<stdio.h>
#include<string.h>

int main(){
    char text[20];
    char k;

    printf("Enter a text: ");
    scanf("%s", text); 

    k=text[0];

    if (k>64&&k<90){
        printf("The first letter is upper-case" );
    }
    else if(k>96&&k<123){
        printf("The first letter is lower-case"); 

    }
    else{
        printf("The frist letter is symbol!");
    }
    
    

    

    
}