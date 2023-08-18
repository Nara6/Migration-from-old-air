#include<stdio.h>
main(){
    int i,n,max=0;
    for(i=1;i<=10;i=i+1){
        printf("Enter the number: ");
        scanf("%d",&n);
        if(max<n){
            max=n;
        }
    }
    printf("The max number is %d.",max);
}