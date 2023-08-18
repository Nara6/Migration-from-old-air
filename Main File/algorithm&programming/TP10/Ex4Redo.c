#include<stdio.h>

typedef struct{
    char name[20];
    char gender[6];
    char ID[20];
    int Qscore, Mscore, Fscore;
}Student;

void Display(Student std){
    printf("\n\n%-15s%15s%15s%15d%15d%15d\n",std.ID,std.name,std.gender,std.Qscore,std.Mscore,std.Fscore);
}
Student EnterData(int size){
    Student std;
    printf("\n\tID: "); scanf("%s",std.ID);
    printf("\tName: "); scanf("%s",std.name);
    printf("\tGender: "); scanf("%s",std.gender);
    printf("\tQuiz Score: "); scanf("%d",&std.Qscore);
    printf("\tMid-term Score: "); scanf("%d",&std.Mscore);
    printf("\tFinal Score: "); scanf("%d",&std.Fscore);
    return std;
}
// Student Add2Student(int size){
//     Student std[20];
//     for(int i=0; i<size+2; i++){
//         printf("Student #%d", i+1);
//         std[i] = EnterData(size);
//     }
// }
// void DisplayStudent(int size){
//     Student std[20];
//     for(int i=0; i<size+2; i++){
//         Display(std[i]);
//     }
// }
main(){
//     int hold_size = 0;
//     Student student,s1;
//     student = Add2Student(hold_size);
//     s1 = Add2Student(hold_size);
//     DisplayStudent(hold_size);
    while(1>0){
        Student std[20];
        // int hold_size = 0;
        int option;
        int size = 2;
        printf("|========================================================|\n");
        printf("\t\t\tMenu\t\t\t");
        printf("\n1. Add 2 Students");
        printf("\n2. View All Student records");
        printf("\n3. Show Student who gets the Max total score");
        printf("\n4. Display student by ID");
        printf("\n5. Find Minimum, Maximum and Average Score for this Class.");
        printf("\n|========================================================|\n");
        printf("\nChoose Your options 1-5: ");
        scanf("%d", &option);
        if(option == 1){
            size = size+2;
            printf("\n1. Add 2 Students\n");
            for(int i=0; i<size; i++){
                printf("Student #%d", i+1);
                std[i] = EnterData(size);
            }
        }
        if(option == 2){
            size = size+2;
            printf("\n2. View All Student records\n");
            for(int i=0; i<size; i++){
                Display(std[i]);
                size = size+2;
            }
        }
    }   
}

