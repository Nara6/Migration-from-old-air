#include<stdio.h>
int main(){
    int math;
    int physic;
    int chemistry;
    int english;
    int french;
    float avg;

    printf("Input your Math score: ");
    scanf("%d",&math ); 

    printf("Input your Physic score: ");
    scanf("%d",&physic ); 

     printf("Input your Chemistry score: ");
    scanf("%d",&chemistry ); 

     printf("Input your English score: ");
    scanf("%d",&english ); 

     printf("Input your French score: ");
    scanf("%d",&french ); 

    avg = (math + physic + chemistry + english + french)/5;
    if (avg>=90&&avg<100){
        printf("Your grade is A.");
    }
    else if(avg>=80&&avg<90){
        printf("Your grade is B.");
    }
    else if(avg>=70&&avg<80){
        printf("Your grade is C.");
    }
    else if(avg>=60&&avg<70){
        printf("Your grade is D.");
    }
    else if(avg>=0&&avg<60){
        printf("Your grade is F (plong sorng :)");
    }
    else{
        printf("Please input positive number !!!");
    }

    




}