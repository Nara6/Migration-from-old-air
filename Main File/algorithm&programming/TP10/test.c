
#include <stdio.h>
#include<string.h>
  
void add(void);
void delet(void);
void update(void);
void view_all(void);
void average(void);
void max(void);
void min(void);
void find(void);
void sort(void);

struct student
{
int id;
char name[20];
char sex[10];
int q1,q2,mid_sem,final,total;
}s[20];

int i=-1;

int main()
{
int choice = -1;
while(choice != 10)
{
printf("1. Add student records\n");
printf("2. Delete student records\n");
printf("3. Update student records\n");
printf("4. View all student records\n");
printf("5. Calculate an average of a selected student score\n");
printf("6. Show student who gets the max total score\n");
printf("7. Show student who gets the min total score\n");
printf("8. Find student by ID\n");
printf("9. Sort records by total scores\n");
printf("10.Exit\n");
printf("\nEnter your choice:");
scanf("%d",&choice);
  
switch(choice)
{
case 1:
add();
break;
case 2:
delet();
break;
case 3:
update();
break;
case 4:
view_all();
break;
case 5:
average();
break;
case 6:
max();
break;
case 7:
min();
break;
case 8:
find();
break;
case 9:
sort();
break;
}
}
return 0;
}

void add(void)
{
if(i == 20)
printf("Class is full!\n\n");
else
{
i++;
printf("\nEnter id:");
scanf("%d",&s[i].id);
printf("\nEnter name:");
scanf("%s",s[i].name);
printf("\nEnter sex[M/F]:");
scanf("%s",s[i].sex);
printf("\nEnter quiz 1 and quiz 2:");
scanf("%d %d",&s[i].q1,&s[i].q2);
printf("\nEnter Mid Sem marks:");
scanf("%d",&s[i].mid_sem);
printf("\nEnter Final's marks:");
scanf("%d",&s[i].final);
s[i].total = s[i].q1 + s[i].q2 + s[i].mid_sem + s[i].final;
}
}

void delet(void)
{
int find,j,order=-1;
printf("\nEnter id:");
scanf("%d",&find);
for(j=0 ; j<=i ; j++)
if(find == s[j].id)
order = j;
if(order == -1)
printf("\nId not found");
else
{
for(j=order ; j<i ; j++)
{
s[j].id = s[j+1].id;
strcpy(s[j].name,s[j+1].name);
strcpy(s[j].sex,s[j+1].sex);
s[j].q1 = s[j+1].q1;
s[j].q2 = s[j+1].q2;
s[j].mid_sem = s[j+1].mid_sem;
s[j].final = s[j+1].final;
s[j].total = s[j+1].total;
}
i--;
printf("\nRecord Deleted\n\n");
}
}

void update(void)
{
int find,j,order=-1;
printf("\nEnter id:");
scanf("%d",&find);
for(j=0 ; j<=i ; j++)
if(find == s[j].id)
order = j;
if(order == -1)
printf("\nId not found");
else
{
printf("\nEnter id:");
scanf("%d",&s[order].id);
printf("\nEnter name:");
scanf("%s",s[order].name);
printf("\nEnter sex[M/F]:");
scanf("%s",s[order].sex);
printf("\nEnter quiz 1 and quiz 2:");
scanf("%d %d",&s[order].q1,&s[order].q2);
printf("\nEnter Mid Sem marks:");
scanf("%d",&s[order].mid_sem);
printf("\nEnter Final's marks:");
scanf("%d",&s[order].final);
s[order].total = s[order].q1 + s[order].q2 + s[order].mid_sem + s[order].final;
printf("\nRecord updated!\n\n");
}
}

void view_all(void)
{
int order;
for(order=0 ; order<=i ; order++)
{
printf("\nId:%d",s[order].id);
printf("\nName:%s",s[order].name);
printf("\nSex[M/F]:%s",s[order].sex);
printf("\nQuiz 1 and quiz 2:%d %d",s[order].q1,s[order].q2);
printf("\nMid Sem marks:%d",s[order].mid_sem);
printf("\nFinal's marks:%d",s[order].final);
printf("\nTotal marks:%d",s[order].total);
printf("\n");
}
}

void average(void)
{
int find,j,order=-1;
printf("\nEnter id:");
scanf("%d",&find);
for(j=0 ; j<=i ; j++)
if(find == s[j].id)
order = j;
if(order == -1)
printf("\nId not found");
else
{
printf("\nAverage marks:%d\n",s[order].total/4);
}
}

void min(void)
{
int j,mini = s[0].total;
for(j=1 ; j<=i ; j++)
if(mini > s[j].total)
mini = s[j].total;
printf("\nMinimum total:%d\n",mini);
}

void max(void)
{
int j,maxi = s[0].total;
for(j=1 ; j<=i ; j++)
if(maxi < s[j].total)
maxi = s[j].total;
printf("\nMaximum total:%d\n",maxi);
}

void find(void)
{
int find,j,order=-1;
printf("\nEnter id:");
scanf("%d",&find);
for(j=0 ; j<=i ; j++)
if(find == s[j].id)
order = j;
if(order == -1)
printf("\nId not found\n");
else
{
printf("\nId:%d",s[order].id);
printf("\nName:%s",s[order].name);
printf("\nSex[M/F]:%s",s[order].sex);
printf("\nQuiz 1 and quiz 2:%d %d",s[order].q1,s[order].q2);
printf("\nMid Sem marks:%d",s[order].mid_sem);
printf("\nFinal's marks:%d",s[order].final);
printf("\nTotal marks:%d",s[order].total);
printf("\n");
}
}
  
void sort(void)
{
int j,k,min,order;
int t_id;
char t_name[20];
char t_sex[10];
int t_q1,t_q2,t_mid_sem,t_final,t_total;
for (j=0;j<i;j++)
{
min = s[j].total;
order = j;
for (j=j+1;k<=i;k++)
{
if(min > s[k].total)
{
order = k;
min = s[k].total;
}
}
if(order != j)
{
t_id = s[j].id;
strcpy(t_name,s[j].name);
strcpy(t_sex,s[j].sex);
t_q1 = s[j].q1;
t_q2 = s[j].q2;
t_mid_sem = s[j].mid_sem;
t_final = s[j].final;
t_total = s[j].total;
  
s[j].id = s[order].id;
strcpy(s[j].name,s[order].name);
strcpy(s[j].sex,s[order].sex);
s[j].q1 = s[order].q1;
s[j].q2 = s[order].q2;
s[j].mid_sem = s[order].mid_sem;
s[j].final = s[order].final;
s[j].total = s[order].total;
  
s[order].id = t_id;
strcpy(s[order].name,t_name);
strcpy(s[order].sex,t_sex);
s[order].q1 = t_q1;
s[order].q2 = t_q2;
s[order].mid_sem = t_mid_sem;
s[order].final = t_final;
s[order].total = t_total;
}
}
printf("\nSorted:\n");
view_all();
}