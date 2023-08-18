// ===================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// ===================================================================>> Third Library
import { MatDialog, MatSnackBar } from '@angular/material';

// ===================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { ConfirmDialogComponent } from 'app/shared/confirm-dialog/confirm.component';
import { environment } from '../../../../../environments/environment'; 
import { Service } from '../service';
import { ChangePasswordComponent } from './change-password-dialog/component'

@Component({
    templateUrl  : './template.html',
    styleUrls: ['./style.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ListingComponent implements OnInit
{
  // Declare variables to use in template or this class
  public data:any[]           = [];
  public isSearching:boolean  = false; // For Spinner for waiting API
  public key:string           = ''; // For connecting searching textbox in template then passing to api.
  public fileUrl:string       = environment.fileUrl; 

  constructor(
    // Variables to use in this class
    private _service: Service, // For API calling 
    private _dialog: MatDialog, // For popup dialog
    private _snackBar: MatSnackBar, // For showing a snackbar

    
  ){}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void
  {
    this.listing(); // Quickly to call api to display listing
  }

  //=====================================================>> Function List payment
  listing() {

    this.isSearching = true; // Display spinner
    let params:any   = {}; // Query parameter  
    
    // ===>> Filter by key for phone number or name 
    if(this.key != ""){ // Variable key take value from input in template
      params.key = this.key; 
    }

    // ===>> Calling API for listing 
    this._service.listing(params).subscribe(res => {
      this.isSearching = false; // Hide spinner on UI
      this.data        = res; // Assign response from api to variable data to display in UI
    });
    
  }

  onDelete(row:any = null){

    //console.log(row);
    const dialogRef = this._dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        
        this._service.delete(row.id).subscribe((res) => {
          
          //console.log(res); 

          if(res.status == 'success'){
              this.listing();
              this.data = res.data;
              this._snackBar.open(res.message, 'សារ',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
          }
        });
      }
    });

  }

  //==================================================>. Change Password
  changePassword(user:any = null){
    console.log(user);
    
    const dialog = this._dialog.open(ChangePasswordComponent, {
      disableClose: true,
      data: user,
    });
    dialog.afterClosed().subscribe((res) => {});
  }

}

   

  
  



