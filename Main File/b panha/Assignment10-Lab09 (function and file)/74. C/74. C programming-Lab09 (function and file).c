#include<stdio.h>
void generateDummyData();
main(){
    generateDummyData();
}
void generateDummyData(){
    int min=1,max=51;
    FILE *f[1000];
    for (int i=0;i<1000;i++){
        char filename[20];
        sprintf(filename, "data%d.txt",i+1);
        f[i]=fopen(filename,"w");
        for(int j=min;j<max;j++){
            fprintf(f[i],"%d ",j);
        }
        min=max;
        max=max+50;
    }
}
