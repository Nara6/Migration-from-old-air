#include<stdio.h>
main(){
    int num,n,i,j,sum;
    printf("Enter a number: "); scanf("%d",&num);
    printf("The perfect number between 1 to %d is: ",num);
    for(i=1;i<=num;i=i+1){
        sum=0;
        j=1;
        while(j<i){
            n=i%j;
            if(n==0){
                sum=sum+j;
            }
            j = j+1;
        }
        if(sum==i){
            printf("%d ",i);
        }
    }
}
