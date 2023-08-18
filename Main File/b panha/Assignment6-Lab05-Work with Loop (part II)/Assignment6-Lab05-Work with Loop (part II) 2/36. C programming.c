#include<stdio.h>
main(){
    int num,i,freq[10],j;
    printf("Enter a number: "); scanf("%d",&num);

    for(i=0;i<10;i=i+1){
        freq[i]=0;
    }
    while(num>0){
        i=num%10;
        num=num/10;
        freq[i]=freq[i]+1;
    }
    for(i=0; i<10; i=i+1){
        printf("Frequency of %d = %d\n", i, freq[i]);
    }
}
