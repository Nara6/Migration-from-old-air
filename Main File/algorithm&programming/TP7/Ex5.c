#include<stdio.h>
//===============>>>> Display info of all students who got score more than average.

main(){
    char name[5][20], phone_number[5][20], email_address[5][20];
    int score[5], sum = 0 ,average;

    printf("==================>> Input Your Information Down below <<===================\n");
    for(int i=0; i<5; i++){
        printf("Enter a Name: ");
        scanf("%s",&name[i]);
        
        printf("Enter a Score: ");
        scanf("%d",&score[i]);
        sum = sum + score[i];

        printf("Enter an Email: ");
        scanf("%s",&email_address[i]);

        printf("Enter a PhoneNumber: ");
        scanf("%s",&phone_number[i]);
        printf("\n");
    }
    average = sum/5;
    printf("============================>>>>The Student who got score more than average is down below <<<<============================\n");
    printf("|Name \t\t|Score \t\t|Email \t\t\t|PhoneNumber\n");
    printf("==========================================================================================================================\n");
    for(int i=0; i<5; i++){
        if(score[i] > average){
            printf("%s \t\t %d \t\t %s \t\t\t %s\n", name[i], score[i], email_address[i],phone_number[i]);
        }
    }
    printf("==========================================================================================================================\n");
}