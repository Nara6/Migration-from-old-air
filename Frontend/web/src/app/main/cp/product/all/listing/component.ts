// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ===================================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';

// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';

import { ConfirmDialogComponent } from '../../../../../shared/confirm-dialog/confirm.component';
import { CreateDialogComponent } from './create/component'; 
import { EditDialogComponent } from './edit/component'; 

import { FunctionServices } from 'app/shared/function/function.service';
import { environment } from '../../../../../../environments/environment'; 

@Component({
    templateUrl  : './template.html',
    styleUrls: ['../../../../../../assets/custom.scss', './style.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
{
    
    public key:string           = '';
    public type:number          = 0; 
    public units:any[]      = []; 
    public types:any[]          = []; 
    public data:any[]           = [];
    public total:number         = 10;
    public limit:number         = 50;
    public page:number          = 1;
    public isSearching:boolean  = false; 
    public fileUrl:string       = environment.fileUrl; 

    constructor(

        public fs:FunctionServices,
        private _service: Service,
        private _snackBar: MatSnackBar,
        private _dialog: MatDialog,

    ){}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void
    {
       this.listing(); 
       //this.openCreateForm(); 

      //Get Product type
      this._service.getProductType().subscribe((res:any[]) => {
        this.types = res;
      })

      // this._service.getProductUnit().subscribe((res:any[]) => {
      //   this.units = res;
      // })
       
    }

    openCreateForm():void {

      const dialogRef = this._dialog.open(CreateDialogComponent, { data:{ types: this.types} });
      dialogRef.afterClosed().subscribe((result) => {

        if(result){
          this.listing();
          this.data = result.product;
        }
          
      });

    }

    openEditForm(row:any = null):void {

      const dialogRef = this._dialog.open(EditDialogComponent, { data:{ row: row, types: this.types } });
      dialogRef.afterClosed().subscribe((result) => {

        if(result){
          row.code = result.code;
          row.image = result.image;
          row.name = result.name;
          row.type.name =   result.type.name;
          row.unit_price = result.unit_price;
          row.created_at = result.created_at;
          row.updated_at  = result.updated_at;
        }

      });

    }
   
    onDelete(row:any = null){

      const dialogRef = this._dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        
        if(result){
          
          this._service.delete(row.id).subscribe((res) => {

            if(res.status == 'success'){
                this.listing();
                this.data = res.data;
                this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
            }

          });

        }

      });

    }

    listing() {
        
      this.isSearching = true; 
      let params:any = { }
      
      if(this.key != ""){
          params.key = this.key; 
      }

      if(this.type != 0){
        params.type = this.type; 
      }

      this._service.listing(params).subscribe(res => {
          this.isSearching = false; 
          this.data = res;
      })
       
    }

}

