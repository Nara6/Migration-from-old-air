#include<stdio.h>

enum day{Monday,Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday};
enum color{White, Red, Green, Blue};

main(){
    
    enum day d1;
    enum color c1;

    d1 = Tuesday;
    c1 = Green;

    printf("Day: %d", d1);
    printf("\nColor: %d", c1);
}