#include<stdio.h>
main(){
    float weight;
    float height;
    float BMI;
    printf("Please Enter your weight(kg): ");
    scanf("%f",&weight);
    printf("Please Enter your height(m): ");
    scanf("%f",&height);
    BMI = weight/(height*height);
    printf("Your Body Mass Index: %f",BMI);
    if(BMI<18.5){
        printf("\nUnderweight");
    }else if(BMI>=18.5 && BMI<25.0){
        printf("\nNormal weight");
    }else if(BMI>=25.0 && BMI<30.0){
        printf("\nOverweight");
    }else if(BMI>=30.0){
        printf("\nObesity");
    }
    else{
        printf("\nInvalid data");
    }
}