#include<stdio.h>
main(){
    int i,j,k=0,sum=0,num[5][5];

    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            k=k+1;
            sum=sum+k;
            num[i][j]=k;
        }
    }
    for(i=0;i<5;i++){
        for(j=0;j<5;j++){
            printf("%d\t",num[i][j]);
        }
        printf("\n");
    }
    printf("\n");
    for(i=0;i<5;i++){
        for(j=4;j>=0;j--){
            printf("%d\t",num[i][j]);
        }
        printf("\n");
    }
    printf("\n");
    printf("The sum of data in 2D array is %d",sum);
}
