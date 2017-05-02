import { Injectable, Inject } from '@angular/core';
import {
    Http,
    Response,
    ResponseContentType,
    RequestMethod,
    RequestOptionsArgs,
    Headers
} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestService {
    private defaultHeaders = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http: Http) { }

    get<T>(resource: string = ''): Observable<T> {
        const requestOption: RequestOptionsArgs = {
            method: RequestMethod.Post,
            headers: this.defaultHeaders
        };

        return this.http.request(`/api${resource}`, requestOption)
            .map(this.extractData)
            .catch(this.handleError);
    }

    post<T>(resource: string, body: any): Observable<T> {
        const requestOption: RequestOptionsArgs = {
            method: RequestMethod.Post,
            headers: this.defaultHeaders,
            body: body
        };

        return this.http.request(`/api/${resource}`, requestOption)
            .map(this.extractData)
            .catch(this.handleError);
    }

    put<T>(resource: string, body: any): Observable<T> {
        const requestOption: RequestOptionsArgs = {
            method: RequestMethod.Put,
            headers: this.defaultHeaders,
            body: body
        };

        return this.http.request(`/api/${resource}`, requestOption)
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete<T>(resource: string, body: any): Observable<T> {
        const requestOption: RequestOptionsArgs = {
            method: RequestMethod.Delete,
            headers: this.defaultHeaders,
            body: body
        };

        return this.http.request(`/api/${resource}`, requestOption)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data: object;

        if (res.text() === '') {
            data = { };

        } else if (res.headers['Content-Type'] === 'application/json') {
            data = res.json();

        } else {
            data = { data: res.text() };
        }

        return data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;

        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }
}
