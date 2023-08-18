#include<stdio.h>
#include<string.h>

main(){
    char title[5][20], author_name[5][20];
    int code[5], book_price[5], year[5], state, highest_price;
    printf("=========================>> Book Store Information <<==============================\n\n");
    for(int i=0; i<5; i++){
        printf("Please Enter Title Of the Book #%d: ",i+1);
        scanf("%s",&title[i]);
        printf("Please Input The Author Name of the #%d Book: ",i+1);
        scanf("%s",&author_name[i]);
        printf("Please Input The Code of the Book #%d: ",i+1);
        scanf("%d",&code[i]);
        printf("Pleae Enter a Book Price($) #%d: ",i+1);
        scanf("%d",&book_price[i]);
        printf("Please Enter a Published Year #%d: ",i+1);
        scanf("%d",&year[i]);
        printf("======================================================================================\n");
        printf("\n");
    }
    state=2010;
    //Show all data of books.
    printf("=================================>> The Information of the Books <<===========================================\n");
    printf("|Title \t\t\t\t|Author \t\t\t|Code \t\t\t|Price \t\t\t|Publish Year\n");
    for(int i=0; i<5; i++){
        printf("%s \t\t\t %s \t\t\t\t%d \t\t\t%d \t\t\t%d\n",title[i],author_name[i],code[i],book_price[i],year[i]);
    }
    //Show info of books which published after 2010 onwards.
    printf("\n==================>> The Information of the Books which published after 2010 onwards. <<====================\n");
    printf("|Title \t\t\t\t|Author \t\t\t|Code \t\t\t|Price \t\t\t|Publish Year\n");
    for(int i=0; i<5; i++){
        if(year[i]>state){
            printf("%s \t\t\t %s \t\t\t\t%d \t\t\t%d \t\t\t%d\n",title[i],author_name[i],code[i],book_price[i],year[i]);
        }
    }
    //Show info of books which has the most expensive price.
    printf("===================>> The Information of the Books which has Most the expensive price <<======================\n");
    printf("|Title \t\t\t\t|Author \t\t\t|Code \t\t\t|Price \t\t\t|Publish Year\n");
    highest_price = book_price[0];
    for(int i=0; i<5; i++){
        if(highest_price > book_price[i]){
            continue;
        }else if(highest_price < book_price[i]){
            highest_price = book_price[i];
        }
    }
    for(int i=0; i<5; i++){
        if(highest_price == book_price[i]){
            printf("%s \t\t\t %s \t\t\t\t%d \t\t\t%d \t\t\t%d\n",title[i],author_name[i],code[i],book_price[i],year[i]);
        }
    }
    //Show info of books whose author is John. (make sure to input John as one of the author in the book above when input data)
    printf("==================================>> The Information of Author Name John <<==================================\n");
    printf("|Title \t\t\t\t|Author \t\t\t|Code \t\t\t|Price \t\t\t|Publish Year\n");
    for(int i=0; i<5; i++){
        if(strcmp(author_name[i],"John")==0 || strcmp(author_name[i],"john")==0){
            printf("%s \t\t\t %s \t\t\t\t%d \t\t\t%d \t\t\t%d\n",title[i],author_name[i],code[i],book_price[i],year[i]);
        }
    }


}