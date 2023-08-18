// ===================================================================>> Core Library
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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


    //==================================================================================>> Listing
    listing(params:any = {}): Observable<any> {
        const httpOptions = {};
        httpOptions['params'] = params;
        return this.http.get<any>('/cp/users', httpOptions);
    }

    //=======================================================================>> Create
    create(data:object = {}): Observable<any> {
        return this.http.post('/cp/users', data, this.httpOptions);
    }

    //=======================================================================>> Update
    update(id:string = '', data:object = {}): Observable<any> {
        return this.http.post('/cp/users/'+id+ '?_method=PUT', data, this.httpOptions);
    }

    getType(): Observable<any> {

        return this.http.get<any>('/cp/get-type'); 
    }

    //=====================================================================================>> Delete
    delete(id:number = 0): Observable<any> {
        return this.http
            .delete<any>('/cp/users/'+id, this.httpOptions);
    }

    //==================================================================================================================>>  Get Staff
    view(id: string = ''): Observable<any> {
        return this.http.get<any>('/cp/users/' + id);
    }

    // ============= Change Password
    changePassword(id: number = 0, data: {}): Observable<any> {
        return this.http.post('/cp/users/'+id+'/change-password',data);
    }

}
