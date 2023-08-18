#include<stdio.h>
#include<time.h>
main(){

    srand(time(0));
    int n,i=0;
    int min=1, max=15;

    n=rand()%max+min;

    printf("\n**************Number prediction program**************\n\n");
    printf("Generating a random number ...!\n");
    printf("A randomized number has been generated successfully!\n");

    while(1){
        i=i+1;
        int a;
        printf("\n\tEnter your guess number : ");
        scanf("%d",&a);

        if(n<a){
            printf("Your predicting is to big.\n");
            printf("You can try predicting a smaller number.\n");
        }
        else if (n>a){
            printf("Your predicting is to small.\n");
            printf("You can try predicting a bigger number.\n");
        }
        else{
            printf("Congrats!!! You have predict it right in %d times.\n",i);
            break;
        }


    }

}
