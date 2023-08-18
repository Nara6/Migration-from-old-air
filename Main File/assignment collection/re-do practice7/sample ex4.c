#include<stdio.h>

int main()
{
    int id[5],math_score[5],j,
        highest_score,
        lowest_score,
        sum_score = 0;
    int search_id,a=0;
    char name[5][20];
    float avg;


    printf("=====================>>>>>>>>Input Information students<<<<<<<<====================");


    for(int i=0; i<5 ; i++)
    {
        printf("N%c : %d \n",167,i+1);
        printf("Enter ID: ");
        scanf("%d",&id[i]);

        printf("Enter name: ");
        scanf("%s",&name[i]);

        printf("Enter Math Score: ");
        scanf("%d",&math_score[i]);
        printf("\n");
    }
//========================>>>>> a. Display the information of all students.
    printf(" =========>>> Here The information of all students <<<============== ");
    printf("ID \t\t Name \t\t Math-Score \n");
    for(j=0; j<=4 ; j++)
    {
        printf("%d \t\t %s \t\t %d \n", id[j], name[j], math_score[j]);
    }


//========================>>>>> b. Display the information of the student with highest math score.

    highest_score = math_score[0];

    for(int k=0 ; k<5 ;k++)
    {
        if(highest_score > math_score[k])
        {
            continue;
        }
        else if(highest_score < math_score[k])
        {
            highest_score = math_score[k];
        }
    }

    printf("ID \t\t Name \t\t Math-Score \n");
    for(int u=0 ; u<5 ; u++)
    {
        if(highest_score == math_score[u])
        {
            printf(" The Student that has the highest score is: ");
            printf("%d \t\t %s \t\t %d \n", id[u], name[u], math_score[u]);
        }
    }

//======================>>>>> c.Display the information of the student with lowest math score


    lowest_score = math_score[0];

    for(int k=0 ; k<5 ;k++)
    {
        if(lowest_score < math_score[k])
        {
            continue;
        }
        else if(lowest_score > math_score[k])
        {
            lowest_score = math_score[k];
        }
    }

    printf("ID \t\t Name \t\t Math-Score \n");
    for(int u=0 ; u<5 ; u++)
    {
        if(lowest_score == math_score[u])
        {
            printf(" The Student that has the lowest score is: ");
            printf("%d \t\t %s \t\t %d \n", id[u], name[u], math_score[u]);
        }
    }

//=========================>>>>>>d.Display the average score of math. 
    printf(" Here is Your Average Score: ");
    for(int i=0 ; i<=4 ; i++)
    {
        sum_score = sum_score + math_score[i];
    }

    avg = (float)sum_score / 5.00;

    printf("Average = %.2f",avg);


//===========================>>>>>>e.Ask user to input an ID. Display information of student that have this ID.

    //Printf("============>>> Find Your Information Here <<<===========");

    printf("\n Enter ID for Search Information: ");
    scanf("%d",&search_id);




    for(int q=0 ; q<5 ; q++)
    {
        if(search_id == id[q])
        {
            a = 1;
            printf("ID \t\t Name \t\t Math-Score \n");

            printf("%d \t\t %s \t\t %d \n", id[q], name[q], math_score[q]);
        }
    }
    if(a == 0)
    {
        printf("Don't This ID : %d", search_id);
    }










}
