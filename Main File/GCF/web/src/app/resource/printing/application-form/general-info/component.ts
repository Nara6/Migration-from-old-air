import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

//=========================================================>> Custom Library
import { FunctionServices } from 'app/shared/function/function.service';
import { environment as env } from 'environments/environment'; 


@Component({
    selector: 'general-info',
    // styleUrls: ['./style.scss'],
    styleUrls: ['../../printing.style.scss'],
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,

})
export class GeneralInformation implements OnInit
{
    public env = env;
    @Input()  data:any;

    constructor(
        public fs: FunctionServices

    ){
    }

    ngOnInit(): void
    {
         
    }

}

