import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { PrintModule } from 'app/resource/printing/module'; 

import { DashboardComponent } from './component';
import { OrderSelectorComponent } from './order-selector/order.component';
import { InfoSelectorComponent } from './info-selector/component';

const routes: Routes = [
    {
        path     : '',
        component: DashboardComponent,
        
    },
    { 
        path: 'major/:id', 
    },
    
    
];

@NgModule({
    declarations: [
        DashboardComponent,
        OrderSelectorComponent,
        InfoSelectorComponent
       
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MatIconModule,
        MatProgressBarModule,
        MatListModule,
        MatCardModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseWidgetModule, 

        PrintModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    providers   : [
    ]
})
export class ProjectDashboardModule
{
}

