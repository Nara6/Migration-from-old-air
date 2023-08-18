import { Component, OnInit } from '@angular/core';
import { MyDateAdapter, MyDateProvider } from 'app/shared/format/date.format';

@Component({
    templateUrl: './create.component.html',
    providers: [MyDateAdapter, MyDateProvider]

})
export class CreateComponent implements OnInit {

    constructor(
    ) { 
    }

    ngOnInit(): void {

        
    }

   
}


