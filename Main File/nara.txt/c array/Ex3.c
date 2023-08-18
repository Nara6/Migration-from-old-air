//Ask user to input 10numbers.Find indexod the biggest and the smallest number.
#include<stdio.h>
int main(){
    int num[5];
    int i, smallest,biggest;
    for(i=0;i<5;i++){
        printf("Plz input value:");
        scanf("%d",&num[i]);
    }
    smallest = biggest = num[0];
    for(i=1;i<5;i++){
        if(num[i]>biggest){
            biggest = num[i];
        }
        if(num[i]<smallest){
            smallest = num[i];
        }
    }
    printf("%d",biggest);
    printf("\n%d",smallest);
}