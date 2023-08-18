import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Service } from '../../service';
import { getType } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  templateUrl: 'template.html',
})

export class CreateDialogComponent implements OnInit{

  public form: FormGroup;
  public isSaving:boolean = false;
  public customer: any[]      = [];
  public key:string           = '';
  public isSearching:boolean  = false; 
  public selectedCustomer = [];
  public hasSelect:boolean = false;


  constructor(
    private _service: Service,
    private _snackBar: MatSnackBar, 
    public _dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){ 
   
  }
  
  ngOnInit(){
    this._buildForm(); 
    this.getType();
  }

  onSelectChange($event){
    //console.log($event);
    this._dialogRef.close($event.value); 
  }


  select($event: any = null, index: any){
    console.log(this.customer);
    this.customer.forEach(e => {
      e.selected = 0;
    })

    if($event.checked){
      this.customer[index].selected = 1;
      this.selectedCustomer = this.customer[index];
      // console.log(this.selectedCustomer);
      this.hasSelect = true;

      
    }else{
      this.selectedCustomer = null;
      this.hasSelect = false;

    }
    //this._dialogRef.close(row); 

  }

  selectAll($event: any = null, index: any){
    console.log(this.customer);
    // this.customer.forEach(e => {
    //   e.selected = 0;
    // })

    if($event.checked){
      this.customer[index].selected = 1;
      // this.selectedCustomer = this.customer[index];
    }else{
      this.customer[index].selected = 0;
    }
    //this._dialogRef.close(row); 

  }

  add(){
    console.log(this.selectedCustomer);
    this._dialogRef.close(this.selectedCustomer); 
  }

  getType(){

    this.isSearching = true; 
    let params:any = { }
    
    if(this.key != ""){
        params.key = this.key; 
    }

    this._service.getCustomer(params).subscribe(res => {
        this.isSearching = false; 
        this.customer = res;
    });

    console.log('hello',this.customer)
}

  private _buildForm() {

    this.form = new FormGroup({
      customer_id : new FormControl(0, [ Validators.required]),

     
    });

}


}
