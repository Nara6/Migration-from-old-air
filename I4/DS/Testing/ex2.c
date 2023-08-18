#include<stdio.h>
#include<unistd.h>

int main(){
    printf("A\n");
    pid_t pid = fork();
    if(pid==0){
        printf("B\n");
    }else{
        printf("C\n");
    }
    printf("D\n");
    fork();
}