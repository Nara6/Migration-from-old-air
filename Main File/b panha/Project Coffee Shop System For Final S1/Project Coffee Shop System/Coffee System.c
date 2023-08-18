#include<stdio.h>
#include<string.h>

//design function
void coffeePic();
void welcomeFunction();
void loadingbar();
void displayQuote();
void displayKey();

//main function
void orderCoffee();//good need test
void stockAdministration(char function[]);//good need test
void employeeAdministration(char function[]);//good
//small function for ordering function
void listAllCoffee();//good
void displayCoffeeType();//good
int findAllDrink();//good
int checkStockOrder(int idOrder,int quantity);//good
int confirmOrderCus(int idOrder,int quantity,int type);//good
float discountVipCard(int idOrder,int cusIdea,int type);//good
int checkCusNumber(int index);//good
float displayInvoice(int idOrder,int cusIdea,int type,int quantity);
int payment(float balanceDue);
void storeDataInFile(int idOrder,int cusIdea,int type,int quantity,int method);
void minusStock(int idOrder,int quantity);
//for stock
void viewStock();
void insertNewCoffeeData();
void deleteCoffeeData();
void updateCoffeeData(int index);
void displayDataOfProfit(int index,char d[],char M[],char y[]);
void displayDataOfSellCoffee(int index,char d[],char M[],char y[]);
//for employee
void listEmployeeInformation();
void sortbyRole();
void highLowSalary(int index);
void addEmployeeInformation();
void updateEmployeeList();
void deleteEmployee();
void resetPassword(int index);

main(){
    system("color e0");
    welcomeFunction(); //Welcome logo
    system("cls");
    loadingbar(); //coffee cup logo and loading
    while(1){
        printf("\n\n\n\t\t\t\t ------ Please Choose The Operation To Run ----- \n");
        printf("\n\t\t\t\t\t   1. Order Drink ");
        Sleep(50);
        printf("\n\t\t\t\t\t   2. Stock Administration ");
        Sleep(50);
        printf("\n\t\t\t\t\t   3. Employee Administration");
        Sleep(50);
        printf("\n\t\t\t\t\t   0. Close program ");
        Sleep(50);
        printf("\n\n\t\t\t\t\tInput number here : ");
        char functions[5];
        scanf("%s",&functions);
        //function 1
        if(strcmp(functions,"1")==0){
            orderCoffee();
        }
        //function 2
        else if(strcmp(functions,"2")==0){
            system("cls");
            while(1){
                char pass[15],function[10],passEm[15],key[15];
                FILE *password=fopen("Password Project.bin","rb");
                fscanf(password,"%s %s",&passEm,&key);
                fclose(password);
                while(1){
                    printf("\n\t2. Stock Administration\n");
                    printf("\n\n\n\n");
                    displayKey();
                    printf("\n\n\t\t\t    PLEASE ENTER THE PASSWORD TO ACCESS ");
                    printf("\n\n\t\t\t                               AND ");
                    printf("\n\n\t\t\t                         INPUT NUMBER 0 TO RETURN TO MENU ");
                    printf("\n\n\n\t\t\t\t\t     Input password here : ");
                    scanf("%s",&pass);
                    if(strcmp(pass,"0")==0){break;}
                    else if(strcmp(pass,key)==0){
                        printf("\n\n\t\t\t\t\t         PASSWORD CORRECT ...!");
                        Sleep(850);
                        break;}
                    else{
                        system("cls");
                        Sleep(10);
                        printf("\n\t\t\t\t\t    WARNING : WRONG PASSWORD ...!");
                    }
                }
                if(strcmp(pass,"0")==0){
                    system("cls");
                    coffeePic();
                    printf("\n\n\t\t\t          L I F E   B E G I N   A F T E R   C O F F E E");
                    break;
                }
                system("cls");
                while(1){
                    printf("\n\t2. Stock Administration\n");
                    printf("\n\n\t\t\t ********** EMPLOYEES MANAGEMENT SYSTEM **********"); Sleep(30);
                    printf("\n\n\t\t\t       1. View Stock Info"); Sleep(30);
                    printf("\n\n\t\t\t       2. Add Or Minus New Stock"); Sleep(30);
                    printf("\n\n\t\t\t       3. Add New Coffee Type"); Sleep(30);
                    printf("\n\n\t\t\t       4. Modify Coffee Info"); Sleep(30);
                    printf("\n\n\t\t\t       5. Delete Coffee Info"); Sleep(30);
                    printf("\n\n\t\t\t       6. Summarize Selling Data"); Sleep(30);
                    printf("\n\n\t\t\t       7. List Stock In&Out Date"); Sleep(30);
                    printf("\n\n\t\t\t       8. Reset Password Login"); Sleep(30);
                    printf("\n\n\t\t\t       0. Exit System\n"); Sleep(30);
                    printf("\n\n\t\t\t  Please Choose One Function To Run !");
                    printf("\n\n\t\t\t\t\t\t    Input number here : ");
                    scanf("%s", &function);
                    if(strcmp(function,"0")==0){ break;}
                    stockAdministration(function);
                }
                if(strcmp(function,"0")==0){
                    system("cls");
                    coffeePic();
                    printf("\n\n\t\t\t          L I F E   B E G I N   A F T E R   C O F F E E");
                    break;
                }
            }
        }
        //function 3
        else if(strcmp(functions,"3")==0){
            system("cls");
            while(1){
                char pass[15],function[10],key[15],passSa[15];
                FILE *password=fopen("Password Project.bin","rb");
                fscanf(password,"%s %s",&key,&passSa);
                fclose(password);
                while(1){
                    printf("\n\t3. Employee Administration\n");
                    printf("\n\n\n\n");
                    displayKey();
                    printf("\n\n\t\t\t    PLEASE ENTER THE PASSWORD TO ACCESS ");
                    printf("\n\n\t\t\t                               AND ");
                    printf("\n\n\t\t\t                         INPUT NUMBER 0 TO RETURN TO MENU ");
                    printf("\n\n\n\t\t\t\t\t     Input password here : ");
                    scanf("%s",&pass);
                    if(strcmp(pass,"0")==0){break;}
                    else if(strcmp(pass,key)==0){
                        printf("\n\n\t\t\t\t\t         PASSWORD CORRECT ...!");
                        Sleep(850);
                        break;}
                    else{
                        system("cls");
                        Sleep(10);
                        printf("\n\t\t\t\t\t    WARNING : WRONG PASSWORD ...!");
                    }
                }
                if(strcmp(pass,"0")==0){
                    system("cls");
                    coffeePic();
                    printf("\n\n\t\t\t          L I F E   B E G I N   A F T E R   C O F F E E");
                    break;
                }
                system("cls");
                while(1){
                    printf("\n\t3. Employee Administration\n");
                    printf("\n\n\t\t\t ********** EMPLOYEES MANAGEMENT SYSTEM **********"); Sleep(30);
                    printf("\n\n\t\t\t       1. List Info Of All Employee"); Sleep(30);
                    printf("\n\n\t\t\t       2. List Info Of Employee By Role"); Sleep(30);
                    printf("\n\n\t\t\t       3. Show Lowest And Highest Employee Salary"); Sleep(30);
                    printf("\n\n\t\t\t       4. Add New Employee's Records"); Sleep(30);
                    printf("\n\n\t\t\t       5. Modify Employee's Records"); Sleep(30);
                    printf("\n\n\t\t\t       6. Delete Employee's Records"); Sleep(30);
                    printf("\n\n\t\t\t       7. Reset Password Login"); Sleep(30);
                    printf("\n\n\t\t\t       0. Exit System\n"); Sleep(30);
                    printf("\n\n\t\t\t  Please Choose One Function To Run !");
                    printf("\n\n\t\t\t\t\t\t    Input number here : ");
                    scanf("%s", &function);
                    if(strcmp(function,"0")==0){ break;}
                    employeeAdministration(function);
                }
                if(strcmp(function,"0")==0){
                    system("cls");
                    coffeePic();
                    printf("\n\n\t\t\t         L I F E   B E G I N   A F T E R   C O F F E E");
                    break;
                }
            }
        }
        else if(strcmp(functions,"0")==0){
            break;
        }
        else{
            system("cls");
            printf("\n\t\t\t\t    WARNING : YOUR INPUT NUMBER ISN'T MATCHED !!");
            coffeePic();
            printf("\n\n\t\t\t          L I F E   B E G I N   A F T E R   C O F F E E");
        }
    }
}
//print coffee picture
void coffeePic(){
    printf("\n\n");
    printf("\t\t\t\t\t          \\   \\   /                 \n");
    printf("\t\t\t\t\t        \\  \\  /  /  /               \n");
    printf("\t\t\t\t\t         \\ / /  |  /                 \n");
    printf("\t\t\t\t\t                                      \n");
    printf("\t\t\t\t\t        ?????????????? * *            \n");
    printf("\t\t\t\t\t        ??????????????     *          \n");
    printf("\t\t\t\t\t         ????????????      *          \n");
    printf("\t\t\t\t\t          ?????????? * * *            \n");
    printf("\t\t\t\t\t           ????????                   \n");
}
//display key picture
void displayKey(){
    printf("\t\t\t\t\t                            *****                 \n");
    printf("\t\t\t\t\t                           *******                \n");
    printf("\t\t\t\t\t                         ***     **               \n");
    printf("\t\t\t\t\t  //************************      **              \n");
    printf("\t\t\t\t\t //*************************      **              \n");
    printf("\t\t\t\t\t   ||||||||              ***     **               \n");
    printf("\t\t\t\t\t   PASSWORD                *******                \n");
    printf("\t\t\t\t\t                            *****                 \n");
}
//for print loading
void loadingbar(){
    char quote[50]="LIFE BEGINS AFTER COFFEE";
	for (int i=15;i<=100;i+=5){
        system("cls");
        coffeePic();
        printf("\n\n\t\t\t\t\t       ");
		printf(" %d %% Loading...\n\n\t\t",i);
		printf("\t     ");
		for (int j=0; j<i;j+=2){
			printf(" ");
		}
		Sleep(120);
	}
	system("cls");
	coffeePic();
    printf("\n\n\t\t\t         ");
	for(int i=0;i<strlen(quote);i++){
        printf(" %c",quote[i]);
        Sleep(70);
	}
	Sleep(100);
}
//for print welcome
void welcomeFunction(){
    char welcome[50]="WELCOME";
	char welcome2[50]=" TO";
	char welcome3[50]=" COFFEE SHOP";
	char welcome4[50]=" MANAGEMENT SYSTEM";
	printf("\n\n\n\n\n\t\t\t\t");
	for(int i=0;i<strlen(welcome);i++){
		printf(" %c",welcome[i]);
		Sleep(75);
	}
	printf("\n\n\n\t\t\t\t\t ");
	for(int i=0;i<strlen(welcome2);i++){
		printf(" %c",welcome2[i]);
		Sleep(75);
	}
	printf("\n\n\n\t\t\t\t ");
	for(int i=0;i<strlen(welcome3);i++){
		printf(" %c",welcome3[i]);
		Sleep(75);
	}
	printf("\n\n\n\t\t\t\t\t");
	for(int i=0;i<strlen(welcome4);i++){
		printf(" %c",welcome4[i]);
		Sleep(75);
	}
}
//display quote and line
void displayQuote(){
    printf("\n\t\t\t\t    //       E V E R Y T H I N G       \\\\    \n\n");
    printf("\t\t\t\t  ((   G E T S   B E T T E R   W I T H   ))   \n\n");
    printf("\t\t\t\t    \\\\            C O F F F            //    \n\n");
    printf("\n\t\t       //***********************************************************\\\\   ");
    printf("\n\t\t     //                                                               \\\\ ");
}
// function for list coffee information(id,coffee,standard price) for customer view and make an order.
void listAllCoffee(){
    int cofId,stock,len;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    printf("\n               |************************* WELCOME TO COFFEE SHOP SYSTEM");
    printf(" ************************|\n");
    printf("\t       |--------------------------------------------------------------------------------|\n");Sleep(20);
    printf("\t       |******************************___LIST OF DRINK___*******************************|\n");
    printf("\t       |--------------------------------------------------------------------------------|\n");Sleep(20);
    printf("\t       |    ID    |        NAME         |      HOT      |      ICE      |    FRAPPE     |\n");
    printf("\t       |--------------------------------------------------------------------------------|\n");Sleep(20);
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        len=strlen(coffeeName);
        if(len<7){
            printf("\t       |    %d\t  |\t %s\t\t|     %.2f$     |     %.2f$     |     %.2f$     |\n",cofId,coffeeName,hotSprice,iceSprice,frappeSprice);
        }
        else{
            printf("\t       |    %d\t  |\t %s\t|     %.2f$     |     %.2f$     |     %.2f$     |\n",cofId,coffeeName,hotSprice,iceSprice,frappeSprice);
        }
        printf("\t       |--------------------------------------------------------------------------------|\n");Sleep(20);
    }
    printf("\t       |    0     |          ++++++++++ Return back to Menu ++++++++++                  |\n");
    printf("\t       |--------------------------------------------------------------------------------|\n");
    fclose(coffee);
}
void displayCoffeeType(){
    printf("\n\t\t\t      |************************************************|\n");
    printf("\t\t\t      |          -----<< COFFEE TYPE >>-----           |\n");
    printf("\t\t\t      |------------------------------------------------|\n");
    printf("\t\t\t      |     1.HOT     |     2.ICE     |    3.FRAPPE    |\n");
    printf("\t\t\t      |------------------------------------------------|\n");
}
//function for find all drink we have
int findAllDrink(){
    int cofId,stock,i=0;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        i++;
    }
    fclose(coffee);
    return i;
}
//function for check stock for customer quantity order
int checkStockOrder(int idOrder,int quantity){
    //get data by customer coffee id order
    int cofId,stock;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        if(idOrder==cofId){break;}
    }
    fclose(coffee);
    //check stock
    int checkStatus=0;
    if(stock==0){
        checkStatus=1;
        printf("\n\n\t\t\t\t\t    I'm really sorry,Sir.");
        printf("\n\t\t\t\t     We ran out of stock without notice!");
        printf("\n\t\t\t        But, We have a lot of another delicious drinks!");
        printf("\n\n\t\t\t  => Would you like to order the difference once?  ");
        printf("\n\t\t\t\t\t\t\t >> Input number here (1.Yes/2.No) : ");
    }
    else if(stock-quantity<0){
        checkStatus=2;
        printf("\n\n\t\t\t\t\t    I'm really sorry,Sir.");
        printf("\n\t\t\t\t We don't have enough ingredient for %d cups",quantity);
        printf("\n\t\t\t\t         We can make only %d cups now!",stock);
        printf("\n\n\t\t\t  => Would you like to take this %d cups? ",stock);
        printf("\n\t\t\t\t\t\t\t >> Input number here (1.Yes/2.No) : ");
    }
    return checkStatus;
}
//function for confirm and ordering that customer order
int confirmOrderCus(int idOrder,int quantity,int type){
    //get data by customer coffee id order
    int cofId,stock;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        if(idOrder==cofId){break;}
    }
    fclose(coffee);
    //confirm order
    system("cls");
    coffeePic();
    displayQuote();
    char TYPE[10];
    switch(type){
        case 1: strcpy(TYPE,"HOT"); break;
        case 2: strcpy(TYPE,"ICE"); break;
        case 3: strcpy(TYPE,"FRAPPE"); break;
    }
    char s[5];
    if(quantity==1){strcpy(s,"cup");}
    else{strcpy(s,"cups");}
    printf("\n\n\t\t\t\t       Thank You for your order, Sir! ");
    printf("\n\t\t\t       But now, i want to confirm your ordering again.\n");
    printf("\n\t\t   => You take %s %s for %d %s , Right? ",coffeeName,TYPE,quantity,s);
    printf("\n\t\t\t\t\t\t\t      >> Input number here (1.Yes/2.No) : ");
    int cusIdea;
    scanf("%d",&cusIdea);
    if(cusIdea==2){
        printf("\nSorry,Sir. It's seem to be something Error!\n");
        printf("Please make an order again.\n");
    }
    return cusIdea;
}
//function for check user have card Vip and return dicount price for one cup only
float discountVipCard(int idOrder,int cusIdea,int type){
    //get data by customer coffee id order
    int cofId,stock;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        if(idOrder==cofId){break;}
    }
    fclose(coffee);
    //check discount
    float discount=0;
    if(cusIdea==1){
        if(type==1){
            discount=(hotSprice*15)/100;
        }
        else if(type==2){
            discount=(iceSprice*15)/100;
        }
        else{
            discount=(frappeSprice*15)/100;
        }
    }
    return discount;
}
//function for count No customer ID
int checkCusNumber(int index){
    int waitNum;
    FILE *cusNum=fopen("customer number.txt","r");
    fscanf(cusNum," %d",&waitNum);
    fclose(cusNum);
    if(index==1){
        FILE *newCusNum=fopen("new customer number.txt","w");
        waitNum++;
        if(waitNum==100){waitNum=1;}
        fprintf(newCusNum," %d",waitNum);
        fclose(newCusNum);
        remove("customer number.txt");
        rename("new customer number.txt","customer number.txt");
    }
    return waitNum;
}
//function to print order invoice for user
float displayInvoice(int idOrder,int cusIdea,int type,int quantity){
    //get data by customer coffee id order
    int cofId,stock;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        if(idOrder==cofId){break;}
    }
    fclose(coffee);
    //display invoice
    int cusId=checkCusNumber(0),len;
    float sprice,discount,total,balanceDue;
    if(type==1){ sprice=hotSprice; }
    else if(type==2){ sprice=iceSprice; }
    else{ sprice=frappeSprice; }
    discount=discountVipCard(idOrder,cusIdea,type)*quantity;
    total=sprice*quantity;
    balanceDue=total-discount;
    char TYPE[10];
    switch(type){
        case 1: strcpy(TYPE,"HOT"); break;
        case 2: strcpy(TYPE,"ICE"); break;
        case 3: strcpy(TYPE,"FRAPPE"); break;
    }
    strcat(coffeeName,"   ");
    strcat(coffeeName,TYPE);
    len=strlen(coffeeName);
    printf("\n\n");
    printf("\t\t\t|*******************************************************************|\n");
    printf("\t\t\t|                              RECIPT                               |\n");
    printf("\t\t\t|-------------------------------------------------------------------|\n");
    printf("\t\t\t|  Customer No : %d\t                                            |\n",cusId);
    printf("\t\t\t|  Date : %s                                               |\n",__DATE__);
    printf("\t\t\t|  Time : %s                                                  |\n",__TIME__);
    printf("\t\t\t|-------------------------------------------------------------------|\n");
    printf("\t\t\t|  DESCRIPTION          |    QTY    |   PRICE($)   |     TOTAL      |\n");
    printf("\t\t\t|-----------------------|-----------|--------------|----------------|\n");
    printf("\t\t\t|                       |           |              |                |\n");
    if(len<13){
        printf("\t\t\t|  %s\t\t|    %d\t    |  \t  %.2f\t   | \t  %.2f\t    |  \n",coffeeName,quantity,sprice,total);
    }
    else{
        printf("\t\t\t|  %s\t|    %d\t    |  \t  %.2f\t   | \t  %.2f\t    |  \n",coffeeName,quantity,sprice,total);
    }
    printf("\t\t\t|                       |           |              |                |\n");
    printf("\t\t\t|                       |           |              |                |\n");
    printf("\t\t\t|                       |           |              |                |\n");
    printf("\t\t\t|-------------------------------------------------------------------|\n");
    printf("\t\t\t|                                            Total : %.2f $\t    |\n",total);
    printf("\t\t\t|-------------------------------------------------------------------|\n");
    printf("\t\t\t|                                         Discount : %.2f $\t    |\n",discount);
    printf("\t\t\t|-------------------------------------------------------------------|\n");
    printf("\t\t\t|                                      Balance Due : %.2f $\t    |\n",balanceDue);
    printf("\t\t\t|*******************************************************************|\n");
    return balanceDue;
}
//function ask for payment
int payment(float balanceDue){
    float payment;
    int dollar,cent,method;
    printf("\n\t\t\t  => Please choose the method for payment !! ");
    printf("\n\n\t\t\t\t\t\t\t >> Input number here (1.cash / 2.card) : ");
    scanf(" %d",&method);
    if(method==1){ //1=cash ; 2=card
        //system("cls");
        printf("\n\t\t\t\t\t\t\t >> Input your cash here ($) : ",balanceDue);
        scanf("%f",&payment);
            if (payment-balanceDue>=0){
                system("cls");
                printf("\n\n\n\n\n\n\n\n");
                printf("\t\t\t|*********************************************************************|\n");
                printf("\t\t\t|                        RECIVED  :   %3.2f $\t                      |\n",payment);
                printf("\t\t\t|---------------------------------------------------------------------|\n");
                printf("\t\t\t|                         RETURN  :   %3.2f $\t                      |\n",payment-balanceDue);
                printf("\t\t\t|---------------------------------------------------------------------|\n");
                printf("\n\n\n\n\n\t\t\t\t\t     Press any key to continue !!");
                getch();
            }
            else if(payment-balanceDue<0){
                method=-10;
            }
        }
    else if(method==2){
        int pin;
        printf("\n\t\t\t  => please input your pin card number to confirm payment !!");
        printf("\n\n\t\t\t\t\t\t\t >> Input your pin here :");
        scanf("%d",&pin);
    }
    return method;
}
//function to store data of customer order to file
void storeDataInFile(int idOrder,int cusIdea,int type,int quantity,int method){
    //get data by customer coffee id order
    int cofId,stock;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        if(idOrder==cofId){break;}
    }
    fclose(coffee);
    //store data
    char TYPE[10];
    int cusId=checkCusNumber(1);
    float sprice,discount,total,balanceDue;
    if(type==1){ sprice=hotSprice; strcpy(TYPE,"HOT"); }
    else if(type==2){ sprice=iceSprice; strcpy(TYPE,"ICE"); }
    else{ sprice=frappeSprice; strcpy(TYPE,"FRAPPE"); }
    discount=discountVipCard(idOrder,cusIdea,type)*quantity;
    total=sprice*quantity;
    balanceDue=total-discount;
    FILE *cusOder=fopen("customer order.txt","a");
    fprintf(cusOder,"\n%d\t%d\t%s\t%s\t%d\t%.2f\t%.2f\t%.2f\t%.2f\t%d\t%s",cusId,idOrder,coffeeName,TYPE,quantity,sprice,total,discount,balanceDue,method,__DATE__);
    fclose(cusOder);
}
//function for minus stock when order
void minusStock(int idOrder,int quantity){
    int cofId,stock;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    FILE *newCoffee=fopen("new coffee information.txt","w");
    fprintf(newCoffee,"\n");
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        if(idOrder==cofId){
            fprintf(newCoffee,"%d\t%s\t%d\t%.2f\t%.2f\t%.2f\n",cofId,coffeeName,stock-quantity,hotSprice,iceSprice,frappeSprice);
        }
        else{
            fprintf(newCoffee,"%d\t%s\t%d\t%.2f\t%.2f\t%.2f\n",cofId,coffeeName,stock,hotSprice,iceSprice,frappeSprice);
        }
    }
    fclose(coffee);
    fclose(newCoffee);
    remove("coffee information.txt");
    rename("new coffee information.txt","coffee information.txt");
}
//function for order coffee and check confirm order
void orderCoffee(){
    int a=findAllDrink();
    float sprice;
    //to run whole function
    while(1){
        system("cls");
        printf("\n\t1. Order Drink \n");
        listAllCoffee();
        //for input number of coffee
        int corder,back=1;
        while(1){
            printf("\n\t\t    => which drink would you like to order?  ");
            printf("\n\t\t\t\t\t\t\t\t   >> Input number here : ");
            scanf("%d",&corder);
            if(corder==0){back=0; break;}
            else if(corder>0 && corder<=a){
                printf("\n"); break;
            }
            else{
                system("cls");
                printf("\n\t\t\t\t    WARNING : YOUR INPUT NUMBER ISN'T MATCHED !!");
                printf("\n\t1. Order Drink \n");
                listAllCoffee();
                continue; }
        }
        if(back==0){
            system("cls");
            coffeePic();
            printf("\n\n\t\t\t          L I F E   B E G I N   A F T E R   C O F F E E");
            break;
        }
        //for input type of coffee
        int type;
        system("cls");
        while(1){
            coffeePic();
            displayQuote();
            displayCoffeeType();
            printf("\n\t\t\t  => Which type do you want? ");
            printf("\n\t\t\t\t\t\t\t   >> Input number here : ");
            scanf("%d",&type);
            if(type>0 && type<4){break;}
            else{
                system("cls");
                printf("\n\t\t\t\t    WARNING : YOUR INPUT NUMBER ISN'T MATCHED !!");}
        }
        //for input quantity of coffee
        int ncup;
        system("cls");
        while(1){
            coffeePic();
            displayQuote();
            printf("\n\n\t\t\t  => How many cups would you want? ");
            printf("\n\t\t\t\t\t\t\t   >> Input number here : ");
            scanf("%d",&ncup);
            if(ncup>0){ printf("\n");break;}
            else{
                system("cls");
                printf("\n\t\t\t\t    WARNING : YOU MUST ORDER AT LEAST 1 CUP !!");}
        }
        //check status of stock and customer quantity here
        system("cls");
        coffeePic();
        displayQuote();
        int checkStatus;
        checkStatus=checkStockOrder(corder,ncup);
        int cusIdea;
        if(checkStatus==1){
            scanf("%d",&cusIdea);
            if(cusIdea==2){
                system("cls");
                printf("\n\n\n\n\n\n\n\n");
                printf("\t\t\t\t\t\t W E \n\n");
                printf("\t\t\t\t\t\t A R E \n\n");
                printf("\t\t\t\t\t\t R E A L L Y \n\n");
                printf("\t\t\t\t\t\t S O R R Y . . . !\n\n");
                printf("\n\n\n\n\n\t\t\t\t\t Press any key to return to menu!");
                getch();
                system("cls");
                break;
            }
            else{
                continue;}
        }
        else if(checkStatus==2){
            scanf("%d",&cusIdea);
            if(cusIdea==2){
                system("cls");
                printf("\n\n\n\n\n\n\n\n");
                printf("\t\t\t\t\t\t W E \n\n");
                printf("\t\t\t\t\t\t A R E \n\n");
                printf("\t\t\t\t\t\t R E A L L Y \n\n");
                printf("\t\t\t\t\t\t S O R R Y . . . !\n\n");
                printf("\n\n\n\n\n\t\t\t\t\t Press any key to return to menu!");
                getch();
                system("cls");
                break;
            }
            else{
                int cofId,stock;
                char coffeeName[30];
                float hotSprice,iceSprice,frappeSprice;
                FILE *coffee=fopen("coffee information.txt","r");
                while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
                    if(corder==cofId){break;}
                }
                fclose(coffee);
                ncup=stock;
            }
        }
        //confirm order from customer
        cusIdea=confirmOrderCus(corder,ncup,type);
        if(cusIdea==2){ continue;}
        //for for discount
        system("cls");
        coffeePic();
        displayQuote();
        printf("\n\n\t\t\t      Excuse me,Sir! Do you have our customer VIP card?");
        printf("\n\n\t\t\t  => If you have, You will get discount 15%% from us. ");
        printf("\n\n\t\t\t\t\t\t\t >> Input number here (1.Yes/2.No) : ");
        scanf("%d",&cusIdea);
        system("cls");
        float cost;
        int method;
        while(1){
            //displayInvoice
            cost=displayInvoice(corder,cusIdea,type,ncup);
            //ask user to confirm pay
            method=payment(cost);
            if(method==-10){
                system("cls");
                printf("\n\t\t       WARNING : YOUR INPUT  MONEY ISN'T ENOUGH, PLEASE DO THE PAYMENT AGAIN !!");
                continue;
            }
            else if(method==1 || method==2){
                system("cls");
                break;
            }
            else{
                system("cls");
                printf("\n\t\t\t\t    WARNING : YOUR INPUT NUMBER ISN'T MATCHED !!");
                continue;
            }
        }
        //storeDataInFile
        storeDataInFile(corder,cusIdea,type,ncup,method);
        //minus stock after customer order
        minusStock(corder,ncup);
        //to ask for order again
        printf("\n\n\n\n\n\n");
        printf("\n\n\t\t\t\t    T H A N K   F O R   Y O U R   O R D E R I N G   ! !");
        printf("\n\n\t\t\t\t   Y O U R   O R D E R   A R E   P R E P A R E   N O W .");
        printf("\n\n\t\t\t\t         P L E A S E   W A I T   A   M O M E N T .");
        printf("\n\n\n\n\n\n\t\t\t\t => Would you like to make an order again? ");
        printf("\n\n\t\t\t\t\t\t\t >> Input number here (1.Yes/2.No) : ");
        scanf("%d",&cusIdea);
        if(cusIdea==2){
            system("cls");
            coffeePic();
            printf("\n\n\t\t\t          L I F E   B E G I N   A F T E R   C O F F E E");
            break;
        }
    }
}
//function 2
//list stock coffee and coffee information
void viewStock(){
    int cofId,stock,len;
    char coffeeName[30];
    float hotSprice,iceSprice,frappeSprice;
    FILE *coffee=fopen("coffee information.txt","r");
    printf("\n               |************************* WELCOME TO COFFEE SHOP SYSTEM");
    printf(" *************************|\n");
    printf("\t       |---------------------------------------------------------------------------------|\n");Sleep(20);
    printf("\t       |************************___ LIST OF DRINK INFORMATION ___************************|\n");
    printf("\t       |---------------------------------------------------------------------------------|\n");Sleep(20);
    printf("\t       |    ID    |        NAME         |   STOCK   |    HOT    |    ICE    |   FRAPPE   |\n");
    printf("\t       |---------------------------------------------------------------------------------|\n");Sleep(20);
    while(fscanf(coffee,"%d %s %d %f %f %f",&cofId,&coffeeName,&stock,&hotSprice,&iceSprice,&frappeSprice)!=EOF){
        len=strlen(coffeeName);
        if(len<7){
            printf("\t       |    %d\t  |\t %s\t\t| %6d    |   %4.2f$   |   %4.2f$   |   %4.2f$    |\n",cofId,coffeeName,stock,hotSprice,iceSprice,frappeSprice);
        }
        else{
            printf("\t       |    %d\t  |\t %s\t| %6d    |   %4.2f$   |   %4.2f$   |   %4.2f$    |\n",cofId,coffeeName,stock,hotSprice,iceSprice,frappeSprice);
        }
        printf("\t       |---------------------------------------------------------------------------------|\n");Sleep(20);
    }
    fclose(coffee);
}
//add new coffee type for sell
void insertNewCoffeeData(){
    int id ,quantity;
    char coffeeName[20];
    float cHotPrice,cIcePrice,cFrapePrice;
    FILE *stock;
    stock=fopen("coffee information.txt","r");
    while(fscanf(stock,"%d %s %d %f %f %f",&id,&coffeeName,&quantity,&cHotPrice,&cIcePrice,&cFrapePrice)!=EOF){}
    fclose(stock);
    id=id+1;
    stock = fopen("coffee information.txt","a");
    while(1){
        printf("\n\t\t       ********** INPUT INFO OF NEW COFFEE **********");
        printf("\n\n\t\t\t                              AND ");
        printf("\n\n\t\t\t                  INPUT NUMBER 0 IN \"COFFEE NAME\" TO RETURN TO MENU \n");
        printf("\n\n\t\t\t     => Enter Coffee Name: ");          scanf("%s",&coffeeName);
        strupr(coffeeName);
        if(strcmp(coffeeName,"0")==0){break;}
        printf("\n\t\t\t     => Enter Coffee Hot Price : ");     scanf("%f",&cHotPrice);
        printf("\n\t\t\t     => Enter Coffee Ice Price : ");     scanf("%f",&cIcePrice);
        printf("\n\t\t\t     => Enter Coffee Frappe Price : ");   scanf("%f",&cFrapePrice);
        printf("\n\t\t\t     => Enter coffee Quantity : ");       scanf("%d",&quantity);
        fprintf(stock,"%d\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
        break;
    }
    if(strcmp(coffeeName,"0")!=0){
        printf("\n\n\n\t\t\t\t\t ***** DATA ADD SUCCESSFULLY *****");
    }
    fclose(stock);
}
//delete coffee information
void deleteCoffeeData(){
    FILE *stock;
    FILE* new_stock;
    int id ,quantity,status=0,no,new_id;
    char coffeeName[20];
    float cHotPrice,cIcePrice,cFrapePrice;
    stock = fopen("coffee information.txt","r");
    new_stock=fopen("New Data Of stock.txt","w");
    printf("\n\t\t\t      ***** ENTER AN ID THAT YOU WANT TO DELETE ***** ");
    printf("\n\n\t\t\t                               AND ");
    printf("\n\n\t\t\t                         INPUT NUMBER 0 TO RETURN TO MENU ");
    printf("\n\n\n\n\t\t\t\t        >> INPUT NUMBER HERE : ");
    scanf("%d",&new_id);
    while(fscanf(stock,"%d %s %d %f %f %f",&id,&coffeeName,&quantity,&cHotPrice,&cIcePrice,&cFrapePrice)!=EOF){
        if(id==new_id){
            status=1;
            Sleep(400);
            printf("\n\n\n\n\t\t\t\t        ***** DATA SUCCESSFULLY DELETE *****");
        }
        else{
            if(id<new_id || new_id==0){
                fprintf(new_stock,"%d\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
            }
            else{
                fprintf(new_stock,"%d\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id-1,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
            }
        }
    }
    if (status==0){
        if(new_id!=0){
            Sleep(1000);
            printf("\n\n\n\t\t\t\t          **** COFFEE ID NOT MATCHED ! ****");
        }
    }
    fclose(stock);
    fclose(new_stock);
    remove("coffee information.txt");
    rename("New Data Of stock.txt","coffee information.txt");
}
//edit information of coffee
void updateCoffeeData(int index){
    FILE *stock;
    FILE* new_stock;
    int quantity,newQuantity,status=0;
    char coffeeName[20],id[5];
    float cHotPrice,cIcePrice,cFrapePrice;
    stock = fopen("coffee information.txt","r");
    new_stock=fopen("New Data Of stock.txt","w");
    char newId[5];
    printf("\n\t\t     ****** ENTER AN ID OF COFFEE TO UPDATE THE INFO ******");
    printf("\n\n\t\t\t                               AND ");
    printf("\n\n\t\t\t                         INPUT NUMBER 0 ALL TO RETURN TO MENU ");
    printf("\n\n\n\n\t\t\t\t        >> INPUT NUMBER HERE : "); scanf("%s",&newId);
    while(fscanf(stock,"%s %s %d %f %f %f",&id,&coffeeName,&quantity,&cHotPrice,&cIcePrice,&cFrapePrice)!=EOF){
        if(index==1){
            if (strcmp(newId,id)==0){
                status=1;
                system("cls");
                printf("\n\t 4. Modify Coffee Info\n\n\n");
                printf("\n\t\t\t        ***** INPUT THE NEW INFO OF COFFEE *****\n\n\n");
                printf("\n\t\t\t  => Enter Coffee Name: ");          scanf("%s",&coffeeName);
                printf("\n\t\t\t  => Enter Coffee Hot Price: ");     scanf("%f",&cHotPrice);
                printf("\n\t\t\t  => Enter Coffee Ice Price: ");     scanf("%f",&cIcePrice);
                printf("\n\t\t\t  => Enter Coffee Frappe Price: ");   scanf("%f",&cFrapePrice);
                fprintf(new_stock,"%s\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
                printf("\n\n\n\t\t\t\t          ***** UPDATE INFO SUCCESS *****");
            }
            else {
                fprintf(new_stock,"%s\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
            }
        }
        else{
            if(strcmp(newId,id)==0){
                status=1;
                system("cls");
                printf("\n\t 2. Add Or Minus New Stock\n\n\n");
                printf("\n\n\t\t   ***** PLEASE INPUT THE NUMBER OF NEW IN_STOCKS OR OUT_STOCKS ***");
                printf("\n\n\t\t\t                        (NOTE: Add \"-\" symbol before number to Minus Stock)");
                printf("\n\n\t\t\t   => Enter number of packages (1 package = 10 cups) ");
                printf("\n\n\n\n\t\t\t\t        >> INPUT NUMBER HERE : ");
                scanf("%d",&newQuantity);
                printf("\n\n");
                quantity=quantity+(newQuantity*10);
                fprintf(new_stock,"%s\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
                Sleep(1000);
                printf("\n\n\n\t\t\t\t          ***** UPDATE INFO SUCCESS *****");
                FILE *stockdate=fopen("stock in out date.txt","a");
                fprintf(stockdate,"%s\t%s\t%d\t%s\t%s\n",id,coffeeName,newQuantity,__DATE__,__TIME__);
                fclose(stockdate);
            }
            else {
                fprintf(new_stock,"%s\t%s\t%d\t%.2f\t%.2f\t%.2f\n",id,coffeeName,quantity,cHotPrice,cIcePrice,cFrapePrice);
            }
        }
    }
    if (status==0){
        if(strcmp(newId,"0")!=0){
            Sleep(1500);
            printf("\n\n\n\t\t\t\t           ***** COFFEE ID NOT MATCHED ! *****");
        }
    }
    fclose(stock);
    fclose(new_stock);
    remove("coffee information.txt");
    rename("New Data Of stock.txt","coffee information.txt");
}
//list all stock in and out
void listStockInOutDate(){
    int id,quantity,d,y;
    char coffeeName[30],m[10],time[15];
    FILE *stockdate=fopen("stock in out date.txt","r");
    printf("\n\t\t       ID       COFFEE NAME     QUANTITY     DATE         TIME");
    printf("\n\t\t     _____________________________________________________________");
    while(fscanf(stockdate,"%d %s %d %s %d %d %s",&id,&coffeeName,&quantity,&m,&d,&y,&time)!=EOF){
        printf("\n\n\t\t     %3d   %15s      %4d      %s/%d/%d   %s",id,coffeeName,quantity,m,d,y,time);
    }
    fclose(stockdate);
}
//display number of customer all profit in cash and card from begin to now
void displayDataOfProfit(int index,char d[],char M[],char y[]){//index=1 in day index=2 in month
    FILE *cusOder=fopen("customer order.txt","r");
    int cusId,cofId,quantity,i=0,method;
    char coffeeName[50],TYPE[10],month[10],day[10],year[10],DATE[10],date[10];
    float sprice,total,discount,balanceDue,cash=0,card=0,sum;
    while(fscanf(cusOder,"%d %d %s %s %d %f %f %f %f %d %s %s %s",&cusId,&cofId,&coffeeName,&TYPE,&quantity,&sprice,&total,&discount,&balanceDue,&method,&month,&day,&year)!=EOF){
        strcpy(date,y);
        strcat(date,M);
        strcpy(DATE,year);
        strcat(DATE,month);
        if(index==1){
            strcat(date,d);
            strcat(DATE,day);
        }
        if(strcmp(date,DATE)==0){
            if(method==1){
                cash=cash+balanceDue;
            }
            else{
                card=card+balanceDue;
            }
            i++;
        }
    }
    fclose(cusOder);
    sum=cash+card;
    if(index==1){
        printf("\t\t\t ****** << Summarize Data Of Selling On %s %s %s >> ******",d,M,y);
    }
    else{
        printf("\t\t\t ****** << Summarize Data Of Selling On %s %s >> ******",M,y);
    }
    printf("\n\n\t\t\t      => Receives %d Orders From Customers.",i);
    printf("\n\n\t\t\t      => Incoming Profit : %.2f$",sum);
    printf("\n\n\t\t\t             +>> in cash : %.2f$",cash);
    printf("\n\n\t\t\t             +>> in card : %.2f$",card);
}
//display number of sell coffee by its Name and type
void displayDataOfSellCoffee(int index,char d[],char M[],char y[]){
    FILE *coffee=fopen("coffee information.txt","r");
    int ID,QTY,i=0;
    char COFFEENAME[20][30];
    float HOT,ICE,FRAPPE;
    while(fscanf(coffee,"%d %s %d %f %f %f",&ID,&COFFEENAME[i],&QTY,&HOT,&ICE,&FRAPPE)!=EOF){
        i++;
    }
    fclose(coffee);
    FILE *cusOder=fopen("customer order.txt","r");
    int cusId,cofId,quantity,countType[50][3]={0};
    int method,count[50]={0};
    char coffeeName[50],TYPE[10],month[10],day[10],year[10],DATE[10],date[10];
    float sprice,total,discount,balanceDue,cash=0,card=0,sum;
    while(fscanf(cusOder,"%d %d %s %s %d %f %f %f %f %d %s %s %s",&cusId,&cofId,&coffeeName,&TYPE,&quantity,&sprice,&total,&discount,&balanceDue,&method,&month,&day,&year)!=EOF){
        strcpy(date,y);
        strcat(date,M);
        strcpy(DATE,year);
        strcat(DATE,month);
        if(index==1){
            strcat(date,d);
            strcat(DATE,day);
        }
        if(strcmp(date,DATE)==0){
            for(int j=0;j<i;j++){
                if(strcmp(COFFEENAME[j],coffeeName)==0){
                    count[j]=count[j]+quantity;
                    if(strcmp(TYPE,"HOT")==0){
                        countType[j][0]=countType[j][0]+quantity;
                    }
                    if(strcmp(TYPE,"ICE")==0){
                        countType[j][1]=countType[j][1]+quantity;
                    }
                    if(strcmp(TYPE,"FRAPPE")==0){
                        countType[j][2]=countType[j][2]+quantity;
                    }
                }
            }
        }
    }
    printf("\n\n\t\t\t  |*****************************************************|");
    printf("\n\t\t\t  |   Coffee Name   | All Sell |  Hot  |  Ice  | Frappe |");
    printf("\n\t\t\t  |*****************************************************|");
    for(int j=0;j<i;j++){
        printf("\n\t\t\t  |%14s   |  %4d    |%4d   |%4d   | %4d   |",COFFEENAME[j],count[j],countType[j][0],countType[j][1],countType[j][2]);
    }
    printf("\n\t\t\t  |-----------------------------------------------------|");
    fclose(cusOder);
}
//function to overview stock
void stockAdministration(char function[]){
    system("cls");
    if(strcmp(function,"1")==0){
        system("cls");
        printf("\n\t 1. View Stock Info\n\n");
        viewStock();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"2")==0){
        system("cls");
        printf("\n\t 2. Add Or Minus New Stock\n\n\n");
        updateCoffeeData(2);
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"3")==0){
        system("cls");
        printf("\n\t 3. Add New Coffee Type\n\n\n");
        insertNewCoffeeData();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"4")==0){
        system("cls");
        printf("\n\t 4. Modify Coffee Info\n\n\n");
        updateCoffeeData(1);
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"5")==0){
        system("cls");
        printf("\n\t 5. Delete Coffee Info\n\n\n");
        deleteCoffeeData();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"6")==0){
        system("cls");
        printf("\n\t 6. Summarize Selling Data\n\n\n");
        char M[10],d[10]="0",y[10];
        int m,index;
        printf("\n\t\t\t  ***** PLEASE CHOOSE ONE OPTION *****");
        printf("\n\n\t\t\t       1. summarize data in day");
        printf("\n\n\t\t\t       2. summarize data in month\n");
        printf("\n\n\n\t\t\t\t         => input answer here : ");
        scanf("%d",&index);
        system("cls");
        printf("\n\t 6. Summarize Selling Data\n\n\n");
        printf("\n\t\t\t **** PLEASE INPUT THE DATE FOR SUM UP DATA\n");
        if(index==1){
            printf("\n\n\t\t\t     => Input number of day here : "); scanf("%s",&d);
        }
        printf("\n\n\t\t\t     => Input number of month here : "); scanf("%d",&m);
        printf("\n\n\t\t\t     => Input number of year here : "); scanf("%s",&y);
        switch(m){
            case 1 : strcpy(M,"Jan"); break;
            case 2 : strcpy(M,"Feb"); break;
            case 3 : strcpy(M,"Mar"); break;
            case 4 : strcpy(M,"Apr"); break;
            case 5 : strcpy(M,"May"); break;
            case 6 : strcpy(M,"Jun"); break;
            case 7 : strcpy(M,"Jul"); break;
            case 8 : strcpy(M,"Aug"); break;
            case 9 : strcpy(M,"Sep"); break;
            case 10 : strcpy(M,"Oct"); break;
            case 11 : strcpy(M,"Nov"); break;
            case 12 : strcpy(M,"Dec"); break;
        }
        system("cls");
        printf("\n\t 6. Summarize Selling Data\n\n\n");
        displayDataOfProfit(index,d,M,y);
        displayDataOfSellCoffee(index,d,M,y);
        printf("\n\n\t\t\t\t PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if (strcmp(function,"7")==0){
        system("cls");
        printf("\n\t 7. List Stock In&Out Date\n\n");
        listStockInOutDate();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if (strcmp(function,"8")==0){
        system("cls");
        printf("\n\t 8. Reset Password Login\n\n");
        resetPassword(2);
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else{
        system("cls");
        printf("\n\t\t\t\t   WARNING : The Input Number Not Matched !!!");
    }
}
//list all employee info
void listEmployeeInformation(){
    int no,age;
    float salary;
    char gender;
    char firstname[30],lastname[30],role[30],phone[15];
    printf("\n\t|**************************************************************************************************|\n");
    printf("\t|              /////////////////// TABLE OF EMPLOYEE INFORMATION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\               |\n");
    printf("\t|**************************************************************************************************|\n");
    printf("\t|  No  |  First Name  |   Last Name    | Gender |  Age  |   Position    |   Salary  |   Telephone  |\n");
    printf("\t|--------------------------------------------------------------------------------------------------|\n");
    FILE *employee=fopen("emp_record.txt","r");
    while(fscanf(employee,"%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){
        printf("\t|  %2d  |%10s    |%12s    |    %c   |  %2d   | %12s  |  %7.2f  |  %10s  |\n",no,firstname,lastname,gender,age,role,salary,phone);
        printf("\t|--------------------------------------------------------------------------------------------------|\n");
    }
    fclose(employee);
}
//Sort by role
void sortbyRole(){
    int no,age,ROLE;
    float salary;
    char gender;
    char firstname[30],lastname[30],role[30],phone[15],search[30];
    printf("\n\n\t\t\t ********** ROLE OF EMPLOYEE **********  ");
    printf("\n\n\t\t\t       1. MANAGER "); Sleep(70);
    printf("\n\n\t\t\t       2. COFFEE_MAKER "); Sleep(70);
    printf("\n\n\t\t\t       3. SERVICE "); Sleep(70);
    printf("\n\n\t\t\t       4. SECURITY_GUARD "); Sleep(70);
    printf("\n\n\t\t\t       5. CLEANER "); Sleep(70);
    printf("\n\n\n\t\t     => What Role Of Employee Information Do You Want To See? ");
    printf("\n\n\t\t\t\t\t\t    >> Input number here : ");
    scanf("%d",&ROLE);
    switch(ROLE){
        case 1 : strcpy(search,"MANAGER"); break;
        case 2 : strcpy(search,"COFFEE_MAKER"); break;
        case 3 : strcpy(search,"SERVICE"); break;
        case 4 : strcpy(search,"SECURITY"); break;
        case 5 : strcpy(search,"CLEANER"); break;
    }
    system("cls");
    printf("\n\t|**************************************************************************************************|\n");
    printf("\t|              /////////////////// TABLE OF EMPLOYEE INFORMATION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\               |\n");
    printf("\t|**************************************************************************************************|\n");
    printf("\t|  No  |  First Name  |   Last Name    | Gender |  Age  |   Position    |   Salary  |   Telephone  |\n");
    printf("\t|--------------------------------------------------------------------------------------------------|\n");
    FILE *employee=fopen("emp_record.txt","r");
    while(fscanf(employee,"%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){
        if(strcmp(role,search)==0){
            printf("\t|  %2d  |%10s    |%12s    |    %c   |  %2d   | %12s  |  %7.2f  |  %10s  |\n",no,firstname,lastname,gender,age,role,salary,phone);
            printf("\t|--------------------------------------------------------------------------------------------------|\n");
        }
    }
    fclose(employee);
}
//About employee that have highest and lowest salary
void highLowSalary(int index){ //index=1=lowest,index=2=highest
    int no,age;
    float salary,min=999999999,max=0;
    char gender;
    char firstname[30],lastname[30],role[30],phone[15];
    FILE *employee;
    employee=fopen("emp_record.txt","r");
    while(fscanf(employee,"%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){
            if(max<salary){max=salary;}
            if(min>salary){min=salary;}
    }
    if(index==1){
        printf("\n\n\t\t\t ********** THE INFO OF LOWEST SALARY EMPLOYEE **********  \n");
    }
    else{
        printf("\n\n\t\t\t ********** THE INFO OF HIGHEST SALARY EMPLOYEE ********** \n");
    }
    fclose(employee);
    employee=fopen("emp_record.txt","r");
    printf("\n\t|**************************************************************************************************|\n");
    printf("\t|              /////////////////// TABLE OF EMPLOYEE INFORMATION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\               |\n");
    printf("\t|**************************************************************************************************|\n");
    printf("\t|  No  |  First Name  |   Last Name    | Gender |  Age  |   Position    |   Salary  |   Telephone  |\n");
    printf("\t|--------------------------------------------------------------------------------------------------|\n");
    while(fscanf(employee,"%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){
        if(index==1 && min==salary){
            printf("\t|  %2d  |%10s    |%12s    |    %c   |  %2d   | %12s  |  %7.2f  |  %10s  |\n",no,firstname,lastname,gender,age,role,salary,phone);
            printf("\t|--------------------------------------------------------------------------------------------------|\n");
        }
        else if(index==2 && max==salary){
            printf("\t|  %2d  |%10s    |%12s    |    %c   |  %2d   | %12s  |  %7.2f  |  %10s  |\n",no,firstname,lastname,gender,age,role,salary,phone);
            printf("\t|--------------------------------------------------------------------------------------------------|\n");
        }
    }
}
//add new employee info
void addEmployeeInformation(){
    int no,age;
    float salary;
    char gender;
    char firstname[30],lastname[30],role[30],phone[15];
    //find last customer ID
    FILE *employee;
    employee=fopen("emp_record.txt","r");
    while(fscanf(employee, "%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){}
    fclose(employee);
    //add employee record in file
    employee = fopen("emp_record.txt", "a");
    no=no+1;
    while(1){
        printf("\t\t     ********** Input info of new employee **********");
        printf("\n\n\t\t\t                               AND ");
        printf("\n\n\t\t\t                   INPUT NUMBER 0 IN \"FIRST NAME\" TO RETURN TO MENU ");
        printf("\n\n\n\t\t\t >> Enter the first name : ");scanf(" %s", &firstname);
        if(strcmp(firstname,"0")==0){break;}
        printf("\n\t\t\t >> Enter the last name : ");scanf(" %s", &lastname);
        printf("\n\t\t\t >> Enter the gender (M/F) : ");scanf(" %c", &gender);
        printf("\n\t\t\t >> Enter the age : ");scanf(" %d", &age);
        printf("\n\t\t\t >> Enter the role : ");scanf(" %s", &role);
        printf("\n\t\t\t >> Enter the salary : ");scanf(" %f", &salary);
        printf("\n\t\t\t >> Enter the phone number : ");scanf("%s", &phone);
        strupr(firstname);
        strupr(lastname);
        strupr(role);
        Sleep(1000);
        fprintf(employee, "%d\t%s\t%s\t\t%c\t%d\t%s\t\t%.3f\t\t%s\t", no,firstname,lastname,toupper(gender),age,role,salary,phone);
        fprintf(employee, "\n");
        fclose(employee);
        printf("\n\n\t\t\t\t       ***** ADD EMPLOYEE INFO SUCCESS *****");
        break;
    }
}
//edit or change employee info (change for 1 line)
void updateEmployeeList(){
    int status=0;
    int no,age;
    float salary;
    char gender;
    char firstname[30],lastname[30],role[30],phone[15],search[30],firstLastName[50];
    FILE *employee=fopen("emp_record.txt","r");
    FILE *new_employee=fopen("new_emp_record.txt","w");
    char first[30], last[30],firstLast[50];
    printf("\n\t\t     ****** Please Input The Name Of Employee To Modify Info ****** ");
    printf("\n\n\t\t\t                               AND ");
    printf("\n\n\t\t\t                         INPUT NUMBER 0 ALL TO RETURN TO MENU ");
    printf("\n\n\n\t\t\t  =>  ENTER FIRST NAME : "); scanf("%s",&first);
    printf("\n\n\t\t\t  =>  ENTER LAST NAME : ");  scanf("%s",&last);
    strcpy(firstLast,first);
    strcat(firstLast," ");
    strcat(firstLast,last);
    strupr(firstLast);
    while(fscanf(employee,"%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){
        strcpy(firstLastName,firstname);
        strcat(firstLastName," ");
        strcat(firstLastName,lastname);
        if(strcmp(firstLast,firstLastName)==0){
            status=1;
            Sleep(900);
            printf("\n\n\n\t\t\t\t          <<<<<<<< NAME MATCHED >>>>>>>>");
            printf("\n\n\t\t\t\t    PRESS ANY KEY TO INPUT NEW INFORMATION ... ");
            getch();
            system("cls");
            printf("\n\t 5. Modify Employee's Records\n\n\n");
            printf("\n\t\t     ****** Please Input The New Info ****** \n");
            printf("\n\t\t\t >> Enter the first name : ");scanf(" %s", &firstname);
            printf("\n\t\t\t >> Enter the last name : ");scanf(" %s", &lastname);
            printf("\n\t\t\t >> Enter the gender (M/F) : ");scanf(" %c", &gender);
            printf("\n\t\t\t >> Enter the age : ");scanf(" %d", &age);
            printf("\n\t\t\t >> Enter the role : ");scanf(" %s", &role);
            printf("\n\t\t\t >> Enter the salary : ");scanf(" %f", &salary);
            printf("\n\t\t\t >> Enter the phone number : ");scanf("%s", &phone);
            strupr(firstname);
            strupr(lastname);
            strupr(role);
            fprintf(new_employee,"%d\t%s\t%s\t\t%c\t%d\t\t%s\t\t%.3f\t\t%s\t",no,firstname,lastname,toupper(gender),age,role,salary,phone);
            fprintf(new_employee,"\n");
            Sleep(900);
            printf("\n\n\n\t\t\t\t          ***** UPDATE INFO SUCCESS *****");
        }
        else{
            fprintf(new_employee,"%d\t%s\t%s\t\t%c\t%d\t\t%s\t\t%.3f\t\t%s\t", no,firstname,lastname,gender,age,role,salary,phone);
            fprintf(new_employee,"\n");
        }
    }
    if (status==0){
        Sleep(1500);
        printf("\n\n\n\t\t\t\t               ***** NOT FOUND! *****");
    }
    fclose(employee);
    fclose(new_employee);
    remove("emp_record.txt");
    rename("new_emp_record.txt","emp_record.txt");
}
//delete employee info
void deleteEmployee(){
    int no,age;
    float salary;
    char gender;
    char firstname[30],lastname[30],role[30],phone[15];
    FILE *employee=fopen("emp_record.txt","r");
    FILE *new_employee=fopen("new_emp_record.txt", "w");
    int new_no;
    printf("\n\n\t\t\t     ENTER EMPLOYEE ID TO DELETE EMPLOYEE INFO");
    printf("\n\n\t\t\t                               AND ");
    printf("\n\n\t\t\t                         INPUT NUMBER 0 TO RETURN TO MENU ");
    printf("\n\n\n\n\t\t\t\t\t   >> Input number here : ");
    scanf("%d",&new_no);
    while (fscanf(employee, "%d %s %s %c %d %s %f %s",&no,&firstname,&lastname,&gender,&age,&role,&salary,&phone)!=EOF){
        if(no == new_no){
            Sleep(1000);
            printf("\n\n\n\n\t\t\t\t ******* EMPLOYEE INFO SUCCESSFULLY DELETE *******");
        }
        else{
            if(no<new_no){
                fprintf(new_employee,"%d\t%s\t%s\t\t%c\t%d\t\t%s\t\t%.3f\t\t%s\t",no,firstname,lastname,gender,age,role,salary,phone);
                fprintf(new_employee,"\n");
            }
            else{
                fprintf(new_employee,"%d\t%s\t%s\t\t%c\t%d\t\t%s\t\t%.3f\t\t%s\t", no-1,firstname,lastname,gender,age,role,salary,phone);
                fprintf(new_employee,"\n");
            }
        }
    }
    fclose(employee);
    fclose(new_employee);
    remove("emp_record.txt");
    rename("new_emp_record.txt","emp_record.txt");
}
//reset employee system function
void resetPassword(int index){//index=1 change passEm, index=2 change passSa
    char passEm[15],passSa[15],oldpass[15],pass[15],veriPass[15];
    FILE *password=fopen("Password Project.bin","rb");
    FILE *newPassword=fopen("new Password Project.bin","wb");
    fscanf(password,"%s %s",&passEm,&passSa);
    while(1){
        printf("\n\n\t\t***** PLEASE ENTER THE OLD PASSWORD TO ACCESS CHANGE PASSWORD *****");
        printf("\n\n\t\t                                  AND");
        printf("\n\n\t\t                          INPUT NUMBER 0 TO RETURN TO MENU ");
        printf("\n\n\n\t\t\t\t => Enter The Old Password : "); scanf("%s",&oldpass);
        if(strcmp(oldpass,"0")==0){break;}
        if(index==1 && strcmp(oldpass,passEm)!=0){
            system("cls");
            printf("\n\t\t\t\t   WARNING : WRONG PASSWORD !");
            printf("\n\t 7. reset password login\n\n");
            continue;}
        if(index==2 && strcmp(oldpass,passSa)!=0){
            system("cls");
            printf("\n\t\t\t\t   WARNING : WRONG PASSWORD !");
            printf("\n\t 7. reset password login\n\n");
            continue;}
        printf("\n\n\t\t\t\t => Enter New Password : "); scanf("%s",&pass);
        if(strcmp(pass,"0")==0){break;}
        printf("\n\n\t\t\t\t => Enter Password Again to verify : "); scanf("%s",&veriPass);
        if(strcmp(pass,veriPass)==0){
            if(index==1){
                fprintf(newPassword,"%s\t%s",pass,passSa);
                fclose(password);
                fclose(newPassword);
                remove("Password Project.bin");
                rename("new Password Project.bin","Password Project.bin");
                break;
            }
            else{
                fprintf(newPassword,"%s\t%s",passEm,pass);
                fclose(password);
                fclose(newPassword);
                remove("Password Project.bin");
                rename("new Password Project.bin","Password Project.bin");
                break;
            }
            printf("\n\n\n\t\t\t\t               ***** PASSWORD RESET SUCCESSFULLY *****");
        }
        else{
            system("cls");
            printf("\n\t\t\t    WARNING : NEW PASSWORD AND VERIFY PASSWORD NOT MATCHED !!");
            printf("\n\t 7. reset password login\n\n");
            continue;
        }
    }
    fclose(password);
    fclose(newPassword);
}
//function run system for employee administation
void employeeAdministration(char function[]){
    if(strcmp(function,"1")==0){
        system("cls");
        printf("\n\t 1. List Info Of All Employee\n\n\n");
        listEmployeeInformation();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"2")==0){
        system("cls");
        printf("\n\t 2. List Info Of Employee By Role\n\n");
        sortbyRole();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"3")==0){
        system("cls");
        printf("\n\t 3. Show Lowest And Highest Employee Salary\n\n");
        highLowSalary(1);
        highLowSalary(2);
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"4")==0){
        system("cls");
        printf("\n\t 4. Add New Employee's Records\n\n\n");
        addEmployeeInformation();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"5")==0){
        system("cls");
        printf("\n\t 5. Modify Employee's Records\n\n\n");
        updateEmployeeList();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if(strcmp(function,"6")==0){
        system("cls");
        printf("\n\t 6. Delete Employee's Records\n\n");
        deleteEmployee();
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else if (strcmp(function,"7")==0){
        system("cls");
        printf("\n\t 7. Reset Password Login\n\n");
        resetPassword(1);
        printf("\n\n\t\t\t\t    PRESS ANY KEY TO RETURN TO EMPLOYEE MENU ... ");
        getch();
        system("cls");
    }
    else{
        system("cls");
        printf("\n\t\t\t\t   WARNING : The Input Number Not Matched !!!");
    }
}
