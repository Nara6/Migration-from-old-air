#include<stdio.h>
//Exercise4
int main(){
   int hour, minute, second, sectoTime;
   printf("Please Enter Your Seconds: "); scanf("%d", &sectoTime);

   hour = (sectoTime/3600);
   minute = (sectoTime-(3600*hour))/60;
   second = (sectoTime-(3600*hour) - (60*minute));

   printf("It is:%dh%dmn%ds ", hour, minute, second);
}