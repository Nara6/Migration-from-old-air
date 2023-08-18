#include<stdio.h>

main(){
    //ex1
    printf("###########################//Génie Informatique et Communiation//###########################\n");
    //ex2
    int num , sq , cube;
    printf("Please Input the numbers :");
    scanf("%d",&num);
    sq = num * num;
    cube = num * num * num;
    printf("Square of %d is %d, cube of %d is %d ", num, sq, num ,cube);
    //ex3
    int time , min , hour , sec;
    printf("\n Enter the hour: ");
    scanf("%d", &hour);
    printf("\n Enter the min: ");
    scanf("%d", &min);
    printf("\n Enter the sec: ");
    scanf("%d", &sec);
    time = (hour * 3600 + min * 60 + sec);
    printf("The above time is equal to %d seconds ", time);
    printf("\n%dh%dmn%ds equal to %d seconds ",hour,min,sec, time);
    int second,hour,min,sec;
    printf("Please input time in seconds: ");
    scanf("%d",&second);
    hour = second / 3600;
    min = (second - (3600*hour))/60;
    sec = (second - (3600*hour)-(min*60));
    printf("It is: %dh %dm %ds ",hour,min,sec);

}