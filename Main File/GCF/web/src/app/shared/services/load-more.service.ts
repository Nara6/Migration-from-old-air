import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadMoreService {

  loadMoreCallOut = new EventEmitter();
  filterCallOut = new EventEmitter();
  event = new EventEmitter();
  loadMore:boolean = false;

  constructor() { }

  loadFuncCallOut(event:any){
      this.loadMoreCallOut.emit(event);
  }

  filterFuncCallOut(event:any){
      this.filterCallOut.emit(event);
  }

  responseEvent(event){
      this.event.emit(event);
  }
  
}
