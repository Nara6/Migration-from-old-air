#include<stdio.h>
main(){
    int i,a1[7],a2[7];

    for(i=0;i<7;i++){
        printf("Enter the number: ");
        scanf("%d",&a1[i]);
        a2[i]=a1[i];
    }
    printf("The number in a2 is ");

    for(i=6;i>=0;i--){
        printf("%d ",a2[i]);
    }
}
