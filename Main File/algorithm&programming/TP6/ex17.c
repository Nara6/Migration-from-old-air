#include<stdio.h>
#include<math.h>
main(){
    int num,remainder,n,m,i=1,power,digit=0,result=0;
    printf("Enter a number: "); scanf("%d",&num);

    n=num;
    m=num;
    while(i<=n){
        n=n/10;
        digit = digit+1;
    }
    while(i<=m){
        remainder=m%10;
        m=m/10;
        power=pow(remainder,digit);
        result=result+power;
    }
    if(num==result){
        printf("%d is an armstrong number.",num);
    }
    else{
        printf("%d is not an armstrong number.",num);
    }
}
