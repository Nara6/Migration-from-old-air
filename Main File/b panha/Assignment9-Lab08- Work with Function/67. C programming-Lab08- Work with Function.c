#include<stdio.h>
#include<stdbool.h>
bool checkPrime(int n);
main(){
    int num;
    printf("Enter a number: ");scanf("%d",&num);
    checkPrime(num);
}
bool checkPrime(int n){
    bool status=true;
    for(int i=2;i<n;i++){
        if(n%i==0){
            status=false;
            break;
        }
    }
    if(status==true){
        printf("The number %d is primary number",n);
    }
    else{
        printf("The number %d is not primary number",n);
    }
}
