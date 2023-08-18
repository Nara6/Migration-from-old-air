#include<stdio.h>
long long findFactorial(int n);

main(){
    int n;
    long long result;
    printf("Enter a number: "); scanf("%lld",&n);
    result=findFactorial(n);
    printf("The result of Factorial number is %lld",result);
}
long long findFactorial(int n){
    long long result=1;
    for(int i=2;i<=n;i++){
        result=result*i;
    }
    return result;
}
