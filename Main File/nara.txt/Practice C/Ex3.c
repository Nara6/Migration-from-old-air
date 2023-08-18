#include<stdio.h>
int main(){
   int hour, minute, second, timeinSec;
   
   printf("Please Enter hour:"); scanf("%d", &hour);
   printf("Please Enter minute:"); scanf("%d", &minute);
   printf("Please Enter second:"); scanf("%d", &second);
   timeinSec = second + (minute*60) + (hour*60*60);
   printf("\n It is:%d ", timeinSec);
   
}