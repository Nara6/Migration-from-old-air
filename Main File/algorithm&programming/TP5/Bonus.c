#include<stdio.h>

main(){
    int i,j, mn ,mx ,sum=0;
    printf("Help input minimum number: ");
    scanf("%d",&mn);
    printf("Help output maximum number: ");
    scanf("%d",&mx);
    printf("The prime numbers between %d and %d are: \n",mn,mx);
    for(i=mn; i<=mx; i++){
        int status = 0;
        for(j=2; j<i; j++){
            if(i%j==0){
                status=1;
            }
        }
        if(status==0){
            sum = sum+i;
            printf("%d, ",i);
        }
    }
    printf("\nSummation of all primary = %d",sum);
}