import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule),
    },

    // ==========================================================================================>> Dashboard
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/module').then(m=>m.ProjectDashboardModule),
    },

    // ==========================================================================================>> POS
    {
        path: 'pos',
        loadChildren: () => import('./pos/module').then(m=>m.Module),
    },
    
    // ==========================================================================================>> Product
    {
        path: 'products',
        loadChildren: () => import('./product/all/module').then(m=>m.Module),
    },

    {
        path: 'product-types',
        loadChildren: () => import('./product/type/module').then(m=>m.Module),
    },


    // ==========================================================================================>> Sale
    {
        path: 'sales',
        loadChildren: () => import('./sale/module').then(m=>m.SaleModule),
    },


    //===================================================================================================>> user 
    {
        path: "user",
        loadChildren: () =>
        import('./user/module').then((m) => m.UserModule),
    },
    //===================================================================================================>> My Profile
    {
        path: "my-profile",
        loadChildren: () => import("../my-profile/my-profile.module").then((m) => m.MyProfileModule),
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
export class PortalModule
{

}

