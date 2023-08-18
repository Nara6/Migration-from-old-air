#include<stdio.h>
main(){
    int num,n,i,j,sum;
    printf("Enter a number: "); scanf("%d",&num);
    printf("The perfect number is ");
    for(i=1;i<=num;i++){
        sum=0;
        j=1;
        while(j<i){
            n=i%j;
            if(n==0){
                sum=sum+j;
            }
            j++;
        }
        if(sum==i){
            printf("%d ",i);
        }
    }
}
