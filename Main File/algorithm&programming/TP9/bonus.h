#include<stdio.h>

int checkInvalidDate(int day,int month,int year){
    int status=0;
    int daysinmonth[12]={31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    // leap year checking, if ok add 29 days to february
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)){
        daysinmonth[1]=29;
    }
   // days in month checking
    if (month<13)
    {
        if( day <= daysinmonth[month-1] )
        status=1;
    }

    if(status==1){
        printf("\nIt is a valid date!\n\n");
    }
    else{
        printf("\nIt's not valid date!\n\n");
    }
}
int Summation(int num){
    int n,sum=0;
    n = num-1;
    for(int i=1; i<=n; i++){
        sum = sum +i;
    }
    return sum;
}
int FindSquareEven(int num){
    int sum=0;
    for(int i=1; i<=num; i++){
        if(num%2==0){
            sum = sum + (i*i);
        }
    }
    return sum;
}
int FindSummationDigits(int num){
    int sum = 0;
    int Reminder;
    while(num>0){
        Reminder = num % 10;
        sum = sum + Reminder;
        num = num / 10;
    }
    return sum;
}