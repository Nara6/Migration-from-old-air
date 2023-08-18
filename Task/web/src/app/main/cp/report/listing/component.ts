// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

// ===================================================================>> Third Library
import { MatSort, MatDialog, MatSnackBar, MatDatepicker } from '@angular/material';
import { DatePipe } from '@angular/common';
import * as _moment from 'moment';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

const moment = _moment;
export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'DD-MM-YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };
// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';

import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm.component';
import { FunctionService } from '../../../../helper/function.service';
import { environment as env } from '../../../../../environments/environment';
import { ViewReceiptDialogComponent } from './view/component'; 
import { FormControl } from '@angular/forms';

@Component({
    templateUrl  : './template.html',
    styleUrls: ['../../../../../assets/custom.scss', './style.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations,
    providers: [DatePipe,
      {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
      {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
      {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],

})

export class ListingComponent implements OnInit
{
  public status_date:number        = 0; 
  public type_print:number          = 0; 
  public receipt_number:string          = '';
  public status:number        = 0;
  public from:any;
  public to:any;

  constructor(

    private _service: Service,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _route: Router, 
    public fs: FunctionService,
    private datePipe:DatePipe,


  ){}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void
  {
      
  }
  
  date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: _moment.Moment, datepicker: MatDatepicker<_moment.Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    // datepicker.close();
    
  }

  printing() {

    let token = localStorage.getItem('temp-token');
    let params:any={} 
    
    params.receipt_number = this.receipt_number; 
     
      
      params.status_id = this.status; 
      

      if(this.from && this.to){
        params.from =  this.datePipe.transform(this.from, 'yyyy-MM-dd'),
        params.to =  this.datePipe.transform(this.to, 'yyyy-MM-dd')
      }
      else{
        params.from = '',
        params.to   = ''
      };

    if(this.type_print == 0){

      window.open(env.apiUrl + '/cp/sales/printing?'+'&from='+params.from+'&to='+params.to+'&status_id='+params.status_id+'&receipt_number='+params.receipt_number+'&token='+token)
    
    }else if(this.type_print == 2){
      
      window.open(env.apiUrl + '/cp/totals/printing?'+'&token='+token)

    }

    
    
    
  }

}

