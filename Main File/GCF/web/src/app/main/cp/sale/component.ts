import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { TableColumnService } from 'app/shared/services/table-column.service';
import { Service } from './service';


import { ViewInvoiceDialogComponent } from './view-invoice-dialog/component'
@Component({
    selector     : 'finance-dashboard',
    templateUrl  : './template.html',
    //styleUrls: ['../../../../../../assets/custom.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
{
    
  
    public key:any;
    public status: number = 0;

    public setup:any={
    }
    public data:any       = null;
    public dashboard:any       = null;
    public isSearching:boolean = false;
    public isLoadMore:boolean = false;
    public total:number     = 10;
    limit: number = 10;
    page:   number = 1;

     //for table component
     @ViewChild('colNumber',{static:true}) private colNumber:TemplateRef<any>;
     @ViewChild('colInformation',{static:true}) private colInformation:TemplateRef<any>;
     @ViewChild('colPayment',{static:true}) private colPayment:TemplateRef<any>;
     @ViewChild('colRank',{static:true}) private colRank:TemplateRef<any>;
     @ViewChild('colStatus',{static:true}) private colStatus:TemplateRef<any>;
     @ViewChild('colAction',{static:true}) private colAction:TemplateRef<any>;
     
     lstColumnTableNames = ['លេខវិ​ក័​យ​ប័ត្រ','ព័ត៌មានសមាជិក','ទឹកប្រាក់ត្រូវបង់','កញ្ចប់','ស្ថានភាព','សកម្មភាព'];
     columnTableInfo:any=[];
 
    constructor(
        private _dialog: MatDialog, 
        private _service: Service,
        private _tableColumnService:TableColumnService,


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
       this.createColumnTblName();
     //  this.viewInvoiceDialog(this.data);
     
    }
 /**
     * @param lstColumnTableNames array of columns name
     * @param lstTamplates array template display in table component
     */
  createColumnTblName(){

    if(this.lstColumnTableNames && this.lstColumnTableNames.length){

        let lstTamplates = [ this.colNumber,this.colInformation,this.colPayment,this.colRank,this.colStatus,this.colAction];

        if(lstTamplates && lstTamplates.length){
            this.columnTableInfo = this._tableColumnService.createColumnTable(this.lstColumnTableNames,lstTamplates);
        }

    }

    }
  

     //=========================================================================================>> Function List payment
     listing() {
      this.isSearching = true; 
      let param:any = {
          limit: this.limit,
          page: this.page
      }
      
      if(this.key != ""){
        param.key = this.key; 
      }
      if(this.status != 0){
        param.status = this.status;
      }
      this._service.listing(param).subscribe(res => {
          this.isSearching = false; 
          this.data = res.data;
          this.total = res.total;
          this.page  = res.current_page;
          this.limit = res.per_page;

      });
    }

    onPageChanged(event) {
      if (event && event.pageSize) {
          this.limit = event.pageSize;
          this.page = event.pageIndex + 1;
          this.listing();
          
      }
  
    }
  //===============================================================================================>> Open Filter Function


    //===============================================================================================>> Function Update status
viewInvoiceDialog(row:any = null) {
        const dialogRef = this._dialog.open(ViewInvoiceDialogComponent, {data: row,disableClose:true});
        dialogRef.afterClosed().subscribe(res => {
          if(res){
            this.listing(); 
          }
        })
        
}
//===========================================================================================>> Function Print Invoice

}

