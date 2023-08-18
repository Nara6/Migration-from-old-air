#include<stdio.h>
int main() {
   char character;
   int num;

   printf("Please Enter the Character:"); scanf("%c", &character);
   printf("Please Enter the number:"); scanf("%d", &num);

   printf("\n%c", character);
   printf("\n%d %d", num, num);
   printf("\n%c %c %c ", character, character, character);
   printf("\n%d %d %d %d ", num, num, num, num);
}