#include <stdio.h>
main(){
    int n, i, k;
    printf("Enter an integer in decimal number system: "); scanf("%d", &n);
    printf("%d in binary number system is: ", n);

    for (i=10;i>=0;i--){
        k=n>>i;
        if(k&1){
            printf("1");
        }
        else{
            printf("0");
        }
    }
}
