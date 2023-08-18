// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

// ===================================================================>> Third Library
import { MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';

// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';

import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm.component';
import { FunctionService } from '../../../../helper/function.service';
import { environment as env } from '../../../../../environments/environment';
import { ViewReceiptDialogComponent } from './view/component';

@Component({
  templateUrl: './template.html',
  styleUrls: ['../../../../../assets/custom.scss', './style.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DatePipe],

})
export class ListingComponent implements OnInit {

  public receipt_number: string = '';
  public status: number = 0;
  public from: any;
  public to: any;
  public data: any[] = [];
  public total: number = 10;
  limit: number = 10;
  page: number = 1;
  public isSearching:boolean = false;

  constructor(

    private _service: Service,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _route: Router,
    public fs: FunctionService,
    private datePipe: DatePipe,


  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.listing();
    //this.confirmCreate(); 

  }

  viewReceipt(row: any = null): void {

    const dialogRef = this._dialog.open(ViewReceiptDialogComponent, { data: row });
    dialogRef.afterClosed().subscribe((result) => {

      //console.log(result); 

      if (result) {

        // this.listing(); 
      }

    });

  }

  printOrderPDF(row: any = null) {

    let token = localStorage.getItem('temp-token');
    let w = window.open('about:blank');

    w.document.body.appendChild(w.document.createElement('iframe')).src = env.apiUrl + '/print-pdf/order-invoice?receipt_number=' + row.receipt_number + '&token=' + token;
    //    console.log(w);
    w.document.getElementsByTagName("iframe")[0].style.width = '100%';
    w.document.getElementsByTagName("iframe")[0].style.height = '100%';
    w.focus();

  }


  onDelete(row: any = null) {

    //console.log(row);
    const dialogRef = this._dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      //console.log(result); 
      if (result) {

        this._service.delete(row.id).subscribe((res) => {

          if (res.status == 'success') {
            this.listing();
            this._snackBar.open(res.message, 'សារ', { verticalPosition: "bottom", horizontalPosition: "right", duration: 5000, panelClass: ['green-snackbar'] });
          }
        });
      }
    });

  }

  listing() {

    this.isSearching = true;
    let params: any = {
      limit: this.limit,
      page: this.page
    }

    if (this.status != 0) {
      params.status_id = this.status;
    }

    if (this.receipt_number != '') {
      params.receipt_number = this.receipt_number;
    }

    if (this.from && this.to) {
      params.from = this.datePipe.transform(this.from, 'yyyy-MM-dd'),
        params.to = this.datePipe.transform(this.to, 'yyyy-MM-dd')
    }

    this._service.listing(params).subscribe(res => {

      this.isSearching = false;
      //this.viewReceipt(this.data[0]); 
      this.data = res.data;
      this.total = res.total;
      this.page = res.current_page;
      this.limit = res.per_page;
    })

  }

  //============================== Paginator Event -->

  onPageChanged(event) {
    if (event && event.pageSize) {
      this.limit = event.pageSize;
      this.page = event.pageIndex + 1;

      let param: any = {
        limit: this.limit,
        page: this.page,
      }
      this._service.listing(param).subscribe(res => {
        this.isSearching = false;
        this.data = res.data;
        this.total = res.total;
        this.page = res.current_page;
        this.limit = res.per_page;
      });
    }
  }

  printingSale() {
    let token = localStorage.getItem('temp-token');
    let params: any = {}

    params.receipt_number = this.receipt_number;


    params.status_id = this.status;


    if (this.from && this.to) {
      params.from = this.datePipe.transform(this.from, 'yyyy-MM-dd'),
        params.to = this.datePipe.transform(this.to, 'yyyy-MM-dd')
    }
    else {
      params.from = '',
        params.to = ''
    };

    window.open(env.apiUrl + '/cp/sales/printing?' + '&from=' + params.from + '&to=' + params.to + '&status_id=' + params.status_id + '&receipt_number=' + params.receipt_number + '&token=' + token)
  }


  b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);

      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });

    return blob;
  }

  invoicePayment(row: any = null, i:number = -1) {


    //let dialog = this._dialog.open(this.waitingTemplate, { disableClose: true });
    this.data[i].is_printing = true;

    this._service.generateDocument(row.receipt_number).subscribe(

      //=====================================>> Success
      res => {


        //dialog.close();
        
        let a = this.b64toBlob(res.file_base64, 'application/pdf', '');
        var blobUrl = URL.createObjectURL(a);
        window.open(blobUrl);
        this.data[i].is_printing = false;
      },

      //=====================================>> Error
      err => {
        //dialog.close();
        this.data[i].is_printing = false;
        this.isSearching = false;
        console.log(err);
      }

    )

  }

}

