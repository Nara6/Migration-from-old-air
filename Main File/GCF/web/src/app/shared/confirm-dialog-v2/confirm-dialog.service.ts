import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmDialogEditionComponent } from './confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {
    constructor(public dialog: MatDialog, private _route: Router) { }
   
 openDialog(message: string, template?: string): any {
        return this.dialog.open(ConfirmDialogEditionComponent, {
            width: '500px',
            panelClass: 'my-dialog',
            data: { message: message, template: template }
        });
    }
    openConcernDialog(concernName: string): any {
        return this.dialog.open(ConfirmDialogEditionComponent, {
            width: '500px',
            panelClass: 'my-dialog',
            data: { template: 'concern', concernName: concernName }
        });
    }
}
