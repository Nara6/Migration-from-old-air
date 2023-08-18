import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    //===========================================================================================================>> Listing
    listing(params): Observable<any> {
        const httpOptions = {};
        //httpOptions['params'] = params;
        return this.http.get<any>('/cp/study-program/courses', httpOptions);
    }
   
    //===========================================================================================================>> View Course
    viewCourse(id:number = 0, data:any): Observable<any> {
        const httpOptions = {};
        return this.http.get<any>('/cp/study-program/courses/'+id, data);
    }

    //==============================================================================================================>> Major Delete
    marjorDelete(id:number = 0): Observable<any> {
        return this.http
            .delete<any>('/cp/study-program/courses/'+id)
            .pipe( tap(_ => { }),
                catchError(this.handleError<any>('', []))
            );
    }

    //==============================================================================================================>> View Major
    viewMajor(id:string = ''): Observable<any> {
        const httpOptions = {};
        return this.http.get<any>('/cp/study-program/majors/'+id, httpOptions);
    }

    //==============================================================================================================>> Create Course
    addProducts(data:any){
        return this.http.post<any>('/cp/products', data);
    }

    //==============================================================================================================>> Major Delete
    updateCourse(id:number = 0, data:any){
        return this.http.put<any>('/cp/study-program/courses/'+id+'?_method=PUT', data);
    }

    // ==============================================================================================================>> Get Setup date
    setupType(id:number = 0): Observable<any> {
        return this.http
            .get<any>('/cp/courses/'+id+'/teachers/setup')
            .pipe( tap(_ => { }),catchError(this.handleError<any>('getProducts', []))
            );
    }

    // ======================================================================================================================>>  GET Course
    getCourses(id:number=0): Observable<any> {
        const httpOptions = {};
        return this.http.get<any>('/cp/stcourses/'+id+'/teachers/listing', httpOptions);
    }
    
    //==========================================================================================================================>>  Delete
    delete(id:number = 0): Observable<any> {
    return this.http
        .delete<any>('/cp/products/'+id)
        .pipe(
            tap(_ => { }),
            catchError(this.handleError<any>('', []))
        );
    }

    //==========================================================================================================================>>  Create Course
    addTeacherCourse(id:number=0, teacher_id:number, data:any){
        return this.http.post<any>('/cp/courses/'+id+ '/teachers/'+teacher_id, data);
    }
    
     //==========================================================================================================================>>  Remove Course
    removeProduct(id:number = 0, teacher_id:number = 0,data): Observable<any> {
        return this.http
        .delete('/cp/products/courses/'+id+'/teachers/'+teacher_id, data);
    }

    //===========================================================================================================>> Listing Teachers
    teacherlisting(data:any): Observable<any> {
       
        return this.http.get<any>('/cp/study-program/courses/teachers/listing', data);
    }

}
