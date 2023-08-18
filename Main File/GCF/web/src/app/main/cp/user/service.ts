import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class Service {
    addCourses(value: any) {
        throw new Error('Method not implemented.');
    }
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
        return this.http.get<any>('/cp/users', httpOptions); 
    }
    //==================================================================================>> List Student
    rank(param_from_component): Observable<any> {
        const httpOptions = {};
        let params = new HttpParams();
        params = param_from_component;
        httpOptions['params'] = params;
        return this.http.get<any>('/cp/products', httpOptions); 
    }

    //===========================================================================================================>> View Student
    view(id:number = 0): Observable<any> {
        return this.http.get<any>('/cp/members/'+id); 
    }
    //===========================================================================================================>> View Student
    updateProduct(id:number = 0, data:any){
        return this.http.put<any>('/cp/products/'+id+'?_method=PUT', data);
    }

    //===========================================================================================================>> Delete Student
    delete(id:number = 0): Observable<any> {
        return this.http
            .delete('/cp/products/'+id, this.httpOptions);
    }

     //===========================================================================================================>> Edit Staff
    editStudent(id:number = 0 , body: object): Observable<any> {
        return this.http
            .put('/cp/students/'+id, body, this.httpOptions)
            .pipe(
                tap(_ => console.log('updating data')),
                catchError(this.handleError<any>('Cannot update profile', []))
            );
        }

    //===========================================================================================================>> Get Setup date
    setupType(): Observable<any> {
        return this.http
            .get<any>('/cp/students/setup')
            .pipe( tap(_ => { }),catchError(this.handleError<any>('getProducts', [])));
    }

   //===========================================================================================================>> Get Setup date
    setupProvince(): Observable<any> {
    return this.http
        .get<any>('/cp/setups/location/provinces')
        .pipe(
            tap(_ => { }),
            catchError(this.handleError<any>('getProducts', []))
        );
    }
}
