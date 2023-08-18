#include<stdio.h>

typedef struct{
    char street_number[20];
    char house_number[20];
    char village[20];
    char district[20];
}Address;
typedef struct{
    char student_ID[20];
    char citizen_ID[20];
    char name[20];
    char major[20];
    char uni_name[20];
    Address address;
    int age;
}Student;
void StoreInfoStudent(Student std[], int size){
    printf("||---------------------->> Store Information of Student <<--------------------||\n");
    for(int i=0; i<size; i++){
        printf("Student #%d", i+1);
        printf("\n\tStudent ID: "); scanf("%s",std[i].student_ID);
        printf("\tCitizen ID: "); scanf("%s",std[i].citizen_ID);
        printf("\tStudent Name: "); scanf("%s",std[i].name);
        printf("\tAge: "); scanf("%d",&std[i].age);
        printf("\tMajor: "); scanf("%s",std[i].major);
        printf("\tUniversity Name: "); scanf("%s",std[i].uni_name);
        printf("\tStreet Number: "); scanf("%s",std[i].address.street_number);
        printf("\tHouse Number: "); scanf("%s",std[i].address.house_number);
        printf("\tVillage: "); scanf("%s",std[i].address.village);
        printf("\tDistrict: "); scanf("%s",std[i].address.district);
    }
}
void DisplayInfoStudent(Student std[], int size){
    printf("------------------------------------------------------------- Display Information of Student -----------------------------------------------------------------\n");
    printf("%-15s%15s%15s%15s%15s%15s%15s%15s%15s%15s","|Student ID|","|Citizen ID|","|Name|","|Age|","|Major|","|Uni_Name|","|St.N|","|House.N|","|VILLAGE|","|DISTRICT|");
    for(int i=0; i<size; i++){
        printf("\n\n%-15s%15s%15s%15d%15s%15s%15s%15s%15s%15s",std[i].student_ID,std[i].citizen_ID,std[i].name,std[i].age,std[i].major,std[i].uni_name,std[i].address.street_number,std[i].address.house_number,std[i].address.village,std[i].address.district);
    }
}
void FindOldest(Student std[],int size){
    printf("\n\n------------------------------------------------------------- Display Oldest Age -----------------------------------------------------------------\n");
    printf("%-15s%15s%15s%15s%15s%15s%15s%15s%15s%15s","|Student ID|","|Citizen ID|","|Name|","|Age|","|Major|","|Uni_Name|","|St.N|","|House.N|","|VILLAGE|","|DISTRICT|");
    int oldest = std[0].age;
    for(int i = 0; i < size; i++){
        if (std[i].age>oldest){
            oldest = std[i].age;
        }
    }
    for(int i=0; i<size; i++){
        if(oldest==std[i].age){
            printf("\n\n%-15s%15s%15s%15d%15s%15s%15s%15s%15s%15s",std[i].student_ID,std[i].citizen_ID,std[i].name,std[i].age,std[i].major,std[i].uni_name,std[i].address.street_number,std[i].address.house_number,std[i].address.village,std[i].address.district);
        }
    }
}
void FindYoungest(Student std[], int size){
    printf("\n\n------------------------------------------------------------- Display Youngest Age -----------------------------------------------------------------\n");
    printf("%-15s%15s%15s%15s%15s%15s%15s%15s%15s%15s","|Student ID|","|Citizen ID|","|Name|","|Age|","|Major|","|Uni_Name|","|St.N|","|House.N|","|VILLAGE|","|DISTRICT|");
    int youngest = std[0].age;
    for(int i = 0; i < size; i++){
        if (std[i].age<youngest){
            youngest = std[i].age;
        }
    }
    for(int i=0; i<size; i++){
        if(youngest==std[i].age){
            printf("\n\n%-15s%15s%15s%15d%15s%15s%15s%15s%15s%15s",std[i].student_ID,std[i].citizen_ID,std[i].name,std[i].age,std[i].major,std[i].uni_name,std[i].address.street_number,std[i].address.house_number,std[i].address.village,std[i].address.district);
        }
    }
}

main(){
    Student size[6];
    int hold_size = 6;
    StoreInfoStudent(size,hold_size);
    DisplayInfoStudent(size,hold_size);
    FindOldest(size,hold_size);
    FindYoungest(size,hold_size);
}