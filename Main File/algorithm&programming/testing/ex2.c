// Write a program in C to check a given number is even or odd using the function. Go to the editor
// Test Data :
// Input any number : 5
// Expected Output :

//  The entered number is odd.
#include<stdio.h>

int checkNumber(int number){
    if(number%2==0){
        printf("The entered number is even");
    }else{
        printf("The entered number is odd");
    }
}
main(){
    int num,check;
    printf("Enter a number: ");
    scanf("%d",&num);
    check=checkNumber(num);
}