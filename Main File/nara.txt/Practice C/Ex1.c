//exercise
#include <stdio.h>
//=========================================================Exercise1
int main() {
   char name[10], gender[10];
   int age, phoneNumber;
   printf("Enter your name:");                        scanf("%s", name);
   printf("Enter your gender:");                      scanf("%s", gender);
   printf("Enter your age:");                         scanf("%d", &age);
   printf("Enter your phone Number:");                scanf("%d", &phoneNumber);

   printf("\n Hello,%s!\n Your age is %d years old\n Your gender is %s\n Your Phone number is %d", name , age , gender, phoneNumber);
}
