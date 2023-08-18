#include<stdio.h>
void encrypt();
void decrypt();
main(){

    encrypt();
    decrypt();
}
void encrypt(){
    char string[30];
    printf("Enter a string for encrypt: ");
    scanf("%s",&string);
    FILE *f=fopen("encryptData.bin","wb");
    fwrite(string,1,sizeof(string),f);
    fclose(f);
}
void decrypt(){
    FILE *f=fopen("encryptData.bin","rb");
    char buffer[100];
    fseek(f,0,SEEK_SET);
    fread(buffer,100,1,f);
    printf("The decrypt data is %s",buffer);
    fclose(f);
}
