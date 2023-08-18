#include<stdio.h>
main(){
    int i,num[7],max,semax;

    for(i=0;i<7;i++){
        printf("Enter the number%d: ",i+1);
        scanf("%d",&num[i]);
    }
    max=-9999999999;
    for(i=0;i<7;i++){
        if(max<num[i]){
            semax=max;
            max=num[i];
        }
    }
    printf("The largest number is %d and the second largest is %d",max,semax);
}
