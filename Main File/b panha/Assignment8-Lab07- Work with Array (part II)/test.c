#include<stdio.h>

main(){
    int k[5][5],z=0,i,j;
    for(i=0; i<5; i++){
        for(int j=0; j<5; j++){
            z = z+1;
            k[i][j]=z;
        }
    }
    for(i=0; i<5; i++){
        for(int j=0; j<5; j++){
            printf("%d\t",k[i][j]);
        }
        printf("\n");
    }
}