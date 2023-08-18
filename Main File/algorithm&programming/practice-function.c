#include<stdio.h>

void num(int a , int b , int c){
    int min;
    if(a<b && a<c){
        min = a;
    }
    if(b<c && b<a){
        min = b;
    }
    if(c<a && c<b){
        min = c;
    }
    printf("Smallest value is %d", min);

}
main(){
    int x,y,z;
        printf("Enter a value a: ");
        scanf("%d",&x);
        printf("Enter a value b: ");
        scanf("%d",&y);
        printf("Enter a value c: ");
        scanf("%d",&z);
        num(x,y,z);
}
