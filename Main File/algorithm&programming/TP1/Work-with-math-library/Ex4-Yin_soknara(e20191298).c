#include<stdio.h>
main(){
    int second,hour,min,sec;
    printf("Please input time in second(s): ");
    scanf("%d",&second);
    hour = second / 3600;
    min = (second - (3600*hour))/60;
    sec = (second - (3600*hour)-(min*60));
    printf("It is: %dh %dm %ds ",hour,min,sec);

}