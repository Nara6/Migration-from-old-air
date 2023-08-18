import { Component } from '@angular/core';
import { MatDialogRef  } from '@angular/material';

// openDialog
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './confirm.component.html'
})
export class ConfirmDialogComponent{
  
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {

  }
  
}
