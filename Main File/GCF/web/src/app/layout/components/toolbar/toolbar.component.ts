import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { navigation } from 'app/navigation/navigation';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDialogService } from 'app/shared/confirm-dialog-v2/confirm-dialog.service';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationKhmer } from 'app/navigation/i18n/en';
import { UserService } from '../../../shared/services/index';
import { FunctionService } from '../../../../app/helper/function.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { ConfirmDialogComponent } from 'app/shared/confirm-dialog/confirm.component';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ToolbarComponent implements OnInit, OnDestroy {
    
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    selectedLanguage: any;
    userStatusOptions: any[];
    public panel:any;

    // Private
    private _unsubscribeAll: Subject<any>;
    name: any;
    avatar: any;
    role: any;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        public _fuseSidebarService: FuseSidebarService,
        private _translateService: TranslateService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _route: Router,
        private dialog: MatDialog, 
        private _userService: UserService,
        public fs: FunctionService,
        private _confirmDialog: ConfirmDialogService,

    ) {
        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon: 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon: 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon: 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon: 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id: 'kh',
                title: 'Khmer',
                flag: 'kh'
            },
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
            // {
            //     id: 'tr',
            //     title: 'Turkish',
            //     flag: 'tr'
            // }
           
        ];

        this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        // Add languages
        this._translateService.addLangs(['en', 'kh']);

        const lang = localStorage.getItem('lang');
        // Set the default language
        this._translateService.setDefaultLang(lang || 'kh');

        // Set the navigation translations
        this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationKhmer);

        // Use a language
        this._translateService.use(lang || 'kh');
        //console.log('Login Component constructor');
    


    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        
        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });
        // Set the navigation translations
        this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationKhmer);
        //console.log('Login Component ngOnInit');
        
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

       // Set the selected language from default languages
       this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });
        this.name = localStorage.getItem('name');
        this.role = localStorage.getItem('role');
        console.log(this.role);
        this.avatar = this.fs.imgUrl(localStorage.getItem('avatar'));
        // console.log(this.name)

        //Get User Subscribtion from UserService
        this._userService.get().subscribe(res=>{
        //   console.log(res); 
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     * @param value
     */
     search(value): void {
        // Do your search here...
    }

   /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        if (lang && localStorage.getItem('lang') === lang.id) {
            return;
        }
        this._confirmDialog.openDialog('តើអ្នកពិតជាចង់ផ្លាស់ប្តូរភាសាមែនទេ?', 'confirm').afterClosed().subscribe(result => {
            if (result) {

                // Set the selected language for the toolbar
                this.selectedLanguage = lang;
                // Store local storage for default lang
                localStorage.setItem('lang', lang.id);

                // Use the selected language for translations
                this._translateService.use(lang.id);
                window.location.reload();
            }
        });
    }

    onLogout() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.afterClosed().subscribe((result) => {
            if(result){
                localStorage.clear();
                this._route.navigateByUrl('/auth/login');
            }
        });
      
    }
}
