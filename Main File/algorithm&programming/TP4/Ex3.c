#include<stdio.h>

main(){
    int n1,n2,n3,n4,n5,n6,n7,minimum;
    printf("Please Input the first number: ");
    scanf("%d",&n1);
    printf("Please Input the second number: ");
    scanf("%d",&n2);
    printf("Please Input the third number: ");
    scanf("%d",&n3);
    printf("Please Input the fourth number: ");
    scanf("%d",&n4);
    printf("Please Input the fifth number: ");
    scanf("%d",&n5);
    printf("Please Input the sixth number: ");
    scanf("%d",&n6);
    printf("Please Input the seventh number: ");
    scanf("%d",&n7);
    minimum=n1;
    if (minimum>n1){
        minimum=n1;
    }
    if (minimum>n2){
        minimum=n2;
    }
    if (minimum>n3){
        minimum=n3;
    }
    if (minimum>n4){
        minimum=n4;
    }
    if (minimum>n5){
        minimum=n5;
    }
    if (minimum>n6){
        minimum=n6;
    }
    if (minimum>n7){
        minimum=n7;
    }
    printf("The minimum number is %d",minimum);
}