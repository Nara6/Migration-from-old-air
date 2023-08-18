#include<stdio.h>
main(){
    int num,i,status,j;
    printf("Enter a number: "); scanf("%d",&num);

    for(i=1;i<=num;i++){
        status=1;
        for(j=2;j<i;j=j+1){
            if(i%j==0){
                status=-1;
                break;
            }
        }
        if(status==1){
            printf("%d ",i);
        }

    }

}
