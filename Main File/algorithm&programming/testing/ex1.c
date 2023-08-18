// Write a program in C to find the square of any number using the function. Go to the editor
// Test Data :
// Input any number for square : 20

#include<stdio.h>
#include<math.h>

int findSquare(int num){
    int square;
    square = pow(num, 2);
    return square;
}
main(){
    int number, n;
    printf("Please Enter a number: ");
    scanf("%d", &number);
    n = findSquare(number);
    printf("The square of %d is equal to %d",number,n);
}