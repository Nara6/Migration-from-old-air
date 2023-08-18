#include<stdio.h>
//============>> Display all student's information

main(){
    char name[5][20], phone_number[5][20], email_address[5][20];
    int score[5];
    printf("==================>> Input Your Information Down below <<===================\n");
    for(int i=0; i<5; i++){
        printf("Enter a Name: ");
        scanf("%s",&name[i]);
        
        printf("Enter a Score: ");
        scanf("%d",&score[i]);

        printf("Enter an Email: ");
        scanf("%s",&email_address[i]);

        printf("Enter a PhoneNumber: ");
        scanf("%s",&phone_number[i]);
        printf("\n");
    }
    printf("==================>> Here the Information of the students <<===================\n");
    printf("|Name \t\t |Score \t |Email \t\t\t\t |PhoneNumber\n");
    printf("=========================================================================================================\n");
    for(int i=0; i<5; i++){
        printf("%s \t\t %d \t\t %s \t\t\t\t %s\n", name[i], score[i], email_address[i],phone_number[i]);
    }
    printf("=========================================================================================================");
}