// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

// ===================================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import jsreport from '@jsreport/browser-client';

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

  public isSearching:boolean = false; // Hide spinner

  public key: string = ''; // For connecting searching text box:receipt number in template then passing to api.
  public status: number = 0; // For connecting selecting text box in template then passing to api.
  public from: any; // For connecting date box in template then passing to api.
  public to: any; // For connecting date box in template then passing to api.
  public data: any[] = [];

  // ===> Pagination
  public total: number = 10; // Assign total = 10.
  limit: number = 10; // Assign limiting page = 10.
  page: number = 1; // Assign pageIndex = 1.

  public dataPrint: any;

  constructor(
    // Variables to use in this class
    private _service: Service, // For API calling 
    private _snackBar: MatSnackBar, // For showing a snackbar
    private _dialog: MatDialog, // For popup dialog
    public fs: FunctionService, // For formatting an image
    private datePipe: DatePipe, // Formatting date


  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.listing();
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

    w.document.body.appendChild(w.document.createElement('iframe')).src = env.apiUrl + '/print-pdf/order-invoice?key=' + row.key + '&token=' + token;
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

    let params: any = {
      limit: this.limit,
      page: this.page
    }

    if (this.key != '') {
      params.key = this.key;
    }

    if (this.status != 0) {
      params.status_id = this.status;
    }

    if (this.from && this.to) {
      params.from = this.datePipe.transform(this.from, 'yyyy-MM-dd'),
      params.to = this.datePipe.transform(this.to, 'yyyy-MM-dd')
    }

    this.isSearching = true; // Display spinner
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

  onPageChanged($event) {
    console.log($event);
    
    if ($event && $event.pageSize) {
      this.limit = $event.pageSize;
      this.page = $event.pageIndex + 1;

      let param: any = {
        limit: this.limit,
        page: this.page,
      }
      this._service.listing(param).subscribe(res => {
        this.data = res.data;
        this.total = res.total;
        this.page = res.current_page;
        this.limit = res.per_page;
      });
    }
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

    this._service.generateDocument(row.key).subscribe(

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

  printingSale(){

    let params:any={}      
    
    params.key = this.key;
    params.status_id = this.status;

    if (this.from && this.to) {
      params.from = this.datePipe.transform(this.from, 'yyyy-MM-dd'),
      params.to = this.datePipe.transform(this.to, 'yyyy-MM-dd')
    }
    else {
      params.from = '',
      params.to = ''
    };

    this._service.printingSale(params).subscribe(res => {
      this.dataPrint = res;   
      

      jsreport["serverUrl"] = 'http://localhost:1024/';
      jsreport.headers['Authorization'] = "Basic " + "YWRtaW46MTIzNDU2";
      let request:any = {

        "data":JSON.stringify(this.dataPrint),
        "template": { "name":"sales-main" },
      }
      
      jsreport.render(request).then(function(res) {

      // open output in the new window
        res.openInWindow();
        // res.download('myreport.pdf');
      }).catch(error => console.log(error));  
    
    })
  }

  printingInvoice(row: any = null, i:number = -1){
   
    this.data[i].is_printing = true;
    this._service.generateDocument(row.receipt_number).subscribe(res => {
      this.dataPrint = res;   
      jsreport["serverUrl"] = 'http://localhost:1024/';
      let request:any = {

        "data":JSON.stringify(this.dataPrint),
        "template": { "name":"invoice-main" },
      }
      
      jsreport.render(request).then(function(res) {

      // open output in the new window
        res.openInWindow();
        // res.download('myreport.pdf');
      }).catch(error => console.log(error));  
      this.data[i].is_printing = false;
    })
  }
}

