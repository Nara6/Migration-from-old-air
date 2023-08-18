import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: 'template.html',
})

export class ViewDistrictDialogComponent implements OnInit{


  constructor(
    public _dialogRef: MatDialogRef<ViewDistrictDialogComponent>,
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
       
      //  console.log(this.data); 
        
        
     }
 
   
 
 }
 
 