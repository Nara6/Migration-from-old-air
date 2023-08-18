#include<stdio.h>
main(){

    while(1){
        int i,n;
        int status=1;
        printf("Enter the number: ");
        scanf("%d",&n);

        for(i=2;i<n;i=i+1){
            if(n%i==0){
                status=-1;
                break;
            }
        }
        if(status==1){
            printf("Primary\n");
        }else if(status==-1){
            printf("NOT primary\n");
        }
    }
}
