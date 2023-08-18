import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Service } from '../../service';

@Component({
  templateUrl: 'template.html',
})

export class EditProductComponent implements OnInit{

  public form: FormGroup;
  public type: any;
  public isSaving:boolean = false;
  public dataHasChanged:boolean = false; 
  public types:any;
  constructor(
    private _service: Service,
    private _snackBar: MatSnackBar, 
    public _dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){ 
  
  }
  
  ngOnInit(){
    this._buildForm(); 
}

  save(){

    if(this.form.valid){
    
      this.isSaving = true; 
      this._service.updateProduct(this.data.id, this.form.value).subscribe( 
        // ========================>> HTTP Success Response 200
        (res: any) =>{ 
          
          this.dataHasChanged = true; 
          this.isSaving = false; 
          this._snackBar.open(res.message, 'Message', {verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
          this._dialogRef.close(res); 
        },  

        // ========================>> HTTP Error Response
        err => {  
          this.isSaving = false; 
          this._snackBar.open('Please try again.', 'Message', {verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['red-snackbar']});
        }
      );
    }else{
      this._snackBar.open('Please check your input.', 'Message', {verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['red-snackbar']});
    }
   
   


  }

  private _buildForm() {

    this.form = new FormGroup({
      name: new FormControl(this.data ? this.data.name : '' , [ Validators.required,Validators.maxLength(60)]),
      package_id: new FormControl(this.data ? this.data.package_id : '' , [ Validators.required,Validators.maxLength(60)]),
      price: new FormControl(this.data ? this.data.price : '' , [ Validators.required,Validators.maxLength(60)]),
    //   credit: new FormControl(this.data ? this.data.credit : '' , [ Validators.required,]),
    });
}


}
