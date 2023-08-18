#include<stdio.h>
#include<time.h>
#include<stdlib.h>
main(){
    int m1[3][3],m2[3][3],m3[3][3];
    int sum=0,i,j,maximum,minimum;
        srand(time(0));
    int min=0, max=50;
    float average;

    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            m1[i][j]=rand()%max+min;
            m2[i][j]=rand()%max+min;
            m3[i][j]=m2[i][j]+m1[i][j];
            sum=sum+m3[i][j];
        }
    }
    printf("\tThe randomize number in m1\n\n");
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
           printf("%d\t",m1[i][j]);
        }
        printf("\n");
    }
    printf("\n\tThe randomize number in m2\n\n");
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
           printf("%d\t",m2[i][j]);
        }
        printf("\n");
    }
    printf("\n\tThe number in m3\n\n");
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
           printf("%d\t",m3[i][j]);
        }
        printf("\n");
    }
    average=sum/9.0;
    maximum=m3[0][0];
    minimum=m3[0][0];
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            if(maximum<m3[i][j]){
                maximum=m3[i][j];
            }
            if(minimum>m3[i][j]){
                minimum=m3[i][j];
            }
        }
    }
    printf("\nThe maximum number in m3 is %d\n",maximum);
    printf("The minimum number in m3 is %d\n",minimum);
    printf("The average in m3 is %.2f\n",average);
}
