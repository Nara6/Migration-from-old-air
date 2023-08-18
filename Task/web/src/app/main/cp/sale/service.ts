import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

   

    //==================================================================================>> Listing
    listing(params): Observable<any> {

        const httpOptions = {};
        httpOptions['params'] = params;

        return this.http.get<any>('/cp/sales', httpOptions);
    }

    delete(id:number = 0): Observable<any> {
        return this.http.delete('/cp/sales/'+id, this.httpOptions);
    }

    generateDocument(receipt_number:number = 0): Observable<any> {

        const httpOptions = {};
        return this.http.post<any>('/cp/invoice-payment?receipt_number='+receipt_number, httpOptions);

    }

   
}
