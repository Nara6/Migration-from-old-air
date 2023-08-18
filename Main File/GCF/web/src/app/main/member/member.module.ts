import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    //===============================================================================================>>Login
     {
        path: '',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
    },

    //================================================================================================>>Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/module').then(m=>m.ProjectDashboardModule),
    },

    //================================================================================================>>Dashboard
    {
        path: 'network',
        loadChildren: () => import('./network/module').then(m=>m.NetworkModule)
    },
    //================================================================================================>>Finance
    {
        path: 'finance',
        loadChildren: () => import('./finance/module').then(m=>m.FinanceModule),
    },
      
   

];

@NgModule({
    declarations: [
        
    ],
    imports     : [
        RouterModule.forChild(routes),
    ],

    schemas: [
    ],

    providers   : [
     
    ], 
    entryComponents: [
    ]
})
export class MemberModule
{

}

