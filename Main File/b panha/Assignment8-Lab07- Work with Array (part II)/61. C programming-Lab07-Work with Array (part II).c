#include<stdio.h>
main(){
    int myarray[8],i,n,count=0,index[8],j=0;

    for(i=0;i<8;i++){
        printf("Enter a number1(0-9): ");
        scanf("%d",&myarray[i]);
    }
    printf("Enter any n number(0-9): ");
    scanf("%d",&n);
    for(i=0;i<8;i++){
        if(n==myarray[i]){
            count++;
            index[j]=i;
            j++;
        }
    }
    printf("\nThe number %d appear %d time in myarray.\n",n,count);
    if(count>=1){
        printf("The number %d appear in position ",n);
        for(j=0;j<count;j++){
            printf("%d ",index[j]);
        }
    }
}
