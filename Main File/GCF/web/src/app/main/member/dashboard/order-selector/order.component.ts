import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { MatDialog, MatSnackBar } from '@angular/material';
import { Service } from '../service';
import { FunctionService } from 'app/helper/function.service';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm.component';


@Component({
    selector     : 'order-selector',
    templateUrl  : './order.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class OrderSelectorComponent implements OnInit
{
    @Output() close = new EventEmitter<any>();
    public type:string = 'សមាជិក';

    public isLoading:boolean = false;
    public data: any[] = [];
    public package:any;
    public package_id:any;
    public form: FormGroup;

    public selectedResource:any; 
    public isSearching = true;
    public distributorId:string = '';
    public key:string = ""; 

    public productActivate: any[] = [];
    public productMaintenance: any[]= [];

    constructor(
      private _service: Service,
      private _snackBar: MatSnackBar, 
      public fs: FunctionService,
      private _dialog: MatDialog,
    )
    {
        
    }

    activate = true;
    maintain = false;

    ngOnInit(): void
    {
     
      this.getProducts(); 
      this._buildForm();

      //this.searchDistributorDialog();
    }

  
    // ==============================>> Get Product
    getProducts() {

      this.isLoading = true; 
      this._service.getPackage().subscribe(res => {

        this.data               = res; 
      //  console.log(this.data);
        this.isLoading          = false;
        
      }); 

    }
     
    orderPackage(packages:any){

      const dialogRef = this._dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          let body = this.form.value;  
         body.package_id  =  packages.id;
          //console.log(packages);
          this._service.orderPackage(body).subscribe((res) => {
            if(res.status == 'success'){
                this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
                this.isSearching = false; 
                window.location.reload();

            }
            
          },
          );
        }
        
      });
    }
    
    private _buildForm() {
      this.form = new FormGroup({

      });
  }
}

