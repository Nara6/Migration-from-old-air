#include<stdio.h>
main(){
    int k,sum=0;
    char name[5][15],tel[5][10],email[5][100];
    float score[5],average;

    for(k=0;k<5;k++){
        printf("Enter your name: ");
        scanf("%s",&name[k]);
        printf("Enter your score: ");
        scanf("%f",&score[k]);
        sum=sum+score[k];
        printf("Enter your email: ");
        scanf("%s",&email[k]);
        printf("Enter your phone number: ");
        scanf("%s",&tel[k]);
        printf("\n");
    }
    average=sum/5.0;
    for(k=0;k<5;k++){
        if(score[k]>average){
            printf("\tThe info of student%d",k+1);
            printf("\nName: %s",name[k]);
            printf("\nScore: %.2f",score[k]);
            printf("\nPhone number: %s",tel[k]);
            printf("\nEmail: %s",email[k]);
            printf("\n\n");
        }
    }
}
