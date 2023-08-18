#include<iostream>
using namespace std;

struct Book{
    string ID;
    string ISBN;
    string title;
    int year;
    string Author_name;
    int price;
};

void AddInfo(Book book[], int size){
    cout<<"---------------------- Store Info of the Book ----------------------";
    for(int i=0; i<size; i++){
        cout<<"\nBook#"<<i+1<<"";
        cout<<"\n\tID: "; cin>>book[i].ID;
        cout<<"\tISBN: "; cin>>book[i].ISBN;
        cout<<"\tTitle: "; cin>>book[i].title;
        cout<<"\tPublished Year: "; cin>>book[i].year;
        cout<<"\tAuthor Name: "; cin>>book[i].Author_name;
        cout<<"\tPrice: "; cin>>book[i].price;
    }
}
void DisplayBookByISBN(Book book[],int size){
    string Book_ISBN;
    cout<<"\n Please Enter Book ISBN: "; cin>>Book_ISBN;
    cout<<"\nID: \t\tISBN: \t\t\tTitle: \t\t\tPublished Year: \t\t\tAuthor: \t\t\t\tPrice:\n";
    for(int i=0;i<size;i++){
        if(book[i].ISBN == Book_ISBN){
            cout<<book[i].ID<<"\t\t"<<book[i].ISBN<<"\t\t\t"<<book[i].title<<"\t\t\t"<<book[i].year<<"\t\t\t\t"<<book[i].Author_name<<"\t\t\t\t"<<book[i].price<<"\n";
        }
    }
}
void DisplayAllInfo(Book book[], int size){
    cout<<"\nID: \t\tISBN: \t\t\tTitle: \t\t\tPublished Year: \t\t\tAuthor: \t\t\t\tPrice:\n";
    for(int i=0;i<size;i++){

        cout<<book[i].ID<<"\t\t"<<book[i].ISBN<<"\t\t\t"<<book[i].title<<"\t\t\t"<<book[i].year<<"\t\t\t\t"<<book[i].Author_name<<"\t\t\t\t"<<book[i].price<<"\n";
    }

}
int main(){
    Book book[6];
    int size=6; 
    AddInfo(book,size);
    DisplayAllInfo(book,size);
    DisplayBookByISBN(book,size);
}