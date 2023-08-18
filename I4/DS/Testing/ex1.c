#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>



int main(){
//     for(int i=0; i<2; i++){
//         fork();
//         printf("%d hello world\n", i);
//     }
    fork();
    printf("Hi 1\n");
    fork();
    printf("Hi 2\n");
    fork();
    printf("Hi 3\n");
}