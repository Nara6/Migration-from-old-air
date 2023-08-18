#include<stdio.h>
main(){
    int num,remainder,n,m,i=1,power,digit=0,result=0;
    printf("Enter a number: "); scanf("%d",&num);

    n=num;
    m=num;
    while(i<=n){
        n=n/10;
        digit++;
    }
    while(i<=m){
        remainder=m%10;
        m=m/10;
        power=pow(remainder,digit);
        result=result+power;
    }
    if(num==result){
        printf("The number is an armstrong number.");
    }
    else{
        printf("The number is not an armstrong number.");
    }
}
