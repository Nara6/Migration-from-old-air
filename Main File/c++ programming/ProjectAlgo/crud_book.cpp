#include<iostream>
#include<fstream>
#include<iomanip>
using namespace std;
struct book{
    int ID;
    float price;
    string ISBN;
    string title;
    string author;
    string type;
    string publisher;
    string publish_date;
    book *next;
};
struct ListBook{
    int n;
    book *head;
    book *tail;
};
ListBook *createEmptyListBook(){
    ListBook *ls = new ListBook();
    ls->n = 0;
    ls->head = NULL;
    ls->tail = NULL;
    return ls;
}
void insertToENDBook(ListBook *ls, book Book){
    book *b = new book();
    b->ID = Book.ID;
    b->ISBN = Book.ISBN;
    b->price = Book.price;
    b->title = Book.title;
    b->author = Book.author;
    b->type = Book.type;
    b->publisher = Book.publisher;
    b->publish_date = Book.publish_date;
    if(ls->n==0){
        ls->head = b;
        ls->tail = b;
    }else{
        ls->tail->next = b;
        ls->tail = b;
    }
    ls->n++;
}
ListBook *l2;
void displayBookList(ListBook *ls){
    book *tmp;
    tmp = ls->head;
    while(tmp!=NULL){
        cout<<"|";
        cout<<setw(4)<<tmp->ID;
        cout<<setw(20)<<tmp->ISBN;
        cout<<setw(20)<<tmp->title;
        cout<<setw(20)<<tmp->type;
        cout<<setw(10)<<tmp->price;
        cout<<setw(25)<<tmp->author;
        cout<<setw(20)<<tmp->publisher;
        cout<<setw(19)<<tmp->publish_date;
        cout<<"|";
        cout<<endl;
        tmp = tmp->next;
    }
    cout<<"\n";
}
void CreateNew(){
    book Book;
    cout<<"\t\t*Create New Book!\n";
    cout<<"\tID: "; cin>>Book.ID;
    cout<<"\tISBN: "; cin>>Book.ISBN;
    cout<<"\tTitle: "; getline(cin>>ws,Book.title);
    cout<<"\tType: "; getline(cin>>ws,Book.type);
    cout<<"\tPrice: "; cin>>Book.price;
    cout<<"\tAuthor: "; getline(cin>>ws,Book.author);
    cout<<"\tPublisher: "; getline(cin>>ws,Book.publisher);
    cout<<"\tPublish Date: "; getline(cin>>ws,Book.publish_date);
    fstream insert;
    insert.open("book.txt", ios::app);
    insert<<Book.ID<<"\t"<<Book.ISBN<<"\t"<<Book.title<<"\t"<<Book.type<<"\t"<<Book.price<<"\t"<<Book.author<<"\t"<<Book.publisher<<"\t"<<Book.publish_date<<endl;
    insert.close();
}
void readFromFile(ListBook *ls){
    book Book;
    l2 = createEmptyListBook();
    fstream read;
    read.open("book.txt", ios::in);
    while(!read.eof()){
        read>>Book.ID;
        read>>Book.ISBN;
        read>>Book.title;
        read>>Book.type;
        read>>Book.price;
        read>>Book.author;
        read>>Book.publisher;
        read>>Book.publish_date;
        if(read.eof()){
            break;
        }
        insertToENDBook(l2,Book);
    }
    cout<<"===========================================================================================================================================\n";
    cout<<setw(5)<<"ID: "<<setw(20)<<"ISBN: "<<setw(19)<<"Title: "<<setw(20)<<"Type: "<<setw(13)<<"Price: "<<setw(20)<<"Author:"<<setw(20)<<"Publisher: "<<setw(23)<<"Publish date: ";
    cout<<"\n===========================================================================================================================================\n";
    displayBookList(l2);
    read.close();
}
int updateByBookID(ListBook *ls){
    book *tmp;
    tmp = ls->head;
    int ID;
    cout<<"Enter an ID: "; cin>>ID;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            return tmp->ID;
        }
        tmp = tmp->next;
    }
}
void updateID(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    int newID;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new ID: "; cin>>newID;
            tmp->ID = newID;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updateISBN(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    string ISBN;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new ISBN: "; cin>>ISBN;
            tmp->ISBN = ISBN;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updateTitle(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    string title;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new Title: "; cin>>title;
            tmp->title = title;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updateType(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    string type;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new Type: "; cin>>type;
            tmp->type = type;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updatePrice(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    float price;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new Price: "; cin>>price;
            tmp->price = price;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updateAuthor(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    string author;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new Author: "; cin>>author;
            tmp->author = author;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updatePublisher(ListBook *ls){
    book *tmp;
    tmp = ls->head;
    string publisher;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new Publisher: "; cin>>publisher;
            tmp->publisher = publisher;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void updatePublishDate(ListBook *ls,int ID){
    book *tmp;
    tmp = ls->head;
    string publish_date;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"Enter new Publish Date: "; cin>>publish_date;
            tmp->publish_date = publish_date;
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
            cout<<"\tBook Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}
void deleteByID(ListBook *ls){
    book *tmp;
    tmp = ls->head;
    int ID;
    fstream old,New;
    old.open("book.txt", ios::in);
    New.open("new_book.txt", ios::out);
    cout<<"Enter an ID: "; cin>>ID;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"\tProduct Successfully deleted!"<<endl;
        }else if(tmp->ID != ID){
            New<<tmp->ID<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }else{
            New<<tmp->ID - 1<<"\t"<<tmp->ISBN<<"\t"<<tmp->title<<"\t"<<tmp->type<<"\t"<<tmp->price<<"\t"<<tmp->author<<"\t"<<tmp->publisher<<"\t"<<tmp->publish_date<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("book.txt");
    rename("new_book.txt", "book.txt");
}

int main(){
    //CreateNew();
    //displayBook();
    //insertToFile();
    //CreateNew();
    //insertToFile();
    //cout<<i;
    readFromFile(l2);
    int ID = updateByBookID(l2);
    updateID(l2,ID);
    //updateISBN(l2);
    //updateTitle(l2);
    // updateType(l2);
    // updatePrice(l2);
    // updateAuthor(l2);
    // updatePublisher(l2);
    // updatePublishDate(l2);
    //deleteByID(l2);
}