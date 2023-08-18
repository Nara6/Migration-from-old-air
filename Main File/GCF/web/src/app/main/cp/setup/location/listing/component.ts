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

import {ViewDistrictDialogComponent} from './view-district/component';


@Component({
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
{
    public data:any[]           = [];
    public isSearching:boolean  = false; 
    public isMigrating:boolean  = false;
    public nOfDistricts:number  = 0;
    public nOfCommunes:number   = 0;
    public nOfVillages:number   = 0;

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



   

   
    listing() {
        
        this.isSearching = true; 
        let params:any = { }
        
       

        this._service.listing(params).subscribe(res => {
            
            this.isSearching = false; 
            this.data = res;
            this.data.forEach(e=>{
                this.nOfDistricts += e.n_of_districts;
            })
            this.data.forEach(e=>{
                this.nOfCommunes += e.n_of_communes;
            })
            this.data.forEach(e=>{
                this.nOfVillages += e.n_of_villages;
            })
        
        })
       
    }

    confirmMigrate(){

      //console.log(row);
      const dialogRef = this._dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        //console.log(result); 
        if(result){

          this.isMigrating = true; 
          this._service.migrate().subscribe((res) => {
            this.isMigrating = false; 

            this.listing();
                this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
            });
        }
      });

    }

    viewDistrict(row:any = null):void {

        const dialogRef = this._dialog.open(ViewDistrictDialogComponent, { data:row });
        dialogRef.afterClosed().subscribe((result) => {
          
          //console.log(result); 
  
          if(result){
              
            this.listing(); 
          }
            
        });
  
      }

   
   
  

}

