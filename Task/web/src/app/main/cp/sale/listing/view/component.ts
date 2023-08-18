import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

import { Service } from '../../service';

import { environment as env } from '../../../../../../environments/environment';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: 'template.html',
})

export class ViewReceiptDialogComponent implements OnInit{

  public isSearching: boolean = false;
  public isSaving:boolean = false;

  constructor(
    private _service: Service,
    public _dialogRef: MatDialogRef<ViewReceiptDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){ 
   //console.log(data); 
  }
  
  ngOnInit(){
    
  }

  printOrderPDF(data:any = null){
        
    let token = localStorage.getItem('temp-token');
    let w  = window.open('about:blank');

    w.document.body.appendChild(w.document.createElement('iframe')).src = env.apiUrl+'/print-pdf/order-invoice?receipt_number=' + data.receipt_number + '&token='+token;
    //    console.log(w);
    w.document.getElementsByTagName("iframe")[0].style.width = '100%';
    w.document.getElementsByTagName("iframe")[0].style.height = '100%';
    w.focus();

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

  invoicePayment(row: any = null) {

    this.isSaving = true; 

    this._service.generateDocument(row.receipt_number).subscribe(

      //=====================================>> Success
      res => {

        this.isSaving = false; 
        let a = this.b64toBlob(res.file_base64, 'application/pdf', '');
        var blobUrl = URL.createObjectURL(a);
        window.open(blobUrl);

      },

      //=====================================>> Error
      err => {
        this.isSaving = false; 
        this.isSearching = false;
        console.log(err);
      }

    )

  }


}
