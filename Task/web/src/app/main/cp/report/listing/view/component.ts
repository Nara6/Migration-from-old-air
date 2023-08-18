import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

import { environment as env } from '../../../../../../environments/environment';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: 'template.html',
})

export class ViewReceiptDialogComponent implements OnInit{



  constructor(
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


}
