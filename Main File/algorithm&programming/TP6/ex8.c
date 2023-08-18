#include<stdio.h>
///==========================>>>> Ex8
main(){
    int n,m,i,j, sum=0;
    printf("Enter a Number n: ");
    scanf("%d",&n);
    printf("Enter a Number m: ");
    scanf("%d",&m);
    printf("All primary numbers between[%d,%d]: ",n,m);
    for(i=n; i<m; i=i+1 ){
        int status=0;
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
    if(n>m){
        printf("n should  be always less than m");
    }
}