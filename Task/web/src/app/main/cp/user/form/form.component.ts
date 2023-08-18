import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Service } from '../service';
import { MyDateAdapter, MyDateProvider } from 'app/shared/format/date.format';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FunctionService } from '../../../../helper/function.service';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';



@Component({
    selector: 'category-form',
    styleUrls:['./component.scss'],
    templateUrl: './form.component.html',
    providers: [MyDateAdapter, MyDateProvider, {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
    }]

})
export class FormComponent implements OnInit {
    @Output()
    emitSetupData = new EventEmitter<string>();
    public mode:any;
    public isLoading: Boolean = false;
    public src: string = 'assets/images/image.png'; 
    public form: FormGroup;
    public category: any;
    @Input() data;
    @Input() action:string = "CREATE";

    constructor(
        private service: Service,
        private _snackBar: MatSnackBar,
        public fs: FunctionService,
        private route: Router,
        private _dialog: MatDialog,

    ) { 
    }

    ngOnInit(): void {
        this._buildForm();

        if(this.data){
            this.src = this.fs.fileSrc(this.data.url);
        }
    }
 

    //=============================================================================>> Submit
    submit(){
        if(this.form.valid){
            this.isLoading = true;
            this.service.action(this.action, this.data ? this.data.id : '', this.form.value).subscribe(res => {
                this.isLoading = false;
                this._snackBar.open(res.message, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
                this.route.navigate([`/cp/user`]);
              }, err => {
                  this.isLoading = false;
                  for(let key in err.error.errors){
                    let control = this.form.get(key);
                    control.setErrors({'servererror':true});
                    control.errors.servererror = err.error.errors[key][0];
                  }
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
            name          : new FormControl(this.data ? this.data.name : '' , [Validators.required,Validators.maxLength(200)]),
            phone          : new FormControl(this.data ? this.data.phone : '' , [Validators.required, Validators.pattern('(^[0][0-9].{7}$)|(^[0][0-9].{8}$)')]),
            email          : new FormControl(this.data ? this.data.email : '' , []),
            password          : new FormControl(this.data ? this.data.password : '' , []),
            image          : new FormControl(this.data ? this.data.url : '' , []),
            
        });

    }

}


