import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {

    constructor(private http: Http) {}

    /**
     * Send search query to server and return an Observable,
     * which can be used to trigger subsequent code once we have some
     * results to act on
     * @param   {string} query  the search query to pass to the server
     * @returns {Observable<any>}
     */
    search(query:string):Observable<any> {

        return this.http.get(`/ajax-user-search/${query}`)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     
    }

}
