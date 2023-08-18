import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material';
import { FunctionService } from '../../../../../../helper/function.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Service } from '../../service';

@Component({
  templateUrl: 'template.html',
})

export class CreateDialogComponent implements OnInit{

  public form: FormGroup;
  public types:any[]      = [] 
  public isSaving:boolean = false;
  public src: string = 'static/icon/user.png'; 


  constructor(
    private _service: Service,
    private _snackBar: MatSnackBar, 
    public fs: FunctionService,
    public _dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){ 
   //console.log(data); 
   this.types = data.types;
  }
  
  ngOnInit(){
    this._buildForm(); 
    if(this.data){
      this.src = this.fs.fileSrc(this.data.image);
  }
  }


  save(){

    if(this.form.valid){
    
      this.isSaving = true; 
      this._service.create(this.form.value).subscribe( 
        // ========================>> HTTP Success Response 200
        (res: any) =>{ 
          
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
      this.form.markAllAsTouched(); 
      //console.log(this.form.value); 
      this._snackBar.open('Please check your input.', 'Message', {verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['red-snackbar']});
    }
   
  }

  private _buildForm() {

    this.form = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      code: new FormControl('', [ Validators.required ]),
      unit_price: new FormControl('', [ Validators.required, Validators.maxLength(11)]),
      type_id: new FormControl(0, [ Validators.required]),
      image: new FormControl('')
    });
  }

  srcChange($event, index:number = -1){
    this.form.get('image').setValue($event); 
  }


}