import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckLoginComponent } from './check-login/check-login.component'; 
import { Login2Component } from './login-2/login-2.component';

const authRoutes: Routes = [
    { path: '', component: CheckLoginComponent },
    { path: 'login', component: Login2Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/