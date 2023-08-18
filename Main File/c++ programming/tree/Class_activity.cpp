#include<iostream>
using namespace std;

struct Node{
    int data;
    Node *left;
    Node *right;
};
Node *insertData2Tree(Node *root, int newData){
    if(root==NULL){// new node here
        root = new Node;
        root->data = newData;
        root->left = NULL;
        root->right = NULL;
    }else if(newData> root->data){
        root->right = insertData2Tree(root->right, newData);
    }else if(newData< root->data){
        root->left = insertData2Tree(root->left, newData);
    }
    return root;
}
void preOrder(Node * root){
    if(root!=NULL){
        cout<<root->data<<" ";
        preOrder(root->left);
        preOrder(root->right);
    }
}
void inOrder(Node *root){
    if(root!=NULL){
        inOrder(root->left);
        cout<<root->data<<" ";
        inOrder(root->right);
    }

}
void postOrder(Node *root){
    if(root!=NULL){
        postOrder(root->left);
        postOrder(root->right);
        cout<<root->data<<" ";
    }
}
int c=0;
bool searchData(Node *root, int data){
    c++;
    if(root==NULL){
        return false;
    }else if(root->data == data){
        return true;
    }else if(data<root->data){
        return searchData(root->left, data);
    }else if(data>root->data){
        return searchData(root->right, data);
    }
}

int main(){
    Node *tree1;
    
    tree1 = NULL;
    tree1 = insertData2Tree(tree1, 15);
    tree1 = insertData2Tree(tree1, 9);
    tree1 = insertData2Tree(tree1, 23);
    tree1 = insertData2Tree(tree1, 3);
    tree1 = insertData2Tree(tree1, 12);
    tree1 = insertData2Tree(tree1, 19);
    tree1 = insertData2Tree(tree1, 21);
    cout<<"PreOrder method: ";
    preOrder(tree1);
    cout<<endl;
    cout<<"InOrder method: ";
    inOrder(tree1);
    cout<<"\nPostOrder method: ";
    postOrder(tree1);
    if(searchData(tree1,23)){
        cout<<"\nData found!\t"<<c<<"Time";
    }else {
        cout<<"\nNothing found!";
    }
}