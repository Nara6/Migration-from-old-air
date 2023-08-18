#include<stdio.h>

main(){
    int i,j ,mx ,sum=0;
    printf("Enter a number: ");
    scanf("%d",&mx);
    printf("The prime numbers between 1 and %d are: \n",mx);
    for(i=1; i<=mx; i++){
        int status = 0;
        for(j=2; j<i; j++){
            if(i%j==0){
                status=1;
            }
        }
        if(status==0){
            sum = sum+i;
            printf("%d  ",i);
        }
    }
    printf("\nSummation of all primary = %d",sum);
}