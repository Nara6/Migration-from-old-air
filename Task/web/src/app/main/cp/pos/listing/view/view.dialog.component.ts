import { Component, OnInit, Input, ViewEncapsulation, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { environment as env } from '../../../../../../environments/environment';
import { Service } from '../../service';
import { Inject } from '@angular/core';

@Component({
    selector     : 'admin-sale-view-dialog',
    templateUrl  : './view.dialog.component.html',
    styleUrls    : ['./view.dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ViewDialogComponent implements OnInit, AfterViewInit
{

    public isSearching: boolean = false;
    public isSaving:boolean = false;


    constructor(
        
        private _service: Service,
        public dialogRef: MatDialogRef<ViewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){
        console.log(data); 
    }

    ngAfterViewInit(): void {

    }


    ngOnInit(): void
    {
       
        
    }

    printOrderPDF(data:any = null){
        
        let token = localStorage.getItem('temp-token');
        let w  = window.open('about:blank');
    
        w.document.body.appendChild(w.document.createElement('iframe')).src = env.apiUrl+'/print-pdf/order-invoice?receipt_number=' + data.receipt_number + '&token='+token;
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
    
      invoicePayment(data: any = null) {
    
    
        this.isSaving = true; 
    
        this._service.generateDocument(data.receipt_number).subscribe(
    
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