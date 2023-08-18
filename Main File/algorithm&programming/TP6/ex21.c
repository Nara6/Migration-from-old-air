#include<stdio.h>
main(){
    int num,i,first=0,second=1,next;
    printf("Enter a number: "); scanf("%d",&num);
    printf("The fibonacci number of %d term is ",num);
    for(i=0;i<num;i++){
        if(i<=1){
            next=i;
        }
        else{
            next=first+second;
            first=second;
            second=next;
        }
        printf("%d ",next);
    }
}
