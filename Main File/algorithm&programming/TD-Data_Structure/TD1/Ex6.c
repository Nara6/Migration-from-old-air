#include<stdio.h>
#include<string.h>

typedef struct{
    int id;
    char surname[10],name[10];
    int age;
    char sex;
}Student;

void EnterStudent( Student student[], int size){
    char ch;
    for(int i=0;i<size;i++){
        printf("Please Enter Your ID: ");
        scanf("%d",&student[i].id);
        printf("Please Enter Your FullName Format(Surname Name): ");
        scanf("%s %s",&student[i].surname,&student[i].name);
        scanf("%c",&ch);
        printf("Please Enter Your Gender Format(M/F): ");
        scanf("%c",&student[i].sex);
        printf("\n");
    }
}
void DisplayStudent( Student student[], int size){
    printf("\nID:\t\t\t\tFullname:\t\t\tSex:");
    for(int i=0; i<size; i++){
        printf("\n%10d\t\t\t%s %s\t\t\t%c",student[i].id,student[i].surname,student[i].name,student[i].sex);
    }
}
void DisplayStudentByID( Student student[], int size){
    printf("\n\n\tEnter an ID of Student for Searching: ");
    scanf("%d",&student[size].id);
    for(int i=0;i<size;i++){
        if(student[i].id==student[size].id){
            printf("\nID: %d \tFullname: %s %s \tSex: %c",student[i].id,student[i].surname,student[i].name,student[i].sex);
        }else{
            printf("Invalid student!!!");
        }
    }
}
void DeleteStudentBYID( Student student[], int size){
    int id,state;
    printf("\n\n\t Enter an ID of Student For Deleting: ");
    scanf("%d",&id);
    for(int i=0; i<size; i++){
        if(student[i].id == id){
            state = i;
        }
    }
    for(int i = state; i < size-1; i++){
        student[i] = student[i+1];
    }
    size--;
    printf("\nID:\t\t\t\tFullname:\t\t\tSex:");
    printf("\n-----------List the Information after Delete-----------------");
    for(int i = 0; i < size; i++){
        printf("\n%10d\t\t\t%s %s\t\t\t%c",student[i].id,student[i].surname,student[i].name,student[i].sex);
    }
}




main(){
    int hold_size =2;
    Student size[5];
    EnterStudent(size,hold_size);
    DisplayStudent(size,hold_size);
    DisplayStudentByID(size,hold_size);
    DeleteStudentBYID(size,hold_size);
}