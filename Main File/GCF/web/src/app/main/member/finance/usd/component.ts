//=========================================================>> Core Library
import { Component, OnInit,ViewChild, TemplateRef,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

//=========================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';

//=========================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm.component';
import { FunctionService } from '../../../../helper/function.service';
import { TableColumnService } from 'app/shared/services/table-column.service';
import { LoadMoreService } from 'app/shared/services/load-more.service';


@Component({
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class UsdComponent implements OnInit
{
    public key : string = ""; 
      public name : string = '';
      public type : string = ""; 
      public data : any[] = [];
      public total : number = 10;
      limit : number = 10;
      page : number = 1;
      public isSearching: boolean  = false; 
      public isLoadMore : boolean = false;
      public searchId: string= '';

      /**
     * Constructor
     *
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {TranslateService} _translateService
     */
        constructor(
          private _service : Service,
          private _snackBar: MatSnackBar,
          private _dialog : MatDialog,
          public fs : FunctionService,
          private _tableColumnService:TableColumnService,
          private _loadMoreService: LoadMoreService,


  
      ){
        /**
         * @param _loadMoreService service subsribe reponse from scroll event
         * @param isLoadMore is option to check with array data it is old data or new data
         * @param loadMore option to arrow user load more record if old loaded succesfully
         * @param listing method load more record
         * * @param {TranslateService} _translateService
         */
      this._loadMoreService.filterCallOut.subscribe((returnFilter:any={})=>{
        if(returnFilter){
            let params = {
                fromDate : returnFilter.fromDate,
                toDate : returnFilter.toDate,
                status:returnFilter.status,
                limit:this.limit
            }

            //console.log('params',params);
            this.isLoadMore = false;
            this.data = [];

            this.listing(params);
        }
    });

    
    }

      //for table component
      @ViewChild('colTrx',{static:true}) private colTrx:TemplateRef<any>;
      @ViewChild('colAmount',{static:true}) private colAmount:TemplateRef<any>;
      @ViewChild('colBalance',{static:true}) private colBalance:TemplateRef<any>;
      @ViewChild('colType',{static:true}) private colType:TemplateRef<any>;
      @ViewChild('colDate',{static:true}) private colDate:TemplateRef<any>;
      
      lstColumnTableNames = ['លេខប្រតិបត្តិការ', 'ទឹកប្រាក់','សមតុល្យ','ប្រភេទ','កាលបរិច្ឆេទ'];
      columnTableInfo:any=[];

      // -----------------------------------------------------------------------------------------------------
      // @ Lifecycle hooks
      // -----------------------------------------------------------------------------------------------------
      /**
       * On init
       */
      
      ngOnInit(): void
      {
        //  this.listing();
        // console.log(this.data); 
         this.listing();
         this.createColumnTblName();
         
      }
   /**
     * @param lstColumnTableNames array of columns name
     * @param lstTamplates array template display in table component
     */
    createColumnTblName(){

      if(this.lstColumnTableNames && this.lstColumnTableNames.length){

          let lstTamplates = [ this.colTrx,this.colAmount,this.colBalance,this.colType,this.colDate];

          if(lstTamplates && lstTamplates.length){
              this.columnTableInfo = this._tableColumnService.createColumnTable(this.lstColumnTableNames,lstTamplates);
          }

      }

      }
      //==================================================================================================================>> Function delete
      onDelete(row:any = null,i:number = -1){
        const dialogRef = this._dialog.open(ConfirmDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
          if(result){
            this._service.delete(row.id).subscribe((res) => {
              if(res.status == 'success'){
                  this.listing();
                  this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
                  this.isSearching = false; 
                  this.data = res.data;
                  this.total = res.total;
                  this.page  = res.current_page;
                  this.limit = res.per_page;
              }
              
            },
              );
          }
          
        });
  
      }
  
    onPageChanged(event) {
      if (event && event.pageSize) {
          this.limit = event.pageSize;
          this.page = event.pageIndex + 1;
          this.listing();
          
      }
  
    }
      
    //==================================================================================================================>> Function Listing
    listing(params:any={}) {


      this.isSearching = true;

      if (this.key != "") {
          params.key = this.key;
      }

      if (this.isSearching) {

        this._service.list(params).subscribe(res => {
          this.data= res;
         console.log('datas', this.data);
          this.isSearching = false;
          this._loadMoreService.loadMore = true;
      });
      }
    }
    

    reloadRecord(){        
      let params: any = {
          limit: this.limit,
          page: this.page
      }
      this.data = [];
      this.isLoadMore = false;
      this.listing(params);
    }
  
  }
  

