import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
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


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DateComponent implements OnInit, OnChanges{
  
  @Input() code:string = '';
  @Input() title:string = '';
  @Input() icon:string = '';
  @Input() mode:string = 'EDIT';
  @Input() userAction:any = null;
  @Input() commentColor:string = 'red';
  @Input() roleId:any = null; 
  @Output() getOutput: EventEmitter<any> = new EventEmitter();
  @Input() value:any = false; 
  @Input() comment:any = null; 
  @Input() field:string = ''; 
  @Input() from:string = ''; 

  public form: FormGroup;
  public formatValue:string = ''; 
   
    
    constructor(
    
      public _dialog: MatDialog,
      private _formBuilder: FormBuilder,
  

    ) { 
    }
 
    ngOnInit(): void {
    
    } 
  
    ngOnChanges(){
      
      //console.log(this.from, this.mode, this.title, this.value);
  
      this.form = this._formBuilder.group({
        control      : this.value ? this.value : ''
      });
    
      this.formatValue = moment(this.form.get('control').value ? this.form.get('control').value : moment()).format('DD-MM-YYYY'); 
  
      
    }
    
    ngAfterViewInit(){
      
    }
  
    getValue(){
      this.form.markAllAsTouched(); 
  
      return { valid:this.form.valid, value: moment(this.form.get('control').value).format('YYYY-MM-DD') }; 
    }
  

}

