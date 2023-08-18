#include<stdio.h>
#include<math.h>
main(){
    int num,i,n,j=1,remainder,digit,m,power,result;
    printf("Enter a number: "); scanf("%d",&num);
    printf("The armstrong number between 1 to %d: ",num);
    for(i=1;i<=num;i=i+1){
        n=i;
        m=i;
        digit=0;
        result=0;
        while(j<=n){
            n=n/10;
            digit = digit+1;
        }
        while(j<=m){
            remainder=m%10;
            m=m/10;
            power=pow(remainder,digit);
            result=result+power;
        }
        if(i==result){
            printf("%d  ",i);
        }
    }
}
