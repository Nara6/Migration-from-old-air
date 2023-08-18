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
    styleUrls: ['./style.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
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
      @ViewChild('colNumber',{static:true}) private colNumber:TemplateRef<any>;
      @ViewChild('colRank',{static:true}) private colRank:TemplateRef<any>;
      @ViewChild('colInformation',{static:true}) private colInformation:TemplateRef<any>;
      @ViewChild('colMajor',{static:true}) private colMajor:TemplateRef<any>;
      @ViewChild('colAction',{static:true}) private colAction:TemplateRef<any>;
      
      lstColumnTableNames = ['UID','តំណែង','ព័ត៌មានសមាជិក','Referral','សកម្មភាព'];
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
         this.listing();
         this.createColumnTblName();
         
      }
   /**
     * @param lstColumnTableNames array of columns name
     * @param lstTamplates array template display in table component
     */
    createColumnTblName(){

      if(this.lstColumnTableNames && this.lstColumnTableNames.length){

          let lstTamplates = [ this.colNumber,this.colRank,this.colInformation,this.colMajor,this.colAction];

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
          //console.log('res data>>>>>', res);

          /**
           * @param resMoreDatas calling when scroll loading work
           * @param isLoadMore if true store load more data in resMoreData else store res data in data to concat record when scroll to load more datas
           */
          let resMoreDatas: any[] = [];
          this.isLoadMore ? resMoreDatas = res.data : this.data = res.data;

          //if isLoadMore true concat data in data to display in table
          if (this.isLoadMore) {
              let oldDatas: any[] = this.data;
              this.data = [];
              this.data = oldDatas.concat(resMoreDatas);
          }

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
  

