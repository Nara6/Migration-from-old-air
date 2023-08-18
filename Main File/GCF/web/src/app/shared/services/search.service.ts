import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  textCallOut = new EventEmitter();
  scrollTopCallOut = new EventEmitter();

  constructor() { }

  callOut(text:any){
      this.textCallOut.emit(text);
  }

  setScrollTop(value:number){
      this.scrollTopCallOut.emit(value);
  }
  
}
