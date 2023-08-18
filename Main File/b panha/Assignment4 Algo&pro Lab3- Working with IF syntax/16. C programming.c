#include<stdio.h>
main(){
    int n1,n2,n3,n4,n5,n6,n7,min;
    printf("Enter the first number : "); scanf("%d",&n1);
    printf("Enter the second number : "); scanf("%d",&n2);
    printf("Enter the third number : "); scanf("%d",&n3);
    printf("Enter the fourth number : "); scanf("%d",&n4);
    printf("Enter the fifth number : "); scanf("%d",&n5);
    printf("Enter the sixth number : "); scanf("%d",&n6);
    printf("Enter the seventh number : "); scanf("%d",&n7);
    min=n1;
    if (min>n2){
        min=n2;
    }
    if (min>n3){
        min=n3;
    }
    if (min>n4){
        min=n4;
    }
    if (min>n5){
        min=n5;
    }
    if (min>n6){
        min=n6;
    }
    if (min>n7){
        min=n7;
    }

    printf("The minimum number is %d.",min);
}
