#include<stdio.h>

typedef struct{
    int h,m,s;
}Time;
void DisplayTime( Time time){
    printf("\nTime :%dh%dmn%d",time.h,time.m,time.s);
}
int ConvertTimetoSeconds( Time time){
    int time_to_seconds;
    time_to_seconds = (time.h*3600 + time.m*60 + time.s);
    return time_to_seconds;
}
Time ConvertSecondTotime( int hold){
    Time time;
    time.h = hold/3600;
    time.m = (hold - (3600*time.h)) / 60;
    time.s = (hold - (3600*time.h)) - (time.m*60);
    return time;
}
Time CalculateDiffTwoTime(Time t1, Time t2){
    Time difference;
    int hold;
    hold = ConvertTimetoSeconds(t2) - ConvertTimetoSeconds(t1);
    difference = ConvertSecondTotime(hold);
    return difference;
}

main(){
    Time t,t1,t2;
    int option;
    while(1>0){
        printf("\n-----------------------Please Select The Option down Below--------------------------\n");
        printf("\n1. Display the Time.");
        printf("\n2. Convert Time to seconds.");
        printf("\n3. Convert Seconds to time.");
        printf("\n4. Calculate Different Two Times.");
        printf("\nPlease Choose the Option Here: ");
        scanf("%d",&option);
        if(option == 1){
            printf("1. Display the Time.");
            printf("\n\tEnter a Time Format(h/m/s): ");
            scanf("%d/%d/%d",&t.h,&t.m,&t.s);
            DisplayTime(t);
        }
        if(option ==2 ){
            int hold;
            printf("\n2. Convert Time to seconds.");
            printf("\n\t Enter a Time format(h/m/s): ");
            scanf("%d/%d/%d",&t.h,&t.m,&t.s);
            hold = ConvertTimetoSeconds(t);
            printf("\nTime :%dh%dmn%d equal to %d seconds",t.h,t.m,t.s,hold);
        }
        if(option ==3 ){
            int second;
            printf("\n3. Convert Seconds to time.");
            printf("\n\t Enter a Seconds: ");
            scanf("%d",&second);
            t = ConvertSecondTotime(second);
            printf("\n%d seconds equal to %dh%dmn%ds",second,t.h,t.m,t.s);
        }
        if(option ==4){
        
            printf("\n4. Calculate Different Two Times.");
            printf("\n Please Enter a first time format(h/m/s): ");
            scanf("%d/%d/%d",&t1.h,&t1.m,&t1.s);
            printf("\n Please Enter a second time format(h/m/s): ");
            scanf("%d/%d/%d",&t2.h,&t2.m,&t2.s);
            t = CalculateDiffTwoTime(t1,t2);
            printf("\n %dh%dmn%d - %dh%dmn%d = %dh%dmn%ds",t2.h,t2.m,t2.s,t1.h,t1.m,t1.s,t.h,t.m,t.s);

        }
    }
}