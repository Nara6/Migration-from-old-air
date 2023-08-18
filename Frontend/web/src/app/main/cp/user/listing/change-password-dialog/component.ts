// ===================================================================>> Core Library
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

// ===================================================================>> Third Library
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

// ===================================================================>> Custom Library
import { Service } from '../../service';


@Component({
  templateUrl: './template.html'
})

export class ChangePasswordComponent implements OnInit{
  // Declare variables to use in template or this class  
  public isLoading = false; // For Spinner for waiting API
  public changePasswordform: FormGroup; // Create a change-password dialog

  constructor(
    // Variables to use in this class
    private service: Service, // For API calling 
    private snackBar: MatSnackBar, // For showing a snackbar
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
    this.isLoading = true; // Display spinner
    if(this.changePasswordform.valid){ // Set a condition of valid on changPasswordform 
    let data = this.changePasswordform.value; // Assign value of changePasswordform to data
      this.service.changePassword(this.data.id, data).subscribe( // Return the value to API by id
        (res) => {
          this.snackBar.open(res.message, 'message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']}); // show the snackbar
          this.isLoading = false; // Hide the spinner
          this.dialogRef.close(); // Close the dialog
          this.changePasswordform.reset(); // Reset changePasswordform to normal
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
        }
      );
    } 
  }

  //=========================================>> Build Form
  private _buildForm() {
    this.changePasswordform = new FormGroup({
        password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  } 

}
