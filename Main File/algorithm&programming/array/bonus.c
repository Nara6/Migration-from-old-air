#include<stdio.h>
#include<time.h>
#include <stdlib.h>
int main(){
    int n,i=1;
    int guess,times=0;
        srand(time(0));
    int min=1, max=10;
    n=rand()%max+min;
    printf("*********** Number prediction program ***********");
    printf("\nGenerting a random number ...!");
    do
    {
        printf("\nEnter your guess number: ");
        scanf("%d", &guess);
        times = times + 1;
        if (guess > n)
        {
            printf("Your predicted number is too big \nYou can try predicting a smaller number");
        }
        else if (guess < n)
        {
            printf("Your predicted number is too small \nYou can try predicting a bigger number");
        }
        else
        {
            printf("\nCongrats!!! You have predict it right in %d times!\n", times);
        }
    } while (guess != n);
}
    

