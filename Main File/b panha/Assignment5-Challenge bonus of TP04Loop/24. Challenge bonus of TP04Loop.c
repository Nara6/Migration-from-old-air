#include<stdio.h>
main(){

    int i,j,mn,mx,status,sum=0;
    printf("Enter the minimum number: ");
    scanf("%d",&mn);
    printf("Enter the maximum nmuber: ");
    scanf("%d",&mx);
    printf("The primary number between %d and %d is ",mn,mx);
    for(i=mn;i<=mx;i=i+1){
        status=1;
        for(j=2;j<i;j=j+1){
            if(i%j==0){
                status=-1;
                break;
            }
        }
        if(status==1){
            printf("%d ",i);
            sum=sum+i;
        }

    }
    printf("\nThe summation of primary number above is: %d.",sum);
}
