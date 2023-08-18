#include<stdio.h>
main(){
    //ex3
    int time , min , hour , sec;
    printf("\n Enter the hour: ");
    scanf("%d", &hour);
    printf("\n Enter the minute: ");
    scanf("%d", &min);
    printf("\n Enter the second: ");
    scanf("%d", &sec);
    time = (hour * 3600 + min * 60 + sec);
    printf("The above time is equal to %d seconds. ", time);
    printf("\n%dh%dmn%ds equal to %d seconds. ",hour,min,sec, time);
}