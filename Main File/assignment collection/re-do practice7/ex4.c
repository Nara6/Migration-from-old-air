//Ask user to input informationof 5 students. The information includesId, name and math score.
// a . Display the information of allstudents.
#include <stdio.h>
int main(){
    int k,j,
    id[4],
    math_score[4];
    char name[4];
    printf(" =========================>>Input Your Information Down There<<============================");
    for (int i = 0; i < 4; i++){
        printf("\nN%c : %d \n",167,i+1);

        printf("\nPlz Enter Your ID: ");
        scanf("%d", &id[i]);

        printf("Plz Enter Your Name: ");
        scanf("%s", &name[i]);

        printf("Plz Enter Your Math Score: ");
        scanf("%d", &math_score[i]);
    }
    printf( " ID: \t\t Name: \t\t Score: \n");
    for ( k = 0; k <= 3 ; k++ ){
        printf("%d \t\t %s \t\t %d \n", id[k], name[k], math_score[k]);
    }

}