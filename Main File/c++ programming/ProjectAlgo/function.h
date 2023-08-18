#include<iostream>
#include<math.h>
using namespace std;

void summation(){
    double num1,num2;
    cout<<"\t\t\t*Summation\n";
    cout<<"\tEnter 1st Number: "; cin>>num1;
    cout<<"\tEnter 2nd Number: "; cin>>num2;
    cout<<"\n+------->> Summation "<<num1<<" + "<<num2<<" = "<<num1+num2<<endl;
}
void subtraction(){
    double num1, num2;
    cout<<"\t\t\t*Subtraction\n";
    cout<<"\tEnter 1st Number: "; cin>>num1;
    cout<<"\tEnter 2nd Number: "; cin>>num2;
    cout<<"\n+------->> Subtraction "<<num1<<" - "<<num2<<" = "<<num1-num2<<endl;
}
void multiplication(){
    double num1, num2;
    cout<<"\t\t\t*Multiplication\n";
    cout<<"\tEnter 1st Number: "; cin>>num1;
    cout<<"\tEnter 2nd Number: "; cin>>num2;
    cout<<"\n+------->> Multiplication "<<num1<<" x "<<num2<<" = "<<num1*num2<<endl;
}
void division(){
    double num1, num2;
    cout<<"\t\t\t*Division\n";
    cout<<"\tEnter 1st Number: "; cin>>num1;
    cout<<"\tEnter 2nd Number: "; cin>>num2;
    cout<<"\n+------->> Division "<<num1<<" % "<<num2<<" = "<<num1/num2<<endl;
}
void sum1ToN(){
    int n;
    double result=0;
    cout<<"\t\t\t*Summation: 1+2+3+...+n\n";
    cout<<"\tEnter n: "; cin>>n;
    for(int i=0; i<=n; i++){
        result = result + i;
    }
    cout<<"\n------->> Summation 1+2+3+...+"<<n<<" = "<<result<<endl;
}
void sumOdd1ToN(){
    int n;
    double result=0;
    cout<<"\t\t\t*Summation: 1+3+5+...+n\n";
    cout<<"\tEnter n: "; cin>>n;
    for(int i=1; i<=n; i=i+2){
        result = result + i;
        //cout<<i<<endl;
    }
    cout<<"\n------->> Summation 1+3+5+...+"<<n<<" = "<<result<<endl;
}
void sumSquare(){
    int n,s;
    double result=0;
    cout<<"\t\t*Sum Square: 1^2 + 2^2 + ... + n^2\n";
    cout<<"\tEnter n: "; cin>>n;
    for(int i=1; i<=n; i++){
        s = pow(i,2);
        //cout<<s<<endl;
        result = result + s;
    }
    cout<<"\n------->> Sum Square 1^2 + 2^2 + ... + "<<n<<"^2"<<" = "<<result<<endl;
}
void sumPrimeNum(){
    int n,c;
    double result=0;
    cout<<"\t\t*Sum all primary numbers in between 1 to n\n";
    cout<<"\tEnter n: "; cin>>n;
    for(int i=1; i<=n; i++){
        c=0;
        for(int j=2; j<=i/2; j++){
            if(i%j==0){
                c++;
            }
        }
        if(c==0 && i!=1){
            result = result + i;
        }
    }
    cout<<"\n------->> Sum all primary numbers in between 1 to "<<n<<" = "<<result<<endl;
}
void convertBase2to10(){
    int base2,base10=0,remainder;
    int binary,base=1;
    cout<<"\t\t\t*Convert base2 to base10."<<endl;
    cout<<"*Format only Two Number (1|0) "<<endl;
    cout<<"\tEnter a base 2: "; cin>>base2;
    binary = base2;
    while(base2>0){
        remainder = base2%10;
        base10 = base10 + remainder*base;
        base2 = base2/10;
        base = base * 2;
    }
    cout<<"\n-------->> "<<binary<<" in "<<"Base10"<<" = "<<base10<<endl;
}
void convertBase10to2(){
    int base10,base2=0,remainder,hold=1,decimal;
    cout<<"\t\t\t*Convert base10 to base2."<<endl;
    cout<<"\tEnter a base 10: "; cin>>base10;
    decimal = base10;
    while(base10>0){
        remainder = base10%2;
        base2 = base2 + (remainder * hold);
        hold = hold * 10;
        base10 = base10/2;
    }
    cout<<"\n-------->> "<<decimal<<" in "<<"Base2"<<" = "<<base2<<endl;
}
void convertBase8to10(){
    int base8,base10=0,remainder;
    int octal,base=1;
    cout<<"\t\t\t*Convert base8 to base10."<<endl;
    cout<<"|*Format only Number From (1-8)| "<<endl;
    cout<<"\tEnter a base 8: "; cin>>base8;
    octal = base8;
    while(base8>0){
        remainder = base8%10;
        base10 = base10 + remainder*base;
        base8 = base8/10;
        base = base * 8;
    }
    cout<<"\n-------->> "<<octal<<" in "<<"Base10"<<" = "<<base10<<endl;
}
void convertBase10to8(){
    int base10,base8=0,remainder,hold=1,decimal;
    cout<<"\t\t\t*Convert base10 to base8."<<endl;
    cout<<"\tEnter a base 10: "; cin>>base10;
    decimal = base10;
    while(base10>0){
        remainder = base10%8;
        base8 = base8 + (remainder * hold);
        hold = hold * 10;
        base10 = base10/8;
    }
    cout<<"\n-------->> "<<decimal<<" in "<<"Base8"<<" = "<<base8<<endl;
}
void convertBase10to16(){
    int base10,base16=0,remainder,hold=1,decimal;
    cout<<"\t\t\t*Convert base10 to base16."<<endl;
    cout<<"Enter a base 10: "; cin>>base10;
    decimal = base10;
    while(base10>0){
        remainder = base10%16;
        base16 = base16 + (remainder * hold);
        hold = hold * 10;
        base10 = base10/16;
    }
    cout<<"\n-------->> "<<decimal<<" in "<<"Base16"<<" = "<<base16<<endl;
}
void ifPrime(){
    int num;
    int check=1;
    cout<<"\t\t\t*Check if it is a primary number.";
    cout<<"\n\tEnter a Number: "; cin>>num;
    if(num == 0 || num ==1){
        check = 0;
    }
    for(int i=2; i<=num/2; i++){
        if(num%i==0){
            check = 0;
        }
    }
    if(check ==1){
        cout<<"\t*Primary number!"<<endl;
    }else{
        cout<<"\t*Not primary number!"<<endl;
    }
}
void ifPerfect(){
    int num,sum=0;
    cout<<"\t\t\t*Check if it is a perfect number.";
    cout<<"\n\tEnter a Number: ";cin>>num;
    for(int i=1; i<num; i++){
        if(num%i==0){
            sum = sum+i;
        }
    }
    if(num==sum){
        cout<<"\t*Perfect Number!"<<endl;
    }else{
        cout<<"\t*Not Perfect Number!"<<endl;
    }
}
void ifPalindrome(){
    int num,remainder,sum=0,check;
    cout<<"\t\t\t*Check if it is a palindrome number."<<endl;
    cout<<"\tEnter a Number: "; cin>>num;
    check = num;
    while(num>0){
        remainder = num%10;
        sum = (sum*10) + remainder;
        num = num/10;
    }
    if(check == sum){
        cout<<"\t*Palindrome Number!"<<endl;
    }else{
        cout<<"\t*Not Palindrome Number!"<<endl;
    }
}