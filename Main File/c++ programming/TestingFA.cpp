#include<stdio.h>
int main()
{
    int n_states;
    int n_symbols;
    int n_f_states;
    int n_i_string;
    char initialState;

    int i;
    int j;

    char temp1;
    char temp2;

    int t1;
    int t2;

    int flag=0;
    int error_flag=0;
	int count;

    printf("no of states");
    scanf("%d",&n_states);
    printf("no of symbols");
    scanf("%d",&n_symbols);
    printf("no of final states");
    scanf("%d",&n_f_states);
    printf("length of input string");
    scanf("%d",&n_i_string);

    char states[n_states];
    char alphabet[n_symbols];
    char del[n_states][n_symbols];
    char finalStates[n_f_states];
    char inputString[n_i_string];


    printf("States:");
    scanf("%s",states);
    printf("Input Symbol:");
    scanf("%s",alphabet);
    printf("Transition function del");
    for(i=0 ;i<n_states ;i++)
    {
        for(j=0;j<n_symbols;j++)
        {
            scanf(" %c",&del[i][j]);
        }
    }
    printf("Initial state:");
	scanf(" %c",&initialState);
	printf("Final state:");
    scanf("%s",finalStates);
    printf("Input string:");
    scanf("%s",inputString);
	
    i=0;
	temp2=initialState;
	while(i<n_i_string && error_flag==0)
    {
        temp1=inputString[i];
		count=0;
        for(j=0;j<n_symbols;j++)
        {
            if(temp1==alphabet[j])
            {
				t1=j;
				break;
                
            }
			else
			{
				count++;
			}
        }
		if(count==n_symbols)
		{  
			error_flag=1;
		}
		count=0;
		for(j=0;j<n_states;j++)
		{
			if(temp2==states[j])
			{
				t2=j;
				break;
			}
			else
			{
				count++;
			}
		}
		if(count==n_states)
		{
			error_flag=1;
		}
		else
		{
			temp2=del[t2][t1];
			i++;
		}		
    } 
	if(error_flag==1)
	{
		printf("ERROR|program terminated\n");
	}
	else
	{
		j=0;
		while(j<n_f_states && flag==0)
		{
			if(temp2==finalStates[j])
			{
				flag=1;
				break;
			}
			j++;
		}
		if(flag==1)
		{
			printf("accepted\n");
		}
		else
		{
			printf("Not accepted\n");
		}
	}
    return(0);
}