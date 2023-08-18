
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material'; 

import { SharedModule } from 'app/shared/shared.module';
import { FuseSharedModule } from '@fuse/shared.module';

// ====================================================================== Custom Module
import { ApplicationFormComponent } from './application-form/component';
import { GeneralInformation } from './application-form/general-info/component';
import { SelectMajor } from './application-form/choose-major/component';



@NgModule({
    declarations: [
        ApplicationFormComponent,
        GeneralInformation,
        SelectMajor,
      
    ],
    exports:[
        
        ApplicationFormComponent,
       // PrintModule,
        
    ],
    imports : [
       
        SharedModule,
        MatDividerModule, 
        FuseSharedModule,
        CommonModule,
        FormsModule,
        CommonModule,
        MatIconModule,
        
    ],

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

    providers   : [
       
    ], 
    entryComponents: [ 
    ]
})
export class PrintModule{}

