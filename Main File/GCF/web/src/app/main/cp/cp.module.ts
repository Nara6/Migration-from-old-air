import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    //====================================================================================================>> Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/module').then(m=>m.Module),
    },
    //====================================================================================================>> Product
    {
        path: 'products',
        loadChildren: ()=> import ('./product/module').then(m => m.ProductModule),
    },
    //====================================================================================================>> Member
    {
        path: 'members',
        loadChildren: ()=> import ('./member/module').then(m => m.MemberModule),
    },
     //====================================================================================================>> Sale
     {
        path: 'sales',
        loadChildren: ()=> import ('./sale/module').then(m => m.Module),
    },
    //====================================================================================================>> Finance
    {
        path: 'finance',
        loadChildren: ()=> import ('./finance/module').then(m => m.FinanceModule),
    },
    //====================================================================================================>> User
    {
        path: 'users',
        loadChildren: ()=> import ('./user/module').then(m => m.UserModule),
    },
    //====================================================================================================>> User
    {
        path: 'banks',
        loadChildren: ()=> import ('./bank/module').then(m => m.BankModule),
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
export class CPModule
{

}

