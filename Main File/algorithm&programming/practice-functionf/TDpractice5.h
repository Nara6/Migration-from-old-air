#include<stdio.h>
#include<math.h>

//option 1
int factorial(int num)
{
    int fac=1;
    for(int i=num;i>0;i--)
    {
        fac=fac*i;
    }
    return fac;
}
//option 2
int summation(int num)
{
    int sum=0;
    for(int i=1;i<=num;i++)
    {
        sum=sum+i;
    }
    return sum;
}
//option 3
float squareRoot(float num)
{
    float x;
    x=sqrt(num);
    return x;
}
//option 4
void primary(int number3)
{
    int i,prime=0;
    for(i=1;i<=number3;i++)
    {
        if(number3%i==0)
        {
            prime++;
        }
    }
    if(prime==2)
    {
        printf("%d is prime number.\n",number3);
    }
    else
    {
        printf("%d is not prime number.\n",number3);
    }
}