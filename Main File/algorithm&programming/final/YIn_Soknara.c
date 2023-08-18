#include<stdio.h>


int findSumUserinput(int num1, int num2){
    int sum = num1 + num2;
    return sum;
}
int ComputeSummation(){
    int sum=0;
    for(int i=0; i<=4; i++){
        sum = sum + (3*i);
    }
    return sum;
}
int ComputeProduct(){
    int product=1;
    for(int i=1; i<=4; i++){
        product = product + (2*i);
    }
    return product;
}
void displayPrimaryFrom11toN(int a){
    int i,j;
    int p=0;
    for(i=11; i<=a; i++){
        int check=0;
        for(j=2; j<i; j++){
            if(i%j==0){
                check=1;
            }
        }if(check==0 ){
            p=p+1;
            if(p==1){
                printf("All prime numbers between 11 to %d is: 11",a);
            }else{
                printf(" %d",i);
            }
        }
    }
}
int sumFromStoE(int s, int e){
    int res=0;
    for(int i=s; i<=e; i++){
        res = res+i;
    }
    return res;
}


main(){
    while(1>0){
        int option;
        printf("1-Sum between two input\n");
        printf("2-Compute the summation operation on the right\n");
        printf("3-Compute the product operation on the right\n");
        printf("4-Display all primary number from 11 to n\n");
        printf("5-Calculate summation of all even number from s to e\n");
        printf("Enter your prefer option (1-5): ");
        scanf("%d",&option);
        printf("\t=====================\n");
        if(option==1)
        {
            int num,num1,n;
            printf("1-Sum between two input\n");
            printf("Enter a number: ");
            scanf("%d",&num);
            printf("Enter a number: ");
            scanf("%d",&num1);
            n=findSumUserinput(num,num1);
            printf("\nSum: %d\n",n);
        }
        else if(option==2)
        {
            int n2;
            printf("2-Compute the summation operation on the right\n");
            n2=ComputeSummation();
            printf("%d\n\n",n2);
        }
        else if(option==3)
        {
            int n3;
            printf("3-Compute the product operation on the right\n");
            n3=ComputeProduct();
            printf("%d\n\n",n3);
        }
        else if(option ==4){
            int n;
            printf("Display all primary numbers from 11 to input number\n\n");
            printf("Enter a number: ");
            scanf("%d", &n);

            if(n<=11){
                printf("Please input number higher than 11\n\n");
            }
            else if(n>11){
                displayPrimaryFrom11toN(n);
                printf("\n\n");
            }
        }
        else if(option ==5){
            printf("Calculate the summation from the starting number to ending number\n\n");
            int s,e;
            int total;
            printf("Enter the starting number: ");
            scanf("%d", &s);
            printf("Enter the ending number: ");
            scanf("%d", &e);
            if(s<0 && e<s){
                printf("Error\n\n");
            }
            else{
                total = sumFromStoE(s,e);
                printf("The summation from %d to %d is %d\n\n",s,e,total);
            }
        }
    }
}
