#include<stdio.h>
main(){
    int num,j,i,rev=0;
    printf("Enter a number: "); scanf("%d",&num);
    while(num>0){
        i=num%10;
        num=num/10;
        rev=(rev*10)+i;
    }
    while(rev>0){
        j=rev%10;
        rev=rev/10;
        switch(j){
            case 0: printf("zero "); break;
            case 1: printf("one "); break;
            case 2: printf("two "); break;
            case 3: printf("three "); break;
            case 4: printf("four "); break;
            case 5: printf("five "); break;
            case 6: printf("six "); break;
            case 7: printf("seven "); break;
            case 8: printf("eight "); break;
            case 9: printf("nine "); break;
        }
    }
}
