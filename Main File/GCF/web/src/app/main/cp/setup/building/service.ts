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

    //==================================================================================>> Listing
    listing(params): Observable<any> {

        const httpOptions = {};
        //httpOptions['params'] = params;

        return this.http.get<any>('/cp/setups/building', httpOptions);
    }

    // create(data:any): Observable<any> {
    //     return this.http.post('/cp/expense', data);
    // }
    create(data: object): Observable<any> {
        return this.http
            .post('/cp/setups/building', data, this.httpOptions);
    }

    update(id:number = 0, data:any = {}): Observable<any> {
        return this.http.post('/cp/setups/building/'+id+'?_method=PUT', data, this.httpOptions);
    }

    delete(id:number = 0): Observable<any> {
        return this.http.delete('/cp/setups/building/'+id, this.httpOptions);
    }

   
    getStaffType(): Observable<any> {

        return this.http.get<any>('/cp/setups/building'); 
    }
    // Get Setup date
    setupType(): Observable<any> {
        return this.http
            .get<any>('/cp/setups/building')
            .pipe(
                tap(_ => { }),
                catchError(this.handleError<any>('getProducts', []))
            );
        }

    viewBuilding(id:string = ''): Observable<any> {
        const httpOptions = {};
        return this.http.get<any>('/cp/setups/building/'+id, httpOptions);
    }
}
