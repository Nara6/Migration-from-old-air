// ===================================================================>> Core Library
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// ===================================================================>> Tird Party
import {MatSnackBar} from '@angular/material/snack-bar';

// ===================================================================>> Custom Library
import { MyDateAdapter, MyDateProvider } from 'app/shared/format/date.format';
import { Service } from '../service';
import { environment } from '../../../../../environments/environment';

@Component({
    templateUrl: './create.component.html',
    providers: [MyDateAdapter, MyDateProvider]

})
export class CreateComponent implements OnInit {

    public src: string = environment.fileUrl + 'static/icon/user.png'; 
    public form: FormGroup;
    public types: any [] = []; // User Type
    public isActive: Boolean = true; 
    public data:any = null;
    public isSaving: Boolean = false;

    constructor(
        private _service: Service,
        private _snackBar: MatSnackBar,
        private _route: Router

    ) { 
    }

    ngOnInit(): void {
        this._buildForm();
        this._service.getType().subscribe(
            (res) => {
                this.types = res;
            },
        );
    }
 
    //=============================================================================>> Submit
    submit(){
        if(this.form.valid){
            
            let data = this.form.value;
            data.is_active = this.isActive ? 1 : 0 ;
            this.isSaving = true;
            this._service.create(data).subscribe(res => {
                this._snackBar.open(res.message, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
                this._route.navigate([`/user/`+ res.user.id]);
            }, err => {

                this.isSaving = false;
                this._snackBar.open(err.error.errors.email, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,  panelClass: ['red-snackbar']});
               
            });
        }else{
            this._snackBar.open('Please check your input.', 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,  panelClass: ['red-snackbar']});
        }
        
    }

    //======================================================>> Src Change 
    srcChange(src, i){
        this.form.get('image').setValue(src); 
     }

    //=======================================================>> Build From
    private _buildForm() {
        this.form = new FormGroup({
            name              : new FormControl('lim Lyhork' , [Validators.required,Validators.maxLength(200)]),
            phone             : new FormControl('0786043330' , [Validators.required, Validators.pattern('(^[0][0-9].{7}$)|(^[0][0-9].{8}$)')]),
            email             : new FormControl('lyhorklim@gmail.com' , []),
            password          : new FormControl('Lyhorklim@123' , [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$')]),
            image             : new FormControl('' , []),
            is_active         : new FormControl(1 , []),
            type_id           : new FormControl(1, [])
            
        });

    }

}


