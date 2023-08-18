import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TableColumnService {

  constructor(        private _translateService: TranslateService,) { }

  /**
   * 
   * @param lstColumnNames array table column name
   * @param lstTemplate array template to display in table
   * @returns array table back to display in table
   */
  createColumnTable(lstColumnNames:any=[], lstTemplate:any=[] ,){

      let tableColumns:any=[];
      
      if(lstColumnNames && lstColumnNames.length){
          lstColumnNames.forEach((colName,index)=> {
                let column = {
                    key: index,
                    label:colName ? colName : '',
                    name:colName ? colName : '',
                    
                    template: lstTemplate && lstTemplate.length ? this.mapTemplate(index,lstTemplate) : ''
                }
                tableColumns.push(column);
          });
      }

      return tableColumns;
  }

  /**
   * 
   * @param index index column map with template
   * @param lstTemplate array template to create map with column
   * @returns template back to column
   */
  mapTemplate(index:number,lstTemplate:any=[]){

      let mapTemplate:any={};

      if(lstTemplate && lstTemplate.length){
          lstTemplate.forEach((template,index)=> {
              if(!mapTemplate[index]){
                mapTemplate[index] = {}
              }
              mapTemplate[index] = template;
          });
      }

      return mapTemplate[index];
  }

}
