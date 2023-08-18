#include<stdio.h>
#include"TDpractice5.h"
void menu()
{
    while(1!=0)
    {
        int option;
        printf("\t=====================\n");
        printf("\t\tMENU\n");
        printf("\t=====================\n");
        printf("1-Find factorial number\n");
        printf("2-Compute summation from one to n\n");
        printf("3-Find the square root of an input number\n");
        printf("4-Check prime number\n");
        printf("5-Exit program\n");
        printf("Enter your prefer option (1-5): ");
        scanf("%d",&option);
        printf("\t=====================\n");
        if(option==1)
        {
            int num,n;
            printf("1-Find factorial number\n");
            printf("Enter a number: ");
            scanf("%d",&num);
            n=factorial(num);
            printf("%d\n",n);
        }
        else if(option==2)
        {
            int number,n2;
            printf("2-Compute summation from one to n\n");
            printf("Enter a number: ");
            scanf("%d",&number);
            n2=summation(number);
            printf("%d\n",n2);
        }
        else if(option==3)
        {
            float number2,n3;
            printf("3-Find the square root of an input number\n");
            printf("Enter a number: ");
            scanf("%f",&number2);
            n3=squareRoot(number2);
            printf("%.2f\n",n3);
        }
        else if(option==4)
        {
            int number3;
            printf("4-Check prime number\n");
            printf("Enter a number: ");
            scanf("%d",&number3);
            primary(number3);
        }
        else if(option==5)
        {
            printf("5-Exit program\n");
            menu();
        }
    }
}
main()
{
    menu();
}