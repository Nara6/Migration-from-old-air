import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

import { FuseConfigService } from '@fuse/services/config.service';
import { navigation } from 'app/navigation/navigation';
import { LoadMoreService } from 'app/shared/services/load-more.service';
import { SearchService } from 'app/shared/services/search.service';

@Component({
    selector     : 'vertical-layout-1',
    templateUrl  : './layout-1.component.html',
    styleUrls    : ['./layout-1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class VerticalLayout1Component implements OnInit, OnDestroy
{
    fuseConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;
    private authUrl: boolean;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _loadMoreService: LoadMoreService,
        private _searchService:SearchService,
        private router: Router,

    )
    {
        // Set the defaults
        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();

        this._searchService.scrollTopCallOut.subscribe((value:number)=>{

        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });

            this.router.events.subscribe(
                (event: any) => {
                    if (event instanceof NavigationEnd) {
                        const url = this.router.url;
        
                        const lastEqualSignIndex = url.lastIndexOf('/');
                        const urlPart = url.substr(lastEqualSignIndex + 1)
        
                        // console.log('urlPart',urlPart);
        
                        urlPart == 'login' || urlPart == 'forgot-password' || urlPart == 'verify-code-2' ||
                        urlPart == 'change-password-2' || urlPart == 'register' || urlPart == 'verify-account-2'
                        urlPart == 'invoice' || urlPart == 'certificate' ? this.authUrl = true : this.authUrl = false;
        
                        // console.log('authUrl', this.authUrl);
        
                    }
                }
            );
    }
    
     /**
     * On destroy
     */
      ngOnDestroy(): void
      {
          // Unsubscribe from all subscriptions
          this._unsubscribeAll.next();
          this._unsubscribeAll.complete();
      }
      
    /**
     * user scroll to bottom load more data to display in table
     * @param event scroll event 
     */
     public handleScroll(event) {

        // console.log('event',event);

        if (this._loadMoreService.loadMore) {
            if (event && event.isReachingBottom) {
                if (event.originalEvent.target.offsetHeight + event.originalEvent.target.scrollTop >= (event.originalEvent.target.scrollHeight - 2)) {
                    this._loadMoreService.loadFuncCallOut(event);
                }
            }
        }

     
    }
}
