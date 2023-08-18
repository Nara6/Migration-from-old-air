#include <stdio.h>
main(){
    int price, price1, price2;
    printf("Input your price: ");
    scanf("%d",&price);
    price1 = (price*0.03)+price;
    printf("Price including the tax: %d",price1);
}