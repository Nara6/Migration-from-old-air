// ================================================================================================>> Core Library
import { Component, OnInit, ViewEncapsulation, Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
// ================================================================================================>> Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FunctionServices } from 'app/shared/function/function.service';
import { ConfirmDialogComponent } from '../../../../shared/confirm-dialog/confirm.component';

// ===============================================================================================>> Third Library
import {  MatDialog, MatSnackBar } from '@angular/material';

@Component({
    selector: 'info-selector',
    templateUrl  : './template.html',
    styleUrls    : ['./../style.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class InfoSelectorComponent implements OnInit
{
    @Input() data:any = null; 
    @Output() response: EventEmitter<any> = new EventEmitter();
    public src: string = 'assets/mpwt/person-placeholder.jpg';
    public total:number=10;
    public page: number=1;
    public limit: number=10;
    public isLoading:boolean=false;
    public isEditMode:boolean=false;
    
    constructor(
      public fs:FunctionServices,
      private _service: Service,
      private _activatedRoute: ActivatedRoute, 
      private _router: Router,
      private _snackBar: MatSnackBar,
      private _dialog: MatDialog,
    ){}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void    {
     //console.log(this.data); 
     if(this.data){
      this.src = this.fs.imgUrl(this.data.student.image);
  }
    }
    //=======================================================================================================>> Function Edit Application
    edit(){
      this.isEditMode = true;
    }

    //=======================================================================================================>> Function Print Application
    printApplication(){
      window.open('#/printing/application/'+this.data.meta.number+'/applications','_blank')
    }

    //=======================================================================================================>> Function Cencel Appling
    cancelApplying(){
      const dialogRef = this._dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result)=>{
          if(result){
              this._service.cancel(this.data.id).subscribe((res)=>{
                  if(res.status == 'success'){

                      this._snackBar.open(res.message,'សារ',{ verticalPosition:"bottom",horizontalPosition:"right",duration:5000,panelClass:['green-snackbar']});
                      this.data = res;
                      this.total = res.total;
                      this.page = res.current_page;
                      this.limit = res.per_page;
                  }
              }
              );
          }
      });
  }
    
 

}

   

  
  



