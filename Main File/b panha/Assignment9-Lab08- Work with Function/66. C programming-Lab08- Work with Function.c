#include<stdio.h>
long long computeSeries(int n);
main(){
    int n;
    long long total;
    printf("Enter a number: "); scanf("%d",&n);
    total=computeSeries(n);
    printf("The result of compute series is %lld",total);
}
long long computeSeries(int n){
    long long subresult=1,result,total=1;
    for(int i=2;i<=n;i++){
        subresult=subresult*i;
        result=subresult/i;
        total=total+result;
    }
    return total;
}
