#include <stdio.h>

main(){
     int n, i, j, ocno=0,dn;
     printf("Enter a number Decimal number : ");
     scanf("%d",&n);
     dn=n;
     i=1;
      for(j=n;j>0;j=j/8){
        ocno=ocno+(j % 8)*i;
        i=i*10;
        n=n/8;
       }
     printf("\nThe Octal of %d(Decimal_number) is %d.\n\n",dn,ocno);
}
