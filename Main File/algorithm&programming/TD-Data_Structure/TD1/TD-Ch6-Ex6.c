#include<stdio.h>
#include<string.h>

// Structure of student
typedef struct Student{
    char surname[30], name[20], id[15], sex;
    int age;
}Student;

// Display info student
void displayInfoSt(Student st){
    printf("%-25s%-15s%-16s%-4c%d\n", st.surname, st.name, st.id, st.sex, st.age);
}

void enterInfoSt(Student st[], int size){
    for(int i=0; i<size; i++){
        printf("Student #%d\n", i+1);
        printf("\    Surname: "); gets(st[i].surname); if(i!=0){gets(st[i].surname);}
        printf("\    Name: "); scanf("%s", &st[i].name);
        printf("\    ID: "); scanf("%s", &st[i].id);
        printf("\    Sex: "); scanf("%c", &st[i].sex); scanf("%c", &st[i].sex);
        printf("\    Age: "); scanf("%d", &st[i].age);
        printf("\n");
        if(i==size-1){
            printf("|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n");
        }
    }
}

void displayInfoListSt(Student st[], int size){
    printf("\n------------------------ Student list -------------------------\n");
    printf("%-25s%-15s%-15s%-5s%s\n", "Surname", "Name", "ID", "Sex", "Age");
    for(int i=0; i<size; i++){
        displayInfoSt(st[i]);
    }
}

// Search student by ID
void displayStbyID(Student st[], int size){
    Student st1;
    printf("\tSearch ID: "); scanf("%s", &st1.id);
    printf("\n%-25s%-15s%-15s%-5s%s\n", "Surname", "Name", "ID", "Sex", "Age");
    for(int i=0; i<size; i++){
        if(strcmp(st[i].id, st1.id)==0){
            displayInfoSt(st[i]);
        }else{
            printf("\nInvalid Student\n");
        }
    }
}

// Delete student by ID
void delStbyID(Student st[], int size){
    Student st1;
    printf("\tSearch ID: "); scanf("%s", &st1.id);
    printf("\n---------------------- New student list ---------------------\n");
    printf("%-25s%-15s%-15s%-5s%s\n", "Surname", "Name", "ID", "Sex", "Age");
    for(int i=0; i<size; i++){
        if(strcmp(st[i].id, st1.id)==0){
            continue;
        }else if(strcmp(st[i].id, st1.id)!=0){
            printf("\nInvalid Student\n");
            // state =1;
        }else{
            displayInfoSt(st[i]);
        }
    }
    //if(state ==1 ){
        ////
    }
}

main(){
    int size = 1;
    Student st[size];
    enterInfoSt(st, size);
    displayInfoListSt(st, size);
    printf("===============================================================\n");

    printf("\n>>> Search a student by ID.\n");
    displayStbyID(st, size);
    printf("===============================================================\n");

    printf("\n>>> Delete a student by ID.\n");
    delStbyID(st, size);
    printf("===============================================================\n");
}
