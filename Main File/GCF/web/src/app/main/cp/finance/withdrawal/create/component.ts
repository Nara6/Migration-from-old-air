import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyDateAdapter, MyDateProvider } from 'app/shared/format/date.format';
import { Service } from '../service';
import { FunctionService } from '../../../../../helper/function.service';


@Component({
    templateUrl: './template.html',
    providers: [MyDateAdapter, MyDateProvider]
})
export class CreateProductComponent implements OnInit {
    @Output()
    emitSetupData = new EventEmitter<string>();

    hideOldPassword: Boolean = true;
    hidePassword: Boolean = true;
    hideConfirmPassword: Boolean = true;

    public isLoading: Boolean = false;
    public form: FormGroup;
    public roles: any;
    public mode: any;
    public src: string = 'assets/mpwt/person-placeholder.jpg';
    public data: any;

    constructor(
        private service: Service,
        private _formBuilder: FormBuilder,
        private route: Router,
        private _snackBar: MatSnackBar,
        public fs: FunctionService
    ) {
    }

    ngOnInit(): void {
        this._buildForm();
        // if (this.data) {
        //     this.src = this.fs.imgUrl(this.data.avatar);
        // }
    }


    submit(){
        if(this.form.valid){
            this.isLoading = true;
            let data = this.form.value;
            this.service.addProducts(this.form.value).subscribe(res => {
                this.isLoading = false;
                this._snackBar.open(res.message, 'Message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
                this.route.navigate([`cp/products/all`]);
              }, err => {
                  this.isLoading = false;
                  for(let key in err.error.errors){
                    let control = this.form.get(key);
                    control.setErrors({'servererror':true});
                    control.errors.servererror = err.error.errors[key][0];
                  }
              });
        }else{
            this._snackBar.open('Please try again!', 'Message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,  panelClass: ['red-snackbar']});
        }
    }
    srcChange(src, index) {
        this.form.get('avatar').setValue(src);
    }

    private _buildForm() {
        this.form = new FormGroup({
            name: new FormControl(this.data ? this.data.name : '', [Validators.required, Validators.maxLength(60)]),
            package_id: new FormControl(this.data ? this.data.package_id : '', [Validators.required, Validators.maxLength(60)]),
            price: new FormControl(this.data ? this.data.price : '', [Validators.required, Validators.maxLength(60)]),
            // image: new FormControl(this.data ? this.data.image : '', [Validators.required,]),
        });
    }
}
