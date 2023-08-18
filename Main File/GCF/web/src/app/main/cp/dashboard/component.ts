import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Service } from './service';

@Component({
    templateUrl  : './template.html',
   // styleUrls: ['../../../../../../assets/custom.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class DashboardListingComponent implements OnInit
{
    public data:any       = null;
    public role:any = null;
    //for table component
    @ViewChild('colNumber',{static:true}) private colNumber:TemplateRef<any>;
    @ViewChild('colInformation',{static:true}) private colInformation:TemplateRef<any>;
    @ViewChild('colMajor',{static:true}) private colMajor:TemplateRef<any>;
    @ViewChild('colTime',{static:true}) private colTime:TemplateRef<any>;
    @ViewChild('colPayment',{static:true}) private colPayment:TemplateRef<any>;
    @ViewChild('colYear',{static:true}) private colYear:TemplateRef<any>;
    @ViewChild('colStatus',{static:true}) private colStatus:TemplateRef<any>;
    @ViewChild('colAction',{static:true}) private colAction:TemplateRef<any>;
    
    lstColumnTableNames = ['លេខដាក់ពាក្យ','ព័ត៌មាននិស្សិត','ជំនាញសិក្សា','ក្រេឌីត','តម្លៃសិក្សា', 'ឆ្នាំ​សិក្សា','ស្ថានភាព','សកម្មភាព'];
    columnTableInfo:any=[];

    /**
   * Constructor
   *
   * @param {FuseSplashScreenService} _fuseSplashScreenService
   * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
   * @param {TranslateService} _translateService
   */
    constructor(

        private _service: Service 

    ){}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit(): void
    {
    //    this.listing(); 
    this.role = localStorage.getItem('slug');
    //console.log(this.role)
    }

    // listing() {
        
    //     this._service.listing().subscribe(res => {
            
    //         this.data = res.data;
             
    //     })
       
    // }

    

}

