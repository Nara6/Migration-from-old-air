#include<stdio.h>
#include<time.h>
#include <stdlib.h>
int main(){
    int n,i=1;
        srand(time(0));
    int min=10, max=10000;
    while(i<=10){

    n=rand()%max+min;
    printf("%d ",n);
    i=i+1;
    }

}
