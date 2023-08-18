//================ EX5
#include<stdio.h>

main(){
    char gender;
    char name[20];
    float salary,tax;

    printf("Input your gender(M/F) : "); scanf("%c",&gender);
    printf("Input your name : "); scanf("%s",&name);
    printf("Input your salary($) : "); scanf("%f",&salary);

    if (gender=='M'|gender=='m'){
        if (salary>300){
            tax=(salary/100.0)*10;
        }
        else if (salary>=200){
            tax=(salary/100.0)*5;
        }
        else {
            tax=0;
        }
    }
    else if (gender=='F'|gender=='f'){
        if (salary>300){
            tax=(salary/100.0)*5;
        }
        else if (salary>=250){
            tax=(salary/100.0)*3;
        }
        else {
            tax=0;
        }
    }
    printf("\nHi %s, based on your given information, the tax salary that you need to pay is: %.2f USD.",name,tax);
    printf("\nFinal salary to received is: %.2f - %.2f = %.2f", salary,tax,(salary-tax));

}
