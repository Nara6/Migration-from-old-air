import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule} from '@angular/material/stepper';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NouisliderModule } from 'ng2-nouislider';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { SharedModule } from 'app/shared/shared.module';


import { ListingComponent } from '../../member/listing/component';
import { CreatePackageComponent } from './create/component';
import { EditProductComponent } from './edit/component';
import { ViewPackageDialogComponent } from './listing/view-product/component';



const routes: Routes = [
    

];



@NgModule({
    declarations: [
        ListingComponent, 
        // add product
        CreatePackageComponent,
        EditProductComponent,
        ViewPackageDialogComponent
    
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule, 
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatDividerModule, 
        MatTabsModule,
        MatListModule,
        MatProgressBarModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatStepperModule,
        MatRadioModule,
        SharedModule,
        MatDatepickerModule,
        MatTooltipModule, 
        MatCheckboxModule,
        NouisliderModule,
        
        FuseSharedModule,
        FuseWidgetModule
    ],

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    providers   : [
       
    ], 
    entryComponents: [
        ViewPackageDialogComponent
    ]
})
export class CoursefModule
{
    
}

