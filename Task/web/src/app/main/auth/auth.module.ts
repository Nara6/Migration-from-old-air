//=========================================================>> Core Module
import { NgModule } from '@angular/core';

//=========================================================>> Third Party Module
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


//=========================================================>> Custom Module
import { FuseSharedModule } from '@fuse/shared.module';

//=========================================================>> Component
import { CheckLoginComponent } from './check-login/check-login.component'; 
import { Login2Component } from './login-2/login-2.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        CheckLoginComponent, 
        Login2Component
    ],
    bootstrap:[CheckLoginComponent],
    imports: [
        MatProgressSpinnerModule, 
        MatProgressBarModule, 
        MatSnackBarModule, 
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseSharedModule,
        AuthRoutingModule,
    ]
})
export class AuthModule {
}
