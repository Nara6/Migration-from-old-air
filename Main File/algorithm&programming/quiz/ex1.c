#include<stdio.h>

main(){
    int i, n, s=0;
    for (i=10; i<=1000; i++){
        for(n=10; n<=i; n++){
            if(i%n==0){
                s=1;
            }
        }
        if(s==0){
            printf("%d  ", i);
        }
        
    }
}