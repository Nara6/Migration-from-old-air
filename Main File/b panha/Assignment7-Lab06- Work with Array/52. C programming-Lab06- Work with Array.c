#include<stdio.h>
main(){
    int num[10],k;

    for(k=1;k<=10;k++){
        printf("Enter a number: ");
        scanf("%d",&num[k]);
    }
    for(k=1;k<=10;k++){
        printf("%d ",num[k]);
    }
}
