// WRITE A PROGRAM IN C PROGRAM TO STORE DATA OF 4 EMPLOYEES. EACH EMPLOYEES HAS NAME,GENDER,SALARY.
// 1./ DISPLAY INFO OF EMPLOYEES WHO GOT OF THE LOWEST SALARY.
// 2./ DISPLAY INFO OF ALL EMPLOYEES WHOSE GENDER ARE MALES.
// 3./ DISPLAY INFO OF ALL EMPLOYEES WHO HAVE SALARY MORE THAN THE AVERAGE.
#include<stdio.h>

typedef struct {
    char name[20];
    char gender;
    int salary;
}Employee;

Employee Emp[4];
void StoreInfo(){
    for(int i=0; i<4; i++){
        printf("EMPLOYEE #%d",i+1); 
        printf("\n\tNAME: ",Emp[i].name); scanf("%s",&Emp[i].name); fflush(stdin);
        printf("\tGENDER(M/F): ",Emp[i].gender); scanf("%c",&Emp[i].gender); 
        printf("\tSALARY: ",&Emp[i].salary); scanf("%d",&Emp[i].salary);
    }
}
void FindLowest(){
    // printf("%-15s%15s%15s","NAME:","GENDER:","SALARY:");
    int lowest = Emp[0].salary;
    for(int i=0; i<4; i++){
        if(Emp[i].salary<lowest){
            lowest = Emp[i].salary;
        }
    }
    printf("%-15s%15s%15s","NAME:","GENDER:","SALARY:");
    for(int i=0; i<4; i++){
        if(Emp[i].salary==lowest){
            printf("\n%-15s%15c%15d",Emp[i].name,Emp[i].gender,Emp[i].salary);
        }
    }
}
void DisplayMale(){
    printf("\n*** Male:\n");
    printf("\n\n%-15s%15s%15s","NAME:","GENDER:","SALARY:");
    for(int i=0; i<4; i++){
        if(Emp[i].gender=='m'||Emp[i].gender=='M'){
            printf("\n%-15s%15c%15d",Emp[i].name,Emp[i].gender,Emp[i].salary);
        }
    }
}
void SalaryMorethanAVG(){
    float sum = 0;
    float avg;
    printf("\nMore Than AVG:\n");
    for(int i=0;i<4; i++){
        sum = sum + Emp[i].salary;
    }
    avg = sum/4;
    printf("\n\n%-15s%15s%15s","NAME:","GENDER:","SALARY:");
    for(int i=0;i<4; i++){
        if(Emp[i].salary>avg){
            printf("\n%-15s%15c%15d",Emp[i].name,Emp[i].gender,Emp[i].salary);
        }
    }
}
main(){
    StoreInfo();
    FindLowest();
    DisplayMale();
    SalaryMorethanAVG();
}