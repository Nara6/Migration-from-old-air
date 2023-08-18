// ===================================================================>> Core Library
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// ===================================================================>> Tird Party
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';

// ===================================================================>> Custom Library
import { MyDateAdapter, MyDateProvider } from 'app/shared/format/date.format';
import { Service } from '../service';
import { environment } from '../../../../../environments/environment';
import { ChangePasswordComponent } from '../listing/change-password-dialog/component'

@Component({
    templateUrl: './edit.component.html',
    providers: [MyDateAdapter, MyDateProvider]

})
export class EditComponent implements OnInit {


  
    public isGettingData: Boolean = false;
    public isUpdatingData: Boolean = false;
    public src: string = ''; 
    public form: FormGroup;
    public types: any[] = [];
    public data:any = null;
    public id: string = '';
    public isActive: Boolean = true;

    constructor(
        private _service: Service,
        private _snackBar: MatSnackBar,
        private _route: Router,
        private _router: ActivatedRoute,
        private _dialog: MatDialog // For popup dialog

    ) { 

    }

    ngOnInit(): void {
        // Getting type of user
        this._service.getType().subscribe(
            (res) => {
                this.types = res;
            },
        );
        // Getting data from API
        this._router.paramMap.subscribe(params =>{
            this.id = params.get('id');
            this.isGettingData = true;
            this._service.view(params.get('id')).subscribe(res => {
                this.isGettingData = false;
                this.data = res;
                this.isActive = res.is_active == 1 ? true : false;
                this.src = environment.fileUrl + res.avatar;
                this._buildForm();

            });

        });

    }
 
    //=============================================================================>> Submit
    submit(){
        if(this.form.valid){

            let data = this.form.value;
            data.is_active = this.isActive ? 1 : 0 ;
            this.isUpdatingData = true;
            this._service.update(this.id, this.form.value).subscribe(res => {
                this.isUpdatingData = false;
                this._snackBar.open(res.message, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
            }, err => {
                console.log(err.error.errors);
                this.isUpdatingData = false;
                this._snackBar.open(err.error.errors.email, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,  panelClass: ['red-snackbar']});
               
            });
        }else{
            this._snackBar.open('Please check your input.', 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,  panelClass: ['red-snackbar']});
        }
        
    }

    
    //==================================================>. Change Password
    changePassword(){
        console.log(this.data);
        
        const dialog = this._dialog.open(ChangePasswordComponent, {
          disableClose: true,
          data: this.data,
        });
        dialog.afterClosed().subscribe((res) => {});
    }

    //======================================================>> Src Change 
    srcChange(src, i){
        this.form.get('image').setValue(src); 
    }

    //=======================================================>> Build From
    private _buildForm() {
        this.form = new FormGroup({
            name              : new FormControl(this.data ? this.data.name : '', [Validators.required,Validators.maxLength(200)]),
            phone             : new FormControl(this.data ? this.data.phone : '', [Validators.required, Validators.pattern('(^[0][0-9].{7}$)|(^[0][0-9].{8}$)')]),
            email             : new FormControl(this.data ? this.data.email : '', []),
            image             : new FormControl(this.data ? this.data.avatar : '', []),
            is_active         : new FormControl(this.data ? this.data.is_active : '', []),
            type_id           : new FormControl(this.data ? this.data.type_id : '', [])
            
        });

    }

}


