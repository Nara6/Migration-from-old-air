#include<stdio.h>

main(){
    int power , num , i , result=1;
    printf("Enter a Number: ");
    scanf("%d", &num);
    printf("Enter a power: ");
    scanf("%d", &power);
    for(i=0; i<power; i=i+1){
        result = result * num;
    }
    printf("%d to power by %d equal to %d", num, power, result);
}