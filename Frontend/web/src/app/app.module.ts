// ===================================================================>> Core Library
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

// ===================================================================>> Third Library
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatDialogModule } from '@angular/material';

import 'hammerjs';

// ===================================================================>> Custom Library
import { ErrorDialogComponent } from './shared/error-dialog/errordialog.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm.component';
import { FunctionServices } from './shared/function/function.service';
import { UserService } from './shared/services/index';
import { ErrorDialogService } from './shared/error-dialog/errordialog.service';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './main/auth/auth.module';
import { HttpConfigInterceptor } from './core/httpconfig.interceptor';
import { StateStream, Store, NgxsModule } from '@ngxs/store';
import { environment } from 'environments/environment';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { fuseConfig } from 'app/fuse-config';
import { GuardService } from '@fuse/guard/guard.service';


// ===> Import Helper 
import { FunctionService } from './helper/function.service';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        RouterModule,

        // Material
        MatMomentDateModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        HttpClientModule,
        MatDialogModule,
        
        RouterModule,

        // App modules
        LayoutModule,
        AppRoutingModule,
        AuthModule,

        NgxsModule.forRoot([], { developmentMode: !environment.production })
    ],
    declarations: [
        AppComponent,
        ErrorDialogComponent,
       
        ConfirmDialogComponent,

    ],
    providers: [
        ErrorDialogService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
        Store, 
        StateStream,
        FunctionService, 
        FunctionServices,
        UserService,
        GuardService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        ErrorDialogComponent,
        ConfirmDialogComponent,
    ],
})
export class AppModule {


 }
