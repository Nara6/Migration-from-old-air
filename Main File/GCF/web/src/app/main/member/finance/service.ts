import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class Service {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'withCredentials': 'true',
        })
    };

    constructor(private http: HttpClient) { }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for product consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    //==================================================================================>> List Student
    list(param_from_component): Observable<any> {
        const httpOptions = {};
        let params = new HttpParams();
        params = param_from_component;
        httpOptions['params'] = params;
        return this.http.get<any>('/member/transactions/usd', httpOptions); 
    }
    //==================================================================================>> List Student
    rank(param_from_component): Observable<any> {
        const httpOptions = {};
        let params = new HttpParams();
        params = param_from_component;
        httpOptions['params'] = params;
        return this.http.get<any>('/cp/members/ranks/list', httpOptions); 
    }

    //===========================================================================================================>> View Student
    view(id:number = 0): Observable<any> {
        return this.http.get<any>('/cp/members/'+id); 
    }

    //===========================================================================================================>> Delete Student
    delete(id:number = 0): Observable<any> {
        return this.http
            .delete('/cp/students/'+id, this.httpOptions);
    }

     //===========================================================================================================>> Edit Staff
     updateMember(id:number = 0 , body: object): Observable<any> {
        return this.http
            .put('/cp/members/'+id, body, this.httpOptions)
            .pipe(
                tap(_ => console.log('updating data')),
                catchError(this.handleError<any>('Cannot update profile', []))
            );
        }

    changePasswordMember( id:string = "", body:object): Observable<any> {

        return this.http
        .put('/cp/members/'+id+'/change-password', body, this.httpOptions)
        .pipe(
        tap(_ => console.log('chage password member')),
        catchError(this.handleError<any>('Cannot change password member', []))
    );
    } 

    getRootNode(param_from_component): Observable<any> {
        const httpOptions = {};
        let params = new HttpParams();
        params = param_from_component;
        httpOptions['params'] = params;
        return this.http.get<any>('/member/network/root-node', httpOptions); 
    }
    getDownlineNode(param_from_component): Observable<any> {
        const httpOptions = {};
        let params = new HttpParams();
        params = param_from_component;
        httpOptions['params'] = params;
        return this.http.get<any>('/member/network/nodes', httpOptions); 
    }

}
