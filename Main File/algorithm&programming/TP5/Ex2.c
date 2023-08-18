#include<stdio.h>
main(){
    int m,n,i,j;
    printf("Inout the start number : "); scanf("%d",&m);
    printf("Input the ent number :"); scanf("%d",&n);
    // for loop
    printf("For loop\n");
    for(i=m;i<=n;i=i+1){
        printf("%d ",i);
    }
    //while loop
    printf("\nWhile loop\n");
    i=m;
    while(i<=n){
        printf("%d ",i);
        i=i+1;
    }
    //do while loop
    printf("\nDo while loop\n");
    i=m;
    do{
        printf("%d ",i);
        i=i+1;
    }while(i<=n);
}
