import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { Service } from '../service';

@Component({
    selector     : 'admin-dashboard',
    templateUrl  : './template.html',
    //styleUrls: ['../../../../../../assets/custom.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class AdminDashboardSelectorComponent implements OnInit
{
    

    public data:any       = null;
   
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
       this.listing(); 
    }

    listing() {
        
        // this._service.listing().subscribe(res => {
            
        //     this.data = res;
             
        // })
       
    }

    

}

