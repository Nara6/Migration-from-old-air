// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';
import { FunctionService } from '../../../../helper/function.service';
// ===================================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';
import { environment } from '../../../../../environments/environment';
import { DatePipe } from '@angular/common';
import * as _moment from 'moment';

const moment = _moment;
const datepipe: DatePipe = new DatePipe('en-US')
 import { ChangePasswordComponent } from './change-password/component'
@Component({
    templateUrl  : './template.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
{
  public fileUrl:string       = environment.fileUrl;
    public data:any[]= [];
    public isSearching:boolean  = false; 
    public key:string           = '';
    public from:any;
    public to:any;
    public limit:number        =10;
    public page:number         =1;
    constructor(

        private _service: Service,
        public fs: FunctionService,
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
    }

  //=========================================================================================>> Function List payment
    listing() {
      // console.log(this.filter);
      this.isSearching = true; 
      let params:any = { page:this.page, limit:this.limit }
          
        if(this.key != ""){
            params.key = this.key; 
        }
        if(this.from){
          params.from = moment(this.from).format('YYYY-MM-DD') ;
        }
        if(this.to){
          params.to = moment(this.to).format('YYYY-MM-DD') ;
        }
      this._service.listing(params).subscribe(res => {
        this.isSearching = false; 
        this.data = res.data;
      });
    }

      //==================================================>. Change Password
      changePassword(row){
        const form = this._dialog.open(ChangePasswordComponent, {
          disableClose: true,
          data: row,
        });
        form.afterClosed().subscribe((res) => {});
      }


}

   

  
  



