import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Service } from '../../service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';

@Component({
  templateUrl: 'template.html',
})

export class ViewPackageDialogComponent implements OnInit{

  public form: FormGroup;
  @Input() teacher_course;
  @Input() id;
  @Input() teacher_id;

  public isLoading:boolean = false;
  public isSetting:boolean = false;
  public roles:any;
  public type: any;
  //public data:any;
  public isSaving:boolean  = false; 
  public dataHasChanged:boolean = false; 
  constructor(
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    public _service: Service,
    public _dialogRef: MatDialogRef<ViewPackageDialogComponent>,
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
      console.log(this.data); 
      this.isLoading = true;
      //this.getType();
      
        
        
     }
 
    
  //    removeRole(row){
      
  //     let data = {
      
  //         teacher: row.teacher_id
  //     };
  //     // console.log(data);
  //     this.isSetting = true;
  //     this._service.removeTeacher(this.id, row.teacher_id, data).subscribe(res =>{
  //         this._snackBar.open(res.message, 'Message',{verticalPosition:"bottom", horizontalPosition:"right", duration:5000, panelClass: ['green-snackbar']});
  //         this.isSetting = false;
  //         const position = this.teacher_course.findIndex(
  //             (item: any) => {
  //                 return item.course_id == row.course_id;
  //             }
  //         );
  //         this.teacher_course.splice(position, 1);
         
  //     }, err => {
  //       this.isLoading = false;

  //     }); 
      
  // }


  // addRoles(){
  //     const form = this._dialog.open(TeacherCreateDialogComponent, { data:this.id, disableClose:true});
  //     form.afterClosed().subscribe(res=>{
  //       if(!res){
            
  //       }
  //     })
  // }

//   getType(){
//     this._service.setupType().subscribe(res => {
//         this.type = res.teacher;
//     });
// }
 
 }
 
 