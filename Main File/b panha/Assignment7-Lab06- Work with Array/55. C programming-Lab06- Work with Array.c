#include<stdio.h>
main(){
    int k;
    char name[5][15],tel[5][10],email[5][100];
    float score[5];

    for(k=0;k<5;k++){
        printf("Enter your name: ");
        scanf("%s",&name[k]);
        printf("Enter your score: ");
        scanf("%f",&score[k]);
        printf("Enter your email: ");
        scanf("%s",&email[k]);
        printf("Enter your phone number: ");
        scanf("%s",&tel[k]);
        printf("\n");
    }
    for(k=0;k<5;k++){
        printf("\tThe info of student%d",k+1);
        printf("\nName: %s",name[k]);
        printf("\nScore: %.2f",score[k]);
        printf("\nPhone number: %s",tel[k]);
        printf("\nEmail: %s",email[k]);
        printf("\n\n");
    }
}
