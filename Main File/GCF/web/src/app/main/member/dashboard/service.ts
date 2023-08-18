import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class Service {
    getInfo() {
      throw new Error('Method not implemented.');
    }


    httpOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'withCredentials': 'true',
        })
    };

    constructor(private http: HttpClient) { }

    
    //==================================================================================>> Listing
    getPackage(): Observable<any> {
        const httpOptions = {};
        return this.http.get<any>('/member/orders/packages', httpOptions);
    }
    //==================================================================================================================>> delete
    cancel(number:string = ''): Observable<any> {
        return this.http.delete('/applications/'+number, this.httpOptions);
    }
  
    orderPackage(body:string): Observable<any> {
        return this.http.post('/member/orders', body);
    }
}
