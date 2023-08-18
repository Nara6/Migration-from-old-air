#include<stdio.h>

main(){
    int num;
    printf("Please Input your Number: ");
    scanf("%d",&num);
    if (num>=0){
        printf("%d is the positive number",num);
    }
    else{
        printf("%d is the negative number",num);
    }

}