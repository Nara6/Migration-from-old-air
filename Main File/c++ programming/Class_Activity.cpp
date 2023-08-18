#include<iostream>
using namespace std;

struct Student{
        string ID;
        string name;
        int quiz_score;
        int mid_term_score;
        int final_score;
        int total;
};

void addStudent(Student std[],int size){
    for(int i=size; i<size+2; i++){
        cout<<"Student#"<<i+1<<"";
        cout<<"\n\tID: "; cin>>std[i].ID;
        cout<<"\tName: "; cin>>std[i].name;
        cout<<"\tQuiz score: "; cin>>std[i].quiz_score;
        cout<<"\tMid-term score: "; cin>>std[i].mid_term_score;
        cout<<"\tFinal_score: "; cin>>std[i].final_score;
        std[i].total = std[i].quiz_score + std[i].mid_term_score + std[i].final_score;
    }
}
void showInfo(Student std[],int size){
    cout<<"\nID: \t\t\tName: \t\tQuiz Score: \t\tMid-Term Score: \t\tFinal Score:\n\n";
    for(int i=0;i<size; i++){
        cout<<std[i].ID<<"\t\t"<<std[i].name<<"\t\t"<<std[i].quiz_score<<"\t\t\t"<<std[i].mid_term_score<<"\t\t\t\t"<<std[i].final_score<<"\n";
    }
}
float FindMaxScore(Student std[],int size){
    int max = std[0].total;
    for(int i=0; i<size; i++){
        if(std[i].total>max){
            max = std[i].total;
        }
    }
    cout<<"\n---------------------!! Student with the Highest Score !!--------------------------";
    cout<<"\nID: \t\t\tName: \t\tQuiz Score: \t\tMid-Term Score: \t\tFinal Score:\n\n";
    for(int i=0; i<size; i++){
        if(std[i].total==max){
            cout<<std[i].ID<<"\t\t"<<std[i].name<<"\t\t"<<std[i].quiz_score<<"\t\t\t"<<std[i].mid_term_score<<"\t\t\t\t"<<std[i].final_score<<"\n";
        }
    }
}
void DisplayByID(Student std[],int size){
    string ID;
    cout<<"\n\tPlease Enter a Student ID: "; cin>>ID;
    cout<<"\nID: \t\t\tName: \t\tQuiz Score: \t\tMid-Term Score: \t\tFinal Score:\n\n";
    for(int i=0; i<size; i++){
        if(ID == std[i].ID){
            cout<<std[i].ID<<"\t\t"<<std[i].name<<"\t\t"<<std[i].quiz_score<<"\t\t\t"<<std[i].mid_term_score<<"\t\t\t\t"<<std[i].final_score<<"\n";
        }
    }
}
float FindAvg(Student std[],int size){
    float avg, sum;
    int min = std[0].total;
    int max = std[0].total;
    for(int i=0; i<size; i++){
        if(std[i].total>max){
            max = std[i].total;
        }
        if(std[i].total<min){
            min = std[i].total;
        }
        sum = sum + std[i].total;
    }
    avg = sum / size;
    cout<<"\nMinimuim Score: "<<min<<"";
    cout<<"\nMaximuim Score: "<<max<<"";
    cout<<"\nAverage Score: "<<avg<<"";

}
int main(){
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
            addStudent(student,hold_size);
            hold_size = hold_size+2;
            break;

            case 2:
            printf("\n2. View All Student records\n");
            if(hold_size==0){
                printf("\nNO RECORD!\n\n");
            }else{
                showInfo(student,hold_size);
            }
            break;
            case 3:
            printf("\n3. Show Student who gets the Max total score");
            FindMaxScore(student,hold_size);
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