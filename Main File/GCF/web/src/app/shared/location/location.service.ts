import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
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

    // =========================================================================================================Get Districts
    setupDistricts(provinceId:any): Observable<any> {
        return this.http
            .get<any>('/location/provinces/'+provinceId+'/districts')
            .pipe(
                tap(_ => { }),
                catchError(this.handleError<any>('setupDistricts', []))
            );
    }

    // ===============================================================================================================Get Communes
    setupCommunes(provinceId:any,districtId:any): Observable<any> {
        return this.http
            .get<any>('/location/provinces/'+provinceId+'/districts/'+districtId+'/communes')
            .pipe(
                tap(_ => { }),
                catchError(this.handleError<any>('setupCommunes', []))
            );
    }

     // ==================================================================================================================Get Villages
    setupVillages(provinceId:any, districtId:any, communeId:any): Observable<any> {
        return this.http
            .get<any>('/location/provinces/'+provinceId+'/districts/'+districtId+'/communes/'+communeId+'/villages')
            .pipe(
                tap(_ => { }),
                catchError(this.handleError<any>('setupCommunes', []))
            );
    }

   
}
