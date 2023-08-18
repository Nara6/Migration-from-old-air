#include<iostream>
#include<fstream>
#include<string.h>
using namespace std;
int i=0;

struct product{
    int ID;
    string name;
    int qty;
    string category;
    float standard_price;
    float amount;
    string prod_date;
    string exp_date;
    product *next;
};
struct ListProduct{
    int n;
    product *head;
    product *tail;
};
ListProduct *createEmptyList(){
    ListProduct *ls = new ListProduct();
    ls->n = 0;
    ls->head = NULL;
    ls->tail = NULL;
    return ls;
}
void insertToEND(ListProduct *ls, product Product){
    product *p = new product();
    p->ID = Product.ID;
    p->name = Product.name;
    p->qty = Product.qty;
    p->category = Product.category;
    p->standard_price = Product.standard_price;
    p->amount = Product.amount;
    p->prod_date = Product.prod_date;
    p->exp_date = Product.exp_date;
    if(ls->n ==0 ){
        ls-> head = p;
        ls->tail = p;
    }else{
        ls->tail->next = p;
        ls->tail = p;
    }
    ls->n++;
}
void displayList(ListProduct *ls){
    product *tmp;
    tmp = ls->head;
    cout<<"===========================================================================================================================================\n";
    cout<<setw(5)<<"ID: "<<setw(15)<<"Name: "<<setw(20)<<"Category: "<<setw(20)<<"Quantity: "<<setw(20)<<"Price: "<<setw(17)<<"Amount: "<<setw(20)<<"Product Date: "<<setw(20)<<"Expired Date: "<<endl;
    cout<<"===========================================================================================================================================\n";
    while(tmp!=NULL){
        cout<<"|";
        cout<<setw(3)<<tmp->ID<<"\t";
        cout<<setw(12)<<tmp->name<<"\t";
        cout<<setw(15)<<tmp->category<<"\t";
        cout<<setw(20)<<tmp->qty<<"\t";
        cout<<setw(15)<<tmp->standard_price<<"\t";
        cout<<setw(15)<<tmp->amount<<"\t";
        cout<<setw(20)<<tmp->prod_date<<"\t";
        cout<<setw(20)<<tmp->exp_date<<"\t";
        cout<<"|";
        cout<<endl;
        tmp = tmp->next;
    }
    cout<<"\n";
}
// product Product[100];
void createNewProduct(){
    product Product;
    cout<<"\t\t*Create New Product.\n";
    cout<<"\tID: ";cin>>Product.ID;
    cout<<"\tName: "; getline(cin>>ws,Product.name);
    cout<<"\tCategory: "; getline(cin>>ws,Product.category);
    cout<<"\tQuantity: "; cin>>Product.qty;
    cout<<"\tStandard Price: "; cin>>Product.standard_price;
    cout<<"\tProduce Date: "; cin>>Product.prod_date;
    cout<<"\tExpired Date: "; cin>>Product.exp_date;
    Product.amount = Product.qty*Product.standard_price;
    fstream F1;
    F1.open("product.txt", ios::app);
    F1<<Product.ID<<"\t"<<Product.name<<"\t"<<Product.category<<"\t"<<Product.qty<<"\t"<<Product.standard_price<<"\t"<<Product.amount<<"\t"<<Product.prod_date<<"\t"<<Product.exp_date<<endl;
    F1.close();
}
ListProduct *l1;
void readFromFile(){
    fstream F2;
    //int l=0;
    //string des;
    l1 = createEmptyList();
    product Product;
    F2.open("product.txt", ios::in);
    while(!F2.eof()){
        F2>>Product.ID;
        F2>>Product.name;
        F2>>Product.category;
        F2>>Product.qty;
        F2>>Product.standard_price;
        F2>>Product.amount;
        F2>>Product.prod_date;
        F2>>Product.exp_date;
        if(F2.eof()){
            break;
        }
        insertToEND(l1, Product);
    }
    displayList(l1);
    F2.close();
}
int updateByID(ListProduct *ls){
    product *tmp;
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
void readByID(ListProduct *ls){
    product *tmp;
    tmp = ls->head;
    int ID,c=0;
    cout<<"Product ID: "; cin>>ID;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            c++;
        }
        tmp=tmp->next;
    }
    cout<<c;
    // while(tmp!=NULL){
    //     if(c>1){
    //         if(tmp->ID == ID){
    //         cout<<"|";
    //         cout<<setw(3)<<tmp->ID<<"\t";
    //         cout<<setw(12)<<tmp->name<<"\t";
    //         cout<<setw(15)<<tmp->category<<"\t";
    //         cout<<setw(20)<<tmp->qty<<"\t";
    //         cout<<setw(15)<<tmp->standard_price<<"\t";
    //         cout<<setw(15)<<tmp->amount<<"\t";
    //         cout<<setw(20)<<tmp->prod_date<<"\t";
    //         cout<<setw(20)<<tmp->exp_date<<"\t";
    //         cout<<"|";
    //         cout<<endl;
    //         //c++;
    //         }
    //     }else{
    //         if(tmp->ID == ID){
    //         cout<<"|";
    //         cout<<setw(3)<<tmp->ID<<"\t";
    //         cout<<setw(12)<<tmp->name<<"\t";
    //         cout<<setw(15)<<tmp->category<<"\t";
    //         cout<<setw(20)<<tmp->qty<<"\t";
    //         cout<<setw(15)<<tmp->standard_price<<"\t";
    //         cout<<setw(15)<<tmp->amount<<"\t";
    //         cout<<setw(20)<<tmp->prod_date<<"\t";
    //         cout<<setw(20)<<tmp->exp_date<<"\t";
    //         cout<<"|";
    //         cout<<endl;
    //         }
    //     }
    //     tmp = tmp->next;
    //}
    if(c>1){
        while(tmp!=NULL){
            cout<<"|";
            cout<<setw(3)<<tmp->ID<<"\t";
            cout<<setw(12)<<tmp->name<<"\t";
            cout<<setw(15)<<tmp->category<<"\t";
            cout<<setw(20)<<tmp->qty<<"\t";
            cout<<setw(15)<<tmp->standard_price<<"\t";
            cout<<setw(15)<<tmp->amount<<"\t";
            cout<<setw(20)<<tmp->prod_date<<"\t";
            cout<<setw(20)<<tmp->exp_date<<"\t";
            cout<<"|";
            cout<<endl;
            tmp=tmp->next;
        }
    }else{
        while(tmp!=NULL){
            cout<<"|";
            cout<<setw(3)<<tmp->ID<<"\t";
            cout<<setw(12)<<tmp->name<<"\t";
            cout<<setw(15)<<tmp->category<<"\t";
            cout<<setw(20)<<tmp->qty<<"\t";
            cout<<setw(15)<<tmp->standard_price<<"\t";
            cout<<setw(15)<<tmp->amount<<"\t";
            cout<<setw(20)<<tmp->prod_date<<"\t";
            cout<<setw(20)<<tmp->exp_date<<"\t";
            cout<<"|";
            cout<<endl;
            tmp = tmp->next;
        }
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}
void deleteByID(ListProduct *ls){
    int ID;
    //product Product;
    product *tmp;
    tmp = ls->head;
    fstream old,New;
    old.open("product.txt", ios::in);
    New.open("new_product.txt", ios::out);
    cout<<"Enter an ID Product: ";cin>>ID;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"\tProduct Successfully Deleted!"<<endl;
        }else if(tmp->ID != ID){
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }else{
            New<<tmp->ID - 1<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }
        tmp = tmp->next;
    }


    old.close();
    New.close();
    remove("product.txt");
    rename("new_product.txt", "product.txt");
}
void updateID(ListProduct *ls,int ID){
    int newID;
    product *tmp;
    fstream old,New;
    old.open("product.txt", ios::in);
    New.open("new_product.txt", ios::out);
    tmp = ls->head;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"New ID: "; cin>>newID;
            tmp->ID = newID;
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
            cout<<"\tProduct Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("product.txt");
    rename("new_product.txt", "product.txt");
}
void updateName(ListProduct *ls,int ID){
    string newName;
    product *tmp;
    fstream old,New;
    old.open("product.txt", ios::in);
    New.open("new_product.txt", ios::out);
    tmp = ls->head;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"New Name: "; cin>>newName;
            tmp->name = newName;
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
            cout<<"\tProduct Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("product.txt");
    rename("new_product.txt", "product.txt");
}
void updateCategory(ListProduct *ls,int ID){
    string newCategory;
    product *tmp;
    fstream old,New;
    old.open("product.txt", ios::in);
    New.open("new_product.txt", ios::out);
    tmp = ls->head;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"New Category: "; cin>>newCategory;
            tmp->category = newCategory;
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
            cout<<"\tProduct Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("product.txt");
    rename("new_product.txt", "product.txt");
}
void updateQty(ListProduct *ls,int ID){
    int newQty;
    product *tmp;
    fstream old,New;
    old.open("product.txt", ios::in);
    New.open("new_product.txt", ios::out);
    tmp = ls->head;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"New Quantity: "; cin>>newQty;
            tmp->qty = newQty;
            tmp->amount = tmp->qty*tmp->standard_price;
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
            cout<<"\tProduct Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("product.txt");
    rename("new_product.txt", "product.txt");
}
void updateStandardPrice(ListProduct *ls,int ID){
    double newSP;
    product *tmp;
    fstream old,New;
    old.open("product.txt", ios::in);
    New.open("new_product.txt", ios::out);
    tmp = ls->head;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<"New Stadard Price: "; cin>>newSP;
            tmp->standard_price = newSP;
            tmp->amount = tmp->standard_price*tmp->qty;
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
            cout<<"\tProduct Successfully Updated!"<<endl;
        }else{
            New<<tmp->ID<<"\t"<<tmp->name<<"\t"<<tmp->category<<"\t"<<tmp->qty<<"\t"<<tmp->standard_price<<"\t"<<tmp->amount<<endl;
        }
        tmp = tmp->next;
    }
    old.close();
    New.close();
    remove("product.txt");
    rename("new_product.txt", "product.txt");
}
void searchByID(ListProduct *ls){
    product *tmp;
    tmp = ls->head;
    int ID,c=0;
    cout<<"Product ID: "; cin>>ID;
    while(tmp!=NULL){
        if(tmp->ID == ID){
            cout<<tmp->ID<<"\t";
            cout<<tmp->name<<"\t";
            cout<<tmp->category<<"\t";
            cout<<tmp->qty<<"\t";
            cout<<tmp->standard_price<<"\t";
            cout<<tmp->amount<<"\t";
            cout<<endl;
            c++;
        }
        tmp = tmp->next;
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}
void searchByName(ListProduct *ls){
    string name;
    int c=0;
    product *tmp;
    tmp = ls->head;
    cout<<"Product Name: "; cin>>name;
    while(tmp!=NULL){
        if(tmp->name == name){
            cout<<tmp->ID<<"\t";
            cout<<tmp->name<<"\t";
            cout<<tmp->category<<"\t";
            cout<<tmp->qty<<"\t";
            cout<<tmp->standard_price<<"\t";
            cout<<tmp->amount<<"\t";
            cout<<endl;
            c++;
        }
        tmp = tmp->next;
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}
void searchByCategory(ListProduct *ls){
    string category;
    int c=0;
    product *tmp;
    tmp = ls->head;
    cout<<"Product Category: "; cin>>category;
    while(tmp!=NULL){
        if(tmp->category == category){
            cout<<tmp->ID<<"\t";
            cout<<tmp->name<<"\t";
            cout<<tmp->category<<"\t";
            cout<<tmp->qty<<"\t";
            cout<<tmp->standard_price<<"\t";
            cout<<tmp->amount<<"\t";
            cout<<endl;
            c++;
        }
        tmp = tmp->next;
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}
void searchByQty(ListProduct *ls){
    int qty;
    int c=0;
    product *tmp;
    tmp = ls->head;
    cout<<"Product Quantity: "; cin>>qty;
    while(tmp!=NULL){
        if(tmp->qty == qty){
            cout<<tmp->ID<<"\t";
            cout<<tmp->name<<"\t";
            cout<<tmp->category<<"\t";
            cout<<tmp->qty<<"\t";
            cout<<tmp->standard_price<<"\t";
            cout<<tmp->amount<<"\t";
            cout<<endl;
            c++;
        }
        tmp = tmp->next;
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}
void searchByStandardPrice(ListProduct *ls){
    float SP;
    int c=0;
    product *tmp;
    tmp = ls->head;
    cout<<"Product Standard Price: "; cin>>SP;
    while(tmp!=NULL){
        if(tmp->standard_price == SP){
            cout<<tmp->ID<<"\t";
            cout<<tmp->name<<"\t";
            cout<<tmp->category<<"\t";
            cout<<tmp->qty<<"\t";
            cout<<tmp->standard_price<<"\t";
            cout<<tmp->amount<<"\t";
            cout<<endl;
            c++;
        }
        tmp = tmp->next;
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}
void searchByAmount(ListProduct *ls){
    float amount;
    int c=0;
    product *tmp;
    tmp = ls->head;
    cout<<"Product Amount: "; cin>>amount;
    while(tmp!=NULL){
        if(tmp->amount == amount){
            cout<<tmp->ID<<"\t";
            cout<<tmp->name<<"\t";
            cout<<tmp->category<<"\t";
            cout<<tmp->qty<<"\t";
            cout<<tmp->standard_price<<"\t";
            cout<<tmp->amount<<"\t";
            cout<<endl;
            c++;
        }
        tmp = tmp->next;
    }
    if(c==0){
        cout<<"Product Not Found!"<<endl;
    }
}

int main(){
    //createNewProduct();
    // createNewProduct();
    // insertToFile();
    readFromFile();
    readByID(l1);
    //deleteByID(l1);
    //updateID(l1);
    //updateName(l1);
   // updateCategory(l1);
    //updateQty(l1);
    //updateStandardPrice(l1);
    //displayProduct();
    //searchByID(l1);
    //searchByName(l1);
    // searchByCategory(l1);
    // searchByQty(l1);
    // searchByStandardPrice(l1);
    // searchByAmount(l1);
}