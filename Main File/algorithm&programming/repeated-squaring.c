#include<stdio.h>
#include<math.h>

int main()
{
    int i;
    long int x;
    int n;
    int k;
    printf("Enter a value of x: ");
    scanf("%d",&x);
    printf("Enter a value of n: ");
    scanf("%d",&n);

    for(i=1;i<=k;i++)
    {
        x=x*x;
    }
    k=log(n)/log(x);
    printf("%d",x);
    printf("\n%d",k);
}