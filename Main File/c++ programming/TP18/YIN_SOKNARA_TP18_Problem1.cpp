#include<iostream>
#include<fstream>
using namespace std;
struct customer{
    int customer_id;
    string name;
    string gender;
    enum customer_type{
        VIP,
        guest,
        normal
    };
    int type;
    string phone_number;
};
int main(){
    fstream f1;
    customer myCustomers[15];
    f1.open("ListCustomer.txt", ios::out);
    f1<<"ID\tName\tGender\tType\tPhoneNumber\n";
    for(int i=0; i<10; i++){
        cout<<"\t\tCustomer#"<<i+1;
        cout<<"\nEnter ID: "; cin>>myCustomers[i].customer_id;
        cout<<"Enter name: "; cin>>myCustomers[i].name; fflush(stdin);
        cout<<"Enter gender: "; cin>>myCustomers[i].gender; fflush(stdin);
        cout<<"Enter type (VIP = 0, Guest = 1, Normal = 2): "; cin>>myCustomers[i].type;
        cout<<"Enter phone number: "; cin>>myCustomers[i].phone_number;
        cout<<endl;
        if(myCustomers[i].type == myCustomers[i].VIP){
            f1<<myCustomers[i].customer_id<<"\t"<<myCustomers[i].name<<"\t"
                  <<myCustomers[i].gender<<"\t\tVIP\t"<<myCustomers[i].phone_number<<endl;
        }
        else if(myCustomers[i].type == myCustomers[i].guest){
            f1<<myCustomers[i].customer_id<<"\t"<<myCustomers[i].name<<"\t"
                  <<myCustomers[i].gender<<"\t\tGuest\t"<<myCustomers[i].phone_number<<endl;
        }
        else if(myCustomers[i].type == myCustomers[i].normal){
            f1<<myCustomers[i].customer_id<<"\t"<<myCustomers[i].name<<"\t"
                  <<myCustomers[i].gender<<"\t\tNormal\t"<<myCustomers[i].phone_number<<endl;
        }
    }
    f1.close();

}