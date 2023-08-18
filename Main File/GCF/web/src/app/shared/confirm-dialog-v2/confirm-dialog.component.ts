import { Component, Inject, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogEditionComponent implements OnInit {
    // @Input() template: 'delete' | 'update' | 'confirm' = 'delete';
    template: 'delete' | 'update' | 'confirm' | 'concern';
    agree: boolean;
    concernName: string;
    title = 'Angular-Confirmdialog';
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        if (data && data.template) {
            this.template = data.template;
            this.concernName = data.concernName;
        }
    }

    ngOnInit(): void { }
}
