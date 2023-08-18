#include<stdio.h>
#include<string.h>
#include<stdlib.h>
//Write a program in C program store data of 6 employees.
main(){
    char name[6][20], gender[6][20];
    int salary[6], phone_number[6], highest_salary,lowest_salary, sum=0;
    float avg;
    printf("==============>>> Please Input Your Information Down below!!! <<<==============\n");
//=====>>>>The program ask user for info of these 6 employees.
//======>>>>>Each employee has name, gender, salary, and phone number. 
    for(int i=0; i<6; i++){
        printf("N%c : %d \n",167,i+1);
        printf("Input Your Name: ");
        scanf("%s",&name[i]);
        
        printf("Input Your Gender(M||F): ");
        scanf("%s",&gender[i]);

        printf("Input Your Phone Number: ");
        scanf("%d",&phone_number[i]);

        printf("Input Your Your Salary: ");
        scanf("%d",&salary[i]);
        sum = sum + salary[i];
    }
    // a).Display info of employee who got the highest salary.
    highest_salary = salary[0];
    for(int j=0; j<6; j++){
        if(highest_salary > salary[j]){
            continue;
        }else if(highest_salary < salary[j]){
            highest_salary = salary[j];
        }
    }
    printf("==============================================================================================================================\n");
    printf("\t\t\t\t\t\t|Name: \t\t|Gender: \t\t|Salary: \n");
    printf("==============================================================================================================================\n");
    for(int u=0 ; u<6 ; u++)
    {
        if(highest_salary == salary[u])
        {
            printf("|The Employee that has the highest salary is|: ");
            printf("\t%s \t\t %s \t\t\t %d ", name[u], gender[u], salary[u]);
        }
    }
    //b) Display info of employee who got the lowest salary.
    lowest_salary = salary[0];
    for(int y=0; y<6; y++) {
        if(lowest_salary < salary[y]) {
            continue;
        }else if(lowest_salary > salary[y]){
            lowest_salary = salary[y];
        }
    }
    for(int u=0 ; u<6 ; u++)
    {
        if(lowest_salary == salary[u])
        {
            printf("\n|The Employee that has the lowest salary is|: ");
            printf("\t%s \t\t %s \t\t\t %d ", name[u], gender[u], salary[u]);
        }
    }
    //c) Display info of all employees whose gender are males.
    printf("\n==============================================================================================================================\n");
    printf("\t\t\t|Name: \t\t|Gender: \t\t|Salary: \n");
    printf("==============================================================================================================================\n");
    printf("|The males employee|: ");
    for(int k=0; k<6; k++){
        if(strcmp(gender[k],"M")==0 || strcmp(gender[k],"m")==0){
            printf("\t %s \t\t %s \t\t\t %d \n", name[k], gender[k], salary[k]);
        }
    }
    printf("\n==============================================================================================================================");
    printf("\n\t\t\t\t\t\t\t|Name: \t\t|Gender: \t\t|Salary: \n");
    printf("==============================================================================================================================\n");
    //d) Display info of all employees who have salary more than the average.
    printf("|The Employee that has the salary than the average is|: ");
    avg = sum / 6;
    for(int v=0; v<6; v++){
        if(salary[v] > avg){
            printf("%s \t\t %s \t\t\t %d ", name[v], gender[v], salary[v]);
        }
    }
    printf("\n==============================================================================================================================\n");

}