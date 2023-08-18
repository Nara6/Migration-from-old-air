// 1.Create a student structure then create an array of 5 elements.
// 2.Write a procedure to display the information of all students.
// 3.Write a function to find the highest score of 5 students. 
// 4.Write a procedure to display the information of student who has the highest. 
// 5.Write a procedure to display the information of student who has the lowest score.

#include<stdio.h>

//create student structure.
typedef struct {
    char id[20];
    char name[20];
    int score;
}Std;
void storeStudent( Std student[]){
    for(int i=0; i<5;i++){
        printf("----------------Please Input Your Info Down Below!!!----------------\n");
        printf("********Info Student %d *********",i+1);
        printf("\nEnter a name: "); scanf("%s",&student[i].name);
        printf("Enter an ID: "); scanf("%s",&student[i].id);
        printf("Enter your score: "); scanf("%d",&student[i].score);
    }
}
// diplay the information
void displayStudent( Std student[]){
    printf("--------------- Information of the Student! ---------------\n\n");
    printf("ID:\t\t\t\t Name:\t\t\t Score: \n");
    printf("===================================================================================");
    for (int i=0; i<5; i++){
        printf("\n%10s \t\t   %10s \t\t\t%d",student[i].id,student[i].name,student[i].score);
    }
    printf("\n===================================================================================");
}
// Find highest score of 5 students
int findHighestScore( Std student[]){
    int highest = student[0].score;
    for (int i=0; i<5; i++){
        if(student[i].score>highest){
            highest = student[i].score;
        }
    }
    return highest;
}
int findLowestScore( Std student[]){
    int lowest = student[0].score;
    for (int i=0; i<5; i++){
        if(student[i].score<lowest){
            lowest = student[i].score;
        }
    }
    return lowest;
}

main(){
    Std size[5];
    int n,m;

    storeStudent(size);
    displayStudent(size);
    n = findHighestScore(size);
    m = findLowestScore(size);
    printf("\n\nThe Student who has the highest score: %d\n", n);
    printf("The Student who has the lowest score: %d\n",m);
}