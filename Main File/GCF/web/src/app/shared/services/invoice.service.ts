import { Injectable, EventEmitter } from '@angular/core';
// import html2canvas from 'html2canvas';
// import jspdf from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  enableGetInvoice:boolean = false;
  passInvoice = new EventEmitter;
  invoice = new EventEmitter();
  message = new EventEmitter();
  contentPdf = new EventEmitter();

  constructor() { }

  generatePdf(contentName:string=''){
      let pdf = document.getElementById(contentName);
      return pdf;
  }
  
  passInvoiceDataFunc(data:any){
      this.passInvoice.emit(data);
  }

  download(status:string= ''){
      this.invoice.emit(status);
  }

  makeMessage(message:string=''){
      this.message.emit(message);
  }

  print(status:any=''){
      this.invoice.emit(status);
  }

  passContentPdf(data:any){
      this.contentPdf.emit(data);
  }

//   saveDownloadPdf(content:any,pdfType:string='',pdfName:string=''){
  // saveDownloadPdf(content:any){
  //       html2canvas(content).then(canvas=>{
  //           const contentPdfUrl = canvas.toDataURL('image/png');
  //           const pdf = new jspdf();
  //                 pdf.addImage(contentPdfUrl,'png',0,0,208,160);
  //               //   pdf.text("Hello world!", 10, 10);
  //                 console.log('pdf>>>><<<<',pdf);
  //                 pdf.save('mpwt.pdf');
  //       });
  // }
  
}
