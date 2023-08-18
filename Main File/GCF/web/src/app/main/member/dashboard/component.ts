//===============================================================================================>Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

//===============================================================================================>Custom Library
import { fuseAnimations } from '@fuse/animations';
import { Service } from './service';
@Component({
    selector     : 'dashboard',
    templateUrl  : './template.html',
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class DashboardComponent implements OnInit
{
    public data:any  = null;
    public isLoading:boolean  = false; 
    public rank;
    /**
     * Constructor
     *
     */
    constructor(
        private _service: Service ,
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
      this.rank = localStorage.getItem('rank');


      //Todo:: Check only role student can access here.

    }


    //========================================================================================================>> function Listing
    // getData() {
    //   this._service.getInfo().subscribe(res => {
    //       this.data = res; 
    //       //console.log('data', this.data); 
    //   })
    // }

    //========================================================================================================>> function for Application Appling
    getApplyingOutput($event){
      // console.log($event); 
      this.data.application = $event; 
    }

    
    //========================================================================================================>> function for Applicable
    getAcademicResponse($event){

      this.data.status = 'applying';
      this.data.application = $event; 
      this.data.application.mode = 'editing';

      //console.log('data', this.data); 
      
    }

 
}

