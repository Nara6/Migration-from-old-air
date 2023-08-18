import { Component, OnInit, Inject } from '@angular/core';
import { Service } from '../../service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './template.html'
})

export class ChangePasswordComponent implements OnInit{

  public isLoading = false;
  public changePasswordform: FormGroup;

  constructor(
    private service: Service, 
    private formBuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChangePasswordComponent> ,
    @Inject(MAT_DIALOG_DATA)public data: any
  ){ 
  }

  ngOnInit(){
    //console.log(this.data);
    this._buildForm();
  }

  //==================================================>> Function Submit
  submit() {
    this.isLoading = true;
    if(this.changePasswordform.valid){
    let data = this.changePasswordform.value;
      this.service.changePassword(this.data.id, data).subscribe(
        (res) => {
          this.snackBar.open(res.message, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
          this.isLoading = false;
          this.dialogRef.close();
          this.changePasswordform.reset();
          this.changePasswordform.controls.password.setErrors(null)
        },
        error => {
          this.isLoading = false;
          const errors = JSON.parse(error._body).errors;
          for(let key in errors){
            let control = this.changePasswordform.get(key);
            control.setErrors({'servererror':true});
            control.errors.servererror = errors[key][0];
          }
        });
    } 
  }

  //=========================================>> Build Form
  private _buildForm() {
    this.changePasswordform = new FormGroup({
        password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  } 

}
