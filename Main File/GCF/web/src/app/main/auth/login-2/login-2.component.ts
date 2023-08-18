//=========================================================>> Core Library
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

//=========================================================>> Third Library
import {MatSnackBar} from '@angular/material/snack-bar';


//=========================================================>> Custom Library
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

//=========================================================>>
import { AuthService } from '../auth.service';
@Component({
    selector: 'login-2',
    templateUrl: './login-2.component.html',
    styleUrls: ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Login2Component implements OnInit {

    public loginForm: FormGroup;
    public isLoading: Boolean = false; 
    public message: any = [];
    public panel :any;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _authService: AuthService,
        private _route: Router, 
        private _snackBar: MatSnackBar
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };

        //console.log('Login Component constructor');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    
    ngOnInit(): void {

        if(localStorage.getItem('temp-token')){
           
            if(localStorage.getItem('panel') == 'Admin'){
                this._route.navigate(['cp/dashboard']);

            }else if(localStorage.getItem('panel') == 'Member'){
                this._route.navigate(['/dashboard']);

            }
        }

        this._buildForm();
    }

    onLogin() {

        this.isLoading = true; 
        
        this._authService.login(this.loginForm.value).subscribe(

            //===================================================>> 2**, 3**
            res => {

                localStorage.removeItem('hasReload');
                localStorage.setItem('temp-token', res.token);
                localStorage.setItem('name', res.user.name);
                localStorage.setItem('avatar', res.avatar);
                localStorage.setItem('panel', res.slug);
                localStorage.setItem('role', res.role);
                localStorage.setItem('rank', res.rank);

              //  console.log(res.slug);
                this.isLoading = false; 
                this._snackBar.open('Successful Login!', 'Close', {duration: 5000, panelClass: ['green-bg']});
               window.location.reload();
                //this._route.navigateByUrl('/cp/dashboard');
            }, 

            //===================================================>> 4**, 5**    
            err => {
                this.isLoading = false; 
                this._snackBar.open(err.error.message, 'Close', {duration: 5000, panelClass: ['red-bg']});
            }

        );
    }

    private _buildForm() {

        this.loginForm = new FormGroup({
            username: new FormControl('', [ Validators.required,]),
            password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]),
            //type: new FormControl('portal')
        });
    
    }
}