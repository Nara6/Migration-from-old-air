#include<stdio.h>
int main(){
    int max,min,num;
    printf("Enter a number #1: ");
    scanf("%d",&num); 
    
    max=num;
    min=num;
    
    for(int i=2;i<=8;i++){
        printf("Enter a number #%d: ",i);
        scanf("%d", &num);
        
        if(num>max){
            max=num; 
        }
        if(num<min){
            min=num; 
        } 
    }
    printf("The minimun number is: %d", min);
    printf("\nThe maximum number is: %d", max);  
}