#include<stdio.h>
main(){
    int num=0;
    char chr;

    while(num<=128){
        chr=num;
        printf("'%c' number %d, ",chr,num);
        num++;
    }
}
