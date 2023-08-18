// ========================================================>> Core Library
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {FormControl, Validators } from '@angular/forms';

// ========================================================>> Custom Library
import { Service } from '../service';
import { MyDateAdapter, MyDateProvider } from 'app/shared/format/date.format';
import { MatDialog } from '@angular/material';


@Component({
    
    templateUrl: './edit.component.html',
    providers: [MyDateAdapter, MyDateProvider]

})
export class EditComponent implements OnInit {

    public id = 0;
    public data: any;
    public code = "";
    public isLoading = false;
    public form: FormGroup;
    public validationData: any; 

    constructor(
        private service: Service,
        private router: ActivatedRoute,
        private _dialog: MatDialog,
 
    ) { 
        this.router.paramMap.subscribe(params => {
            this.code = params.get('id');
          });
    }

    ngOnInit(): void {

        this.getData();

       
    }
 
    getData(){
        this.isLoading = true;
        this.service.view(this.code).subscribe(
            (response) => {
                this.isLoading = false;
                this.data = response.data;
            }
          );
    }



}


