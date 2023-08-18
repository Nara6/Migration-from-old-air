import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';



@Component({
    selector: 'select-major',
    styleUrls: ['../../printing.style.scss'],
     templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,

})
export class SelectMajor implements OnInit
{
    
    @Input() data;

    constructor(
       
    ){
    }

    ngOnInit(): void
    {
        console.log(this.data);
        
    }

}

