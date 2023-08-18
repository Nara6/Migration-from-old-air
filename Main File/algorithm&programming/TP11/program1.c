#include<stdio.h>

typedef struct{
    char ID[15];
    char name[20];
    char email[20];
    char gender[20];
    int salary;
    char phone_number[20];
}Employee;

main(){
    Employee employee[5];
    FILE *file;
    file = fopen("data.txt","w");
    // fprintf(file,"%-15s%15s%15s%25s%15s%15s\n","ID:","Name:","Gender:","Email:","Salary:","Phone:");
    for(int i=0; i<5; i++){
        printf("Employee #%d",i+1);
        printf("\n\tID: "); scanf("%s",&employee[i].ID);
        printf("\tName: "); fflush(stdin); scanf("%s",&employee[i].name); 
        printf("\tGender: "); fflush(stdin); scanf("%s",&employee[i].gender);
        printf("\tEmail: "); fflush(stdin); scanf("%s",&employee[i].email);
        printf("\tSalary: "); scanf("%d",&employee[i].salary);
        printf("\tPhone Number: ");fflush(stdin); scanf("%s",&employee[i].phone_number);
        fprintf(file, "%-15s%15s%15s%25s%15d%15s\n",employee[i].ID,employee[i].name,employee[i].gender,employee[i].email,employee[i].salary,employee[i].phone_number);
    }
    fclose(file);
}