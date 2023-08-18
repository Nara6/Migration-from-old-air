#include<stdio.h>
#include"bonus.h"
// Write a C program that is is able to perform some operations below
// 1) Check if a given date (day, month and year) is valid
// 2) Sum numbers from 1 to n-1, where n is user input
// 3) Sum square of even numbers from 1 to n, where n is user input
// 4) Find summation of each digit of a number given via parameter
// 5) Exit
// Create 5 functions for above 5 operations.

//  The program displays a menu having those 5 operations to a user. When
// the user selects an operation, the function created for that operation should be executed and the user will be asked for some inputs if necessary. The program displays the result for selected operation and keep running again until user selects option #5 to exit the program.
/*C program to validate date (Check date is valid or not).*/

main(){
    while(1>0){
        int option;
        printf("=================== PLEASE SELECT THE OPERATION BELOW(1-5) =================\n");
        printf("1.Check if a given date (day, month and year) is valid\n");
        printf("2.Sum numbers from 1 to n-1\n");
        printf("3.Sum square of even numbers from 1 to n\n");
        printf("4.Summation of each digit of a number\n");
        printf("5.Exit\n");
        printf("\nEnter a number which operation do u prefer(1-5): ");
        scanf("%d", &option);
        if(option==1){
            //Check if a given date (day, month and year) is valid
            int check,d,m,y;
            printf("\n1.Check if a given date (day, month and year) is valid");
            printf("\n\tEnter the date - DD/MM/YYYY ::  ");
            scanf("%d/%d/%d",&d,&m,&y);
            check = checkInvalidDate(d,m,y);
        }
        if(option==2){
            //Sum numbers from 1 to n-1
            int a, number;
            printf("\n2.Sum numbers from 1 to n-1\n");
            printf("\n\tEnter a number: ");
            scanf("%d",&number);
            a = Summation(number);
            printf("\nThe Summation is: %d\n\n", a);

        }
        if(option==3){
            int b,number;
            //Sum square of even numbers from 1 to n, where n is user input
            printf("\n3.Sum square of even numbers from 1 to n\n");
            printf("\n\tEnter a number: ");
            scanf("%d",&number);
            b = FindSquareEven(number);
            printf("\nThe Square of even numbers from 1 to n: %d\n\n", b);
        }
        if(option==4){
            //Find summation of each digit of a number given via parameter
            int number,c;
            printf("\n4.Summation of each digit of a number\n");
            printf("\n\tEnter a number: ");
            scanf("%d",&number);
            c = FindSummationDigits(number);
            printf("\nThe Summation digits is: %d\n\n",c);

        }
        if(option==5){
            printf("\n\n5.Exit the program\n\n\n");
        }
    }
}