#include<stdio.h>
main(){
    int i,st,en,sum=0,mul=1;
    printf("Input the start number : ");
    scanf("%d",&st);
    printf("Input the end number : ");
    scanf("%d",&en);

    printf("The number is ");
    for(i=st;i<=en;i=i+1){
            printf("%d,",i);
        sum=sum+i;
        mul=mul*i;

    }
    printf("\n\tThe summation of the above number is: %d",sum);
    printf("\n\tThe multiplication of the above number is: %d",mul);

}