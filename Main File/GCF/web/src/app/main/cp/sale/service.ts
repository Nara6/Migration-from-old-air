import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

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

    //==================================================================================>> Listing
    listInvoice(params): Observable<any> {

        const httpOptions = {};
        httpOptions['params'] = params;
    
        return this.http.get<any>('/cp/dashboard/stundy-officer/applications', httpOptions);
        
    }

     //==================================================================================>> Listing
     Invoice(param_from_component): Observable<any> {
        const httpOptions = {};
        let params = new HttpParams();
        params = param_from_component;
        httpOptions['params'] = params;
        return this.http.get<any>('/cp/dashboard/finance-officer/invoices', httpOptions);
    }

     //==================================================================================>> Listing
    // Invoice(params): Observable<any> {

    //     const httpOptions = {};
    //     httpOptions['params'] = params;
    
    //     return this.http.get<any>('/cp/dashboard/invoices', httpOptions);
        
    // }
   //==================================================================================>> Listing
   getInvoices(id:string = ''): Observable<any> {

    const httpOptions = {};

    return this.http.get<any>('/cp/sales/'+id, httpOptions);
  }
 //====================================================================================>> Admin Top up Action
 payment(body:object): Observable<any> {
    return this.http
        .post('/cp/sales/action', body, this.httpOptions)
        .pipe(
            tap(_ => {}),
            catchError(this.handleError<any>('', []))
        ); 
}

listing(params): Observable<any> {

    const httpOptions = {};
    httpOptions['params'] = params;

    return this.http.get<any>('/cp/sales', httpOptions);
    
}

 //==================================================================================>> GetSetup
 getStatus(): Observable<any> {
    return this.http.get<any>('/cp/dashboard/get-status');
}


}
