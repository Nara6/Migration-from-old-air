import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Service } from '../../service';
import { FunctionService } from 'app/helper/function.service';

@Component({
  templateUrl: 'template.html',
})

export class EditDialogComponent implements OnInit{

  public form: FormGroup;
  public isSaving:boolean = false;
  public dataHasChanged:boolean = false; 
  public types:any[]          = []; 
  public src: string = 'assets/mlm/default.png'; 


  constructor(
    private _service: Service,
    private _snackBar: MatSnackBar, 
    public fs: FunctionService,
    public _dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){ 
    this.types = data.types;
  }
  
  ngOnInit(){

    this._buildForm(); 
    
  }


  save(){

    if(this.form.valid){
    
      this.isSaving = true; 
      this._service.update(this.data.row.id, this.form.value).subscribe( 
        // ========================>> HTTP Success Response 200
        (res: any) =>{ 
          this.isSaving = false; 
          this._snackBar.open(res.message, 'Message', {verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
          this._dialogRef.close(res.product); 

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
      code: new FormControl(this.data.row.code, [ Validators.required ]),
      name: new FormControl(this.data.row.name, [ Validators.required ]),
      unit_price: new FormControl(this.data.row.unit_price, [ Validators.required]),
      type_id: new FormControl(this.data.row.type_id, [ Validators.required]),
      image: new FormControl( this.data.row.image ? this.src = this.fs.imgSrc(this.data.row.image):'', []),
    });


  }

  srcChange($event, index:number = -1){
    this.form.get('image').setValue($event); 
  }

}
