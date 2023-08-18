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
    Employee employee[10];
    FILE *file;
    FILE *f2;
    int i=0,a=0;
    file = fopen("data.txt","r");
    f2 = fopen("data.txt","a");
    while(fscanf(file,"%s %s %s %s %d %s",&employee[i].ID,&employee[i].name,&employee[i].gender,&employee[i].email,&employee[i].salary,&employee[i].phone_number)!=EOF){
        i = i + 1;
    }
    for(int k=0; k<i; k++){
        printf("%-15s%15s%15s%25s%15d%15s\n",employee[k].ID,employee[k].name,employee[k].gender,employee[k].email,employee[k].salary,employee[k].phone_number);
    }
    for(int j=a; j<a+3; j++){
        printf("\n\nEmployee #%d",j+1);
        printf("\n\tID: "); scanf("%s",&employee[i].ID);
        printf("\tName: "); fflush(stdin); scanf("%s",&employee[j].name); 
        printf("\tGender: "); fflush(stdin); scanf("%s",&employee[j].gender);
        printf("\tEmail: "); fflush(stdin); scanf("%s",&employee[j].email);
        printf("\tSalary: "); scanf("%d",&employee[j].salary);
        printf("\tPhone Number: ");fflush(stdin); scanf("%s",&employee[j].phone_number);
        fprintf(f2, "%-15s%15s%15s%25s%15d%15s\n",employee[j].ID,employee[j].name,employee[j].gender,employee[j].email,employee[j].salary,employee[j].phone_number);
    }
    fclose(f2);
}
