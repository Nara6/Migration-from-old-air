import {Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';

import {GeneralInformation} from './general-info/component';
import {SelectMajor} from './choose-major/component'



@Component({
    selector : 'print-application-form',
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../printing.style.scss']
})
export class ApplicationFormComponent implements OnInit
{
    @ViewChild('generalInfo', { static: false }) generalInfo: GeneralInformation;
    @ViewChild('attachment',{static:false}) attachment:SelectMajor;

    @Input()  data:any;

    constructor(
       
    ){
       
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void
    {  
        // console.log(this.data);
        
    }
}

