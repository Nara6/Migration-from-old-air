#include<iostream>
using namespace std;

int main(){
    int h,m,s,minute,second;
    cout<<"\nEnter a minute: "; cin>>minute;
    second = minute * 60;
    h = second / 3600;
    m = (second - (3600*h))/60;
    s = (second - (3600*h)-(m*60));
    cout<<"\n\tIt is "<<h<<"h "<<m<<"m "<<s<<"s";
}