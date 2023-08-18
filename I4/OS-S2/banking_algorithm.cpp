#include <iostream>
using namespace std;

int main() { 
    int i, j, k; 
    int n; //number of processes 
    int m; //number of resources 
    cout<<"Enter a number of Process: ";
    scanf("%d", &n);
    cout<<"Enter a number of Resource: ";
    scanf("%d", &m);
    int hold[m];
    int allocation[n][m];
    int max[n][m];
    cout<<"*Input Allcation!\n";
    for(int i=0; i<n; i++){

        for(int j=0; j<m; j++){
            cout<<"***Process "<<i+1;
            cout<<"\tResource "<<j+1<<":";
            cin>>allocation[i][j];
        }
    }
    cout<<"*Input Max!\n";
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
            cout<<"***Process "<<i+1;
            cout<<"\tResource "<<j+1<<":";
            cin>>max[i][j];
        }
    }
    int available[m];
    cout<<"*Input Available!\n";
        for(int j=0; j<m; j++){
            cout<<"\tResource "<<j+1<<":";
            cin>>available[j];
        }

    int finish[n];
    int ans[n];
    int idx =  0; 
    
    int need[n][m];  //Calculating Need matrix
    for(int i=0;i<n;i++)
    { 
        for(int j=0;j<m; j++)
        {
            need[i][j] = max[i][j] - allocation[i][j];
        } 
    } 
    
    int y = 0; 
    for (int k=0;k<5;k++) 
    { 
        for(int i=0;i<n;i++)
        { 
            if(finish[i]==0)
            { 
                int flag = 0; 
                for(int j=0;j<m;j++)
                { 
                    if(need[i][j]>available[j])
                    { 
                        flag = 1; //if needed resources are more in number than the available ones, move to the next process
                        break; 
                    }
                } 
                
                if(flag==0)
                {  //if available resources fulfilled the need
                    ans[idx++] = i; //the index of process, that has been allocated the resources
                    for(int y=0;y<m;y++)
                    { 
                        available[y] += allocation[i][y]; 
                    }
                    finish[i] = 1; 
                } 
            } 
        } 
    } 
    
    bool flag = true;
    for(int i=0; i<n; i++)
    {
        if(finish[i] == 0)
        { 
            flag = false; 
            cout<<"System is in deadlock !!"; break; 
        }
    }
    
    if(flag==true)
    {
        cout<<"System is in safe state and following is the safe sequence: ";
        for(int i=0;i<n-1;i++)
        {
            cout<<"P"<<ans[i]<<" -> "; 
        }
        cout<<"P"<<ans[n-1]<<endl;
    }  
    return 0; 
} 
