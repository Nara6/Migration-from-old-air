#include<stdio.h>
#include<string.h>
typedef struct {
    int day;
    int month;
    int year;
}Date;
typedef struct {
    char name[20];
    int phone;
    Date DOB;
    int salary;
    Date SWD;
    char gender[10];
}Employee;
void enterData( Employee employee[]){

//========a) A function to ask a user to enter info and store in array void enterData(Employee emp[]);

    // to store data of employee
    for(int i=0; i<7; i++){
        printf("==========================PLEASE INPUT YOUR INFORMATION DOWN BELOW============================");
        printf("\nInfo of employee #%d", i+1);
        printf("\n\tEnter your name: "); scanf("%s",&employee[i].name);
        printf("\tEnter your phone Number: "); scanf("%d",&employee[i].phone);
        printf("\tEnter your Date of Birth(DD/MM/YYYY): "); scanf("%d/%d/%d",&employee[i].DOB.day,&employee[i].DOB.month,&employee[i].DOB.year);
        printf("\tEnter your salary: "); scanf("%d",&employee[i].salary);
        printf("\tEnter your Start working Date(DD/MM/YYYY): "); scanf("%d/%d/%d",&employee[i].SWD.day,&employee[i].SWD.month,&employee[i].SWD.year);
        printf("\tEnter your Gender(M/F): "); scanf("%s",&employee[i].gender);
    }
}
void displayData( Employee employee[] ){

    //to display Data of employee
    printf("\nName: \t\tGender: \t\tPhone(+855): \t\t\tDOB: \t\t\tSalary($): \t\t\tSarting_date:");
    for(int i=0; i<7; i++){
        printf("\n%s\t\t%s\t\t\t%d\t\t%d/%d/%d\t\t%d\t\t\t\t%d/%d/%d",employee[i].name,employee[i].gender,employee[i].phone,employee[i].DOB.day,employee[i].DOB.month,employee[i].DOB.year,employee[i].salary,employee[i].SWD.day,employee[i].SWD.month,employee[i].SWD.year);
    }
}
void displayHighestSalary( Employee employee[] ){
    printf("\n-------------------------------------------The Employees Who Got The highest salary is: ---------------------------------------------");
    printf("\nName: \t\tGender: \t\tPhone(+855): \t\t\tDOB: \t\t\tSalary($): \t\t\tSarting_date:");
    //to find the employees who got the most salary
    int highest = employee[0].salary;
    for (int i=0; i<7; i++){
        if (employee[i].salary>highest){
            highest = employee[i].salary;
        }
    }
    for(int i=0; i<7; i++){
        if(highest == employee[i].salary){
            printf("\n%s\t\t%s\t\t\t%d\t\t%d/%d/%d\t\t%d\t\t\t\t%d/%d/%d",employee[i].name,employee[i].gender,employee[i].phone,employee[i].DOB.day,employee[i].DOB.month,employee[i].DOB.year,employee[i].salary,employee[i].SWD.day,employee[i].SWD.month,employee[i].SWD.year);
        }
    }
}
float findLowestSalary( Employee employee[]){
    // find lowest salary 
    float lowest = employee[0].salary;
    for(int i=0; i<7; i++){
        if(employee[i].salary<lowest){
            lowest = employee[i].salary;
        }
    }
    return lowest;
}
main(){
    Employee size[7];
    enterData(size);
    displayData(size);
    displayHighestSalary(size);
    printf("\n The Lowest Salary which Among all of the employees is : %.2f", findLowestSalary(size));
}