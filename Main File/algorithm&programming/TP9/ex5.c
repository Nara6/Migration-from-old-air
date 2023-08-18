// Problem-5 Write a function to compute how much tax a person should pay. This function takes user name, salary, and gender as parameters. Following rules are used to find tax:
// -Female person with salary less than 300$, pay tax 5%.
// -Female person with salary between 300 and 500, pay tax 7.5%.
// -Female person with salary more than 500$, pay tax 10%.
// -Male person with salary less than 300$, pay tax 6%.
// -Male person with salary between 300 and 500, pay tax 8.5%.
// -Male person with salary more than 500$, pay tax 12%.

// This function compute tax and return values.
#include<stdio.h>
float findTax(char name[],float salary,char sex){
    float tax;
    if(sex=='F'||sex=='f'){
        if(salary<=300){
            tax = (salary/100)*5;
        }else if(salary==300 && salary==500){
            tax = (salary/100)*7.5;
        }else if(salary>500){
            tax = (salary/100)*10;
        }else{
            tax =0;
        }
    }else if(sex=='M'||sex=='m'){
        if(salary<=300){
            tax = (salary/100)*6;
        }else if(salary==300 && salary==500){
            tax = (salary/100)*8.5;
        }else if(salary>500){
            tax = (salary/100)*12;
        }else{
            tax = 0;
        }
    }
    return tax;
}

main(){
    while(1>0){
        float hold_value;
        float salary;
        char name[20], sex;
        printf("------------------------------------Please Input Your Information Down Below!!!--------------------------------");
        printf("\n\tENTER YOUR SEX: "); scanf("%c",&sex);
        printf("\tENTER YOUR NAME: "); scanf("%s",&name);
        printf("\tENTER YOUR SALARY: "); scanf("%f",&salary);
        hold_value = findTax(name,salary,sex);
        printf("%s have to pay tax %.2f\n",name,hold_value);
    }
}