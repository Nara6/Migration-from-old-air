import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../../service';
import { Input } from '@angular/core';
import { FunctionService } from '../../../../../helper/function.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from 'app/shared/validator/validator.service';
import { Router } from '@angular/router';


@Component({
    selector: 'overview-member',
    templateUrl  : './template.html',
    styleUrls:['../style.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations, 
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
      }]
})
export class ViewMemberComponent implements OnInit
{
    public form : FormGroup;
    public mode : any;
    @Input() data;
    @Input() id;
    @Input() action:string = "CREATE";
    public isLoading:boolean = false;
    public src        : string = 'assets/images/person-placeholder.jpg'; 
    public changePasswordForm: FormGroup;
    public isLoadingPassword: boolean;

    constructor(
        private service: Service,
        
        private validatorService: ValidatorService,
        private _formBuilder: FormBuilder,
        private route: Router,
        private _snackBar: MatSnackBar,
        public fs: FunctionService
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
       // console.log(this.data)        
        this._buildForm();
        if(this.data){
            this.src = this.fs.imgUrl(this.data.avatar);
        }  
    }

 
    submit(){
        if(this.form.valid){
            this.isLoading = true;
            this.service.updateMember(  this.data.id, this.form.value ).subscribe(res => {
                this.isLoading = false;
                this._snackBar.open(res.message, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
                //this.route.navigate([`/cp/staffs`]);
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

    srcChange($event, $index = -1){
        console.log($event); 
        // this.output.emit($event); 
        this.form.get('avatar').setValue($event); 
      }

    private _buildForm() {
        this.form = new FormGroup({
           
            uid_referral   : new FormControl(this.data ? this.data.referral.user.uid     :''),
            rank_referral   : new FormControl(this.data ? this.data.referral.rank.name   :''),
            name_referral    : new FormControl(this.data ? this.data.referral.user.name     :'', [ Validators.required,Validators.maxLength(60)]),
            phone_refferral   : new FormControl(this.data ? this.data.referral.user.phone    :'', [ Validators.required,]),

            uid   : new FormControl(this.data ? this.data.user.uid     :''),
            rank   : new FormControl(this.data ? this.data.rank.name   :''),
            name    : new FormControl(this.data ? this.data.user.name     :'', [ Validators.required,Validators.maxLength(60)]),
            phone   : new FormControl(this.data ? this.data.user.phone    :'', [ Validators.required,]),
            email   : new FormControl(this.data ? this.data.user.email    :'', [ Validators.required,]),
            address : new FormControl(this.data ? this.data.user.address  :'', []),   
            
        });
        this.changePasswordForm = new FormGroup({

            password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]),
            confirm_password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(20), this.passwordMatcher.bind(this) ])
        });

    }

      // confirm new password validator
      private passwordMatcher(control: FormControl): { [s: string]: boolean } {
        if (
            this.changePasswordForm &&
            (control.value !== this.changePasswordForm.controls.password.value)
        ) {
            return { passwordNotMatch: true };
        }
        return null;
    }
    changePassword(){
        if(this.changePasswordForm.valid){

            this.isLoadingPassword = true;
            
            this.service.changePasswordMember(this.data ? this.data.id :'',this.changePasswordForm.value).subscribe(res => {
                this.isLoadingPassword = false;
                this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
               // this.route.navigate([`products/`+res.data.id+'/overview']);
              }, err => {
                  this.isLoadingPassword = false;
                  // tslint:disable-next-line: forin
                  for (const key in err.error.errors){
                    const control = this.changePasswordForm.get(key);
                    control.setErrors({servererror: true});
                    control.errors.servererror = err.error.errors[key][0];
                  }
              });

        }else{
            this._snackBar.open('សូមបំពេញព័ត៌មានឪ្យបានត្រឹមត្រូវ', 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,  panelClass: ['red-snackbar']});
        }
        
    }
}
