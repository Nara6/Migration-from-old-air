#include<iostream>
using namespace std;

void header(char header[50]){
    // cout<<"\t\t\t\t\t==========================================================\n";
    // cout<<"\t\t\t\t\t||\t\t\t"<<header<<"\t\t\t\t||\n";
    // cout<<"\t\t\t\t\t==========================================================\n";
    printf("\n\n\t\t\t\t==========================================================");
    if(strlen(header)>=16){
        cout<<"\n\t\t\t\t||\t\t      "<<header<<"      \t\t||";
    }
    else{
        cout<<"\n\t\t\t\t||\t\t      "<<header<<"      \t\t\t||";
    }
    printf("\n\t\t\t\t==========================================================\n");
}
int arrowKeyChoice(char choice[10][50], char header[50], int n){
    cout<<"\n\t\t\t  >>\t\t"<<choice[0];
    for(int i=1; i<n; i++){
        cout<<"\n\t\t\t"<<choice[i];
    }
    cout<<"NOTE: PRESS \"UP KEY\" AND \"DOWN KEY\" TO SCROLL\n";
    cout<<"      PRESS \"Enter KEY\" TO CHOOSE THE OPTION";
    while(1){

        ch1 = getch();
        ch2 = 0;
        if( ch1 == 13){
            return n;
            break;
        }
        else if (ch1 == 0xE0) {    // a scroll key was pressed
            ch2 = getch();          // determine what it was
            system("cls");

            switch(ch2){
            case 80:     //DOWN
                if( n==m ){
                    SetColor(1);
                    printf("\n\n\t\t\t\t==========================================================");
                    if(strlen(head)>16){
                        printf("\n\t\t\t\t||\t      %s      \t\t||",head);
                    }
                    else{
                        printf("\n\t\t\t\t||\t\t      %s      \t\t\t||",head);
                    }
                    printf("\n\t\t\t\t==========================================================\n");SetColor(9);

                    for( j=0;j<m-1;j++ ){
                        printf("\n\t\t\t\t\t\t%s",option[j]);
                    }
                    SetColor(4);
                    printf("\n\t\t\t\t   >>\t\t%s",option[m-1]);SetColor(9);//SetColor(0);
                    break;
                }
                else{
                    n+=1;
                    SetColor(1);
                    printf("\n\n\t\t\t\t==========================================================");
                    if(strlen(head)>16){
                        printf("\n\t\t\t\t||\t      %s      \t\t||",head);
                    }
                    else{
                        printf("\n\t\t\t\t||\t\t      %s      \t\t\t||",head);
                    }
                    printf("\n\t\t\t\t==========================================================\n");SetColor(9);

                    for(j=0;j<m;j++){
                        if( j!= n-1 ){
                            printf("\n\t\t\t\t\t\t%s",option[j]);
                        }
                        else{
                            SetColor(4);
                            printf("\n\t\t\t\t   >>\t\t%s",option[j]);SetColor(9);//SetColor(0);
                        }
                    }
                    break;
                }
            case 72:    //UP
                if(n==1){
                    SetColor(1);
                    printf("\n\n\t\t\t\t==========================================================");
                    if(strlen(head)>16){
                        printf("\n\t\t\t\t||\t      %s      \t\t||",head);
                    }
                    else{
                        printf("\n\t\t\t\t||\t\t      %s      \t\t\t||",head);
                    }
                    SetColor(1);
                    printf("\n\t\t\t\t==========================================================\n");SetColor(9);

                    SetColor(4);
                    printf("\n\t\t\t\t   >>\t\t%s",option[0]);SetColor(9);
                    for( j=1;j<m;j++ ){
                        printf("\n\t\t\t\t\t\t%s",option[j]);
                    }
                    break;
                }
                else{
                    n-=1;
                    SetColor(1);
                    printf("\n\n\t\t\t\t==========================================================");
                    if(strlen(head)>16){
                        printf("\n\t\t\t\t||\t      %s      \t\t||",head);
                    }
                    else{
                        printf("\n\t\t\t\t||\t\t      %s      \t\t\t||",head);
                    }
                    SetColor(1);
                    printf("\n\t\t\t\t==========================================================\n");SetColor(9);

                    for(j=0;j<m;j++){
                        if( j!= n-1 ){
                            printf("\n\t\t\t\t\t\t%s",option[j]);
                        }
                        else{
                            SetColor(4);
                            printf("\n\t\t\t\t   >>\t\t%s",option[j]);SetColor(9);
                        }
                    }
                    break;
                }
            }
        }
    }
}
int main(){
    char test[] = "Convert NFA to DFA";
    header(test);
    char mainmenu[3][50]={"[1]   Load FA From Database","[2]   Create FA","[3]   Exit"};
    char head1[50]="  MAIN MENU";
    int m1=sizeof(mainmenu)/sizeof(mainmenu[0]);
    int num=arrowKeyChoice(mainmenu,head1,m1);
}