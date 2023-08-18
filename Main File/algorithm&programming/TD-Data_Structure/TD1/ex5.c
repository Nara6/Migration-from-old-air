#include<stdio.h>
typedef struct{
    int h,m,s;
}Time;
//================= a. Display time
void DisplayTime(Time time){
    printf("\n\n--------------------Time Input Display----------------------\n");
    printf("h:%dm:%ds:%d",time.h,time.m,time.s);
}
//=================>> b. Converttimetoseconds
int ConvertimeTosec(Time time){
    //time = (hour * 3600 + min * 60 + sec);
    int timetosec;
    timetosec = (time.h*3600 + time.m*60 + time.s);
    return timetosec;
}
//==================>>> c. ConvertSecondstoTime
int ConvertSectotime(Time time){
    int hold_value;
    hold_value = ConvertimeTosec(time);
    time.h = hold_value / 3600;
    time.m = (hold_value - (3600*time.h)) / 60;
    time.s = (hold_value - (3600*time.h)) - (time.m*60);
    printf("\n---------------- Convert Seconds To time ----------------");
    printf("\nIt is: %dh %dm %ds ",time.h,time.m,time.s);
    return hold_value;
}
void CalculateDifferentTime(Time t1,Time t2,Time end){
    int n,m,d,hold;
    // n = ConvertimeTosec(t1);
    // DifferentTime = ConvertSectotime(ConvertimeTosec(t2) - ConvertimeTosec(t1));
    // m = ConvertimeTosec(t2);
    // d = m - n;
    // ConvertSectotime();
    // printf("\n\n%d",n);
    // printf("\n\n%d",m);
    // printf("\n\n%d",d);

    printf("\n\nThe Different between is equal to %dh %dm %ds ",end.h,end.m,end.s);

}
main(){
    Time t,t1,t2,end;
    int n,y,z;
    printf("\n\tPlease Input Time Format(h/m/s): "); scanf("%d/%d/%d",&t.h,&t.m,&t.s);
    printf("\n---------------- Calculate Different between Two Time -------------------------");
    // printf("\nEnter a First Time Format(h/m/s): "); scanf("%d/%d/%d",&t1.h,&t1.m,&t1.s);
    // printf("Enter a Second Time Format(h/m/s): "); scanf("%d/%d/%d",&t2.h,&t2.m,&t2.s);
    DisplayTime(t);
    n = ConvertimeTosec(t);
    printf("\n---------------- Convert Time To Seconds ----------------");
    printf("\n%dh%dmn%ds equal to %d seconds. ",t.h,t.m,t.s,n);

    ConvertSectotime(t);
    // printf("\n\nThe Different between is equal to %dh %dm %ds ",end.h,end.m,end.s);
    CalculateDifferentTime(t1,t2,end);
}
