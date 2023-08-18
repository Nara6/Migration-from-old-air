//exercise
#include <stdio.h>
//Exercise1
int main() {
   char name[10], gender[10];
   int age, phoneNumber;
   printf("Enter your name:"); scanf("%s", &name);
   printf("Enter your gender:"); scanf("%s", &gender);
   printf("Enter your age:"); scanf("%d", &age);
   printf("Enter your phone Number:"); scanf("%d", &phoneNumber);

   printf("Hello,%s!\n Your age is %d years old\n Your gender is %s\n Your Phone number is %d", name , age , gender, phoneNumber);
}
//Exercise2
int main() {
   char character;
   int num;

   printf("Please Enter the Character:"); scanf("%c", &character);
   printf("Please Enter the number:"); scanf("%d", &num);

   printf("\n%c", character);
   printf("\n%d %d", num, num);
   printf("\n%c %c %c ", character, character, character);
   printf("\n%d %d %d %d ", num, num, num, num);
}
//Exercise3
int main(){
   int hour, minute, second, timeinSec;
   
   printf("Please Enter hour:"); scanf("%d", &hour);
   printf("Please Enter minute:"); scanf("%d", &minute);
   printf("Please Enter second:"); scanf("%d", &second);
   timeinSec = second + (minute*60) + (hour*60*60);
   printf("\n It is:%d ", timeinSec);
   
}
//Exercise4
int main(){
   int hour, minute, second, sectoTime;
   printf("Please Enter Your Seconds: "); scanf("%d", &sectoTime);
   hour = sectoTime/3600;
   minute = sectoTime/360;
   second = sectoTime/60;
   printf("It is:%d%d%d ", hour, minute, second);
}
//Exercise5
int main(){
    int num1,num2, inone;
    float x,y;
    printf("f1=3x-2y");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);
    num1 =3*x;
    num2 =2*y;
    inone = num1-num2;
    printf("f1= %d", inone);
}
//===================================>>>>>>>>point2
int main(){
    int inone;
    float x,y;
    printf("f2=(x+y)^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);
    inone = (x+y)*(x+y);
    printf("f1= %d", inone);
}
//===================================>>>>>>>>point3
int main(){
    int inone;
    float x,y;
    printf("f3=x^2+2xy+y^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);

    inone = (x*x)+(2*x*y)+(x*y);
    printf("f1= %d", inone);
}
//===================================>>>>>>>>>point4
int main(){
    int inone;
    float x,y;
    printf("f4=(y^3+x^2/(xy)^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);

    inone = (y*y*y)+(x*x)/(x*y)*(x*y);
    printf("f1= %d", inone);
}
//===================================>>>>>>>>>point4
int main(){
    int inone;
    float x,y;
    printf("f5=(x^2+2xy+y^2)/(x+y)^2");
    printf("\n Please Enter the value of x:"); scanf("%f", &x);
    printf("Please Enter the value of y:"); scanf("%f", &y);

    inone = (x*x + 2*x*y +y*y)/(x+y)*(x+y);
    printf("f1= %d", inone);
}

