import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: 'template.html',
})

export class ViewRoomDialogComponent implements OnInit{

  public isSaving:boolean  = false; 
  public dataHasChanged:boolean = false; 
  constructor(
    public _dialogRef: MatDialogRef<ViewRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
  ){ 
  
  }
  
 // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
     ngOnInit(): void
     {
       console.log(this.data)
     }
 
   
 
 }
 
 