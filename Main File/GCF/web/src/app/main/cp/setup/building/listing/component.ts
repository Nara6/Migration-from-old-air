// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
// ===================================================================>> Third Library
import {  MatDialog, MatSnackBar } from '@angular/material';
// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';
import { ConfirmDialogComponent } from '../../../../../shared/confirm-dialog/confirm.component';
import { FunctionService } from '../../../../../helper/function.service';
import { CreateDialogComponent } from './create/component'; 
import { EditDialogComponent } from './edit/component'
import { ViewRoomDialogComponent } from './view-building/component'
@Component({
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
{
    
    public name:string          = '';
    public type:number          = 0; 
    public data:any[]           = [];
    public total:number         = 10;
    public limit:number         = 50;
    public page:number          = 1;
    public isSearching:boolean  = false; 

    constructor(

        private _service: Service,
        private _router: Router,
        private _snackBar: MatSnackBar,
        private _dialog: MatDialog,
        private _route: Router, 
        public fs: FunctionService,

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
       //this.confirmCreate(); 
       
       
    }



    //==============================================================>> Create
    openCreateForm():void {
      const dialogRef = this._dialog.open(CreateDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.listing(); 
        }
      });

    }
    //===================================================================>> Edit
    openEditForm(row:any = null):void {
      const dialogRef = this._dialog.open(EditDialogComponent, { data:row });
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.listing(); 
        }
      });

    }
    //===================================================================>> Edit
    openViewRoom(row:any = null):void {
      const dialogRef = this._dialog.open(ViewRoomDialogComponent, { data:row });
      dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.listing(); 
        }
      });

    }

   
   

    onDelete(row:any = null){

      //console.log(row);
      const dialogRef = this._dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        //console.log(result); 
        if(result){
          
          this._service.delete(row.id).subscribe((res) => {

            if(res.status == 'success'){
                this.listing();
                this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
            }
          });
        }
      });

    }

    listing() {
        
        this.isSearching = true; 
        let params:any = { }
        
        if(this.name != ""){
            params.name = this.name; 
        }

        this._service.listing(params).subscribe(res => {
            
            this.isSearching = false; 
            this.data = res.data;
            this.total = res.total;
            this.page  = res.current_page;
            this.limit = res.per_page;
        })
       
    }

   
    onPageChanged(event) {
      if (event && event.pageSize) {
          this.limit = event.pageSize;
          this.page = event.pageIndex + 1;
          this.listing();
          
      }
  
    }
  
  

}

