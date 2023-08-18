#include<stdio.h>

int check_biggest(int num[]){
    int smallest;
    smallest=num[0];
    for(int i=1; i<5; i++){
        if(smallest<num[i]){
            smallest=num[i];
        }
    }
    return smallest;
}

main(){
    int num[20], n;
    for(int i=1; i<=5; i++){
        printf("Enter a numbers #%d: ", i);
        scanf("%d",&num[i]);
    }
    n = check_biggest(num);
    printf("the biggest number is %d", n);

}