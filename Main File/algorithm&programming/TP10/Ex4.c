#include<stdio.h>
#include<string.h>
typedef struct{
    int quizScore;
    int midtermScore;
    int finalScore;
    float totalScore;
}Score;
typedef struct{
    char name[20];
    char Student_ID[20];
    char sex[5];
    char ch;
    Score score;
}Student;
void Add2Student(Student std[],int hold){
    for(int i=hold; i<hold+2; i++){
        // printf("Student #%d",i+1);
        printf("\n\tID: "); scanf("%s",std[i].Student_ID);
        printf("\tName: "); scanf("%s",std[i].name);
        printf("\tGender: "); scanf("%s",std[i].sex);
        printf("\tQuiz Score: "); scanf("%d",&std[i].score.quizScore);
        printf("\tMid-term Score: "); scanf("%d",&std[i].score.midtermScore);
        printf("\tFinal Score: "); scanf("%d",&std[i].score.finalScore);
        std[i].score.totalScore = std[i].score.quizScore + std[i].score.midtermScore + std[i].score.finalScore;
    }
}
void ViewStudent(Student std[],int hold){
    printf("\n%-15s%15s%15s%15s%15s%15s","|ID|","|Name|","|Gender|","|Quiz Score|","|Mid-Term Score|","|Final Score|");
    for(int i=0; i<hold; i++){
        printf("\n\n%-15s%15s%15s%15d%15d%15d",std[i].Student_ID,std[i].name,std[i].sex,std[i].score.quizScore,std[i].score.midtermScore,std[i].score.finalScore);
    }
}

float FindMAXScore(Student std[],int hold){
    int max = std[0].score.totalScore;
    for(int i=0; i<hold; i++){
        if(std[i].score.totalScore>max){
            max = std[i].score.totalScore;
        }
    }
    printf("\n========================!!! Student With the Highest Score !!!============================\n");
    printf("\n%-15s%15s%15s%15s%15s%15s","|ID|","|Name|","|Gender|","|Quiz Score|","|Mid-Term Score|","|Final Score|");
    for(int i=0; i<hold; i++){
        if(max==std[i].score.totalScore){
            printf("\n\n%-15s%15s%15s%15d%15d%15d\n",std[i].Student_ID,std[i].name,std[i].sex,std[i].score.quizScore,std[i].score.midtermScore,std[i].score.finalScore);
        }
    }
}
void DisplayByID(Student std[],int hold){
    char ID[20];
    printf("Please Enter a Student ID: ");
    scanf("%s",&ID);
    printf("\n%-15s%15s%15s%15s%15s%15s","|ID|","|Name|","|Gender|","|Quiz Score|","|Mid-Term Score|","|Final Score|");
    for(int i=0; i<hold; i++){
        if(strcmp(ID, std[i].Student_ID)==0){
        printf("\n\n%-15s%15s%15s%15d%15d%15d\n",std[i].Student_ID,std[i].name,std[i].sex,std[i].score.quizScore,std[i].score.midtermScore,std[i].score.finalScore);
        }
    }
}
float FindAvg(Student std[],int hold){
    float avg, sum=0;
    int min = std[0].score.totalScore;
    int max = std[0].score.totalScore;
    for(int i =0; i<hold; i++){
        if(std[i].score.totalScore>max){
            max = std[i].score.totalScore;
        }
        if(std[i].score.totalScore<min){
            min = std[i].score.totalScore;
        }
        sum = sum + std[i].score.totalScore;
    }
    avg = sum / hold;
    printf("\nMinimuim Score: %d",min);
    printf("\nMaximuim Score: %.d",max);
    printf("\nAverage Score: %.2f\n",avg);
}
main(){
    Student student[20];
    int hold_size=0;
    int option;
    do{
        printf("\n|========================================================|\n");
        printf("\t\t\tMenu\t\t\t");
        printf("\n1. Add 2 Students");
        printf("\n2. View All Student records");
        printf("\n3. Show Student who gets the Max total score");
        printf("\n4. Display student by ID");
        printf("\n5. Find Minimum, Maximum and Average Score for this Class.");
        printf("\n|========================================================|\n");
        printf("\nChoose Your options 1-5: ");
        scanf("%d", &option);
        switch(option){
            case 1:
            printf("\n1. Add 2 Students\n");
            Add2Student(student,hold_size);
            hold_size = hold_size+2;
            break;

            case 2:
            printf("\n2. View All Student records\n");
            if(hold_size==0){
                printf("\nNO RECORD!\n\n");
            }else{
                ViewStudent(student,hold_size);
            }
            break;
            case 3:
            printf("\n3. Show Student who gets the Max total score");
            FindMAXScore(student,hold_size);
            break;
            case 4:
            printf("\n4. Display student by ID\n");
            DisplayByID(student,hold_size);
            break;
            case 5:
            printf("\n5. Find Minimum, Maximum and Average Score for this Class.\n");
            FindAvg(student,hold_size);
            break;

        }
    }while(option!=0);

}
