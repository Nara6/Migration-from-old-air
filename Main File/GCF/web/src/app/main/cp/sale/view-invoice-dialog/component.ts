//=========================================================>> Core Library
import { Component, OnInit, ViewEncapsulation, Inject,  } from '@angular/core';
//=========================================================>> Third Library
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  MatDialog, MatSnackBar } from '@angular/material';

import { Service } from '../service';

//=========================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm.component';

@Component({
    templateUrl  : './template.html',
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ViewInvoiceDialogComponent implements OnInit
{
    public status:number = 3; 
    public  : any;
    public invoice:any; 
    public isLoading:boolean = false; 
    public payment:boolean = true;

    constructor(
        private _dialog: MatDialog,
        private _service: Service,
        private _snackBar: MatSnackBar,

        public dialogRef: MatDialogRef<ViewInvoiceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        
    }
    

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void
    {
//    console.log(this.data)
    this.getInvoice();
      
    }
    
      //=============================================================================>> Function Payment Accepted
      action(item, type:string ){

        const dialogRef = this._dialog.open(ConfirmDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            this.payment = false;

            if(result){
                
                const body = {
                    receipt_number: item.receipt_number, 
                    action: type
                };
                this._service.payment(body).subscribe(res =>{
                    this.payment     = true; 
                    this.getInvoice();
                    
                    this._snackBar.open(res.status, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000,panelClass: ['green-bg']});
                    item.type         = res.data; 
                }, err => {
                    item.payment = false; 
                    this._snackBar.open(JSON.parse(err._body).message, 'Message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['red-snackbar']});
                });    
            }
        });
    }
     
    
    getInvoice(){
        this.isLoading = false;
        this._service.getInvoices(this.data).subscribe(res => {
            this.invoice = res.data;
            this.isLoading = true; 
          

        });
    }
    
}



