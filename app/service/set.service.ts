import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Set } from '../model/set';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SetService {
    constructor(private http: Http) { }

    private url = 'app/sets';  // URL to web api

    getSets() {
        return this.http.get(this.url)
            .map(res => res.json().data)
            .catch(this.handleError);
    }
    getSet(id: number) {
        return this.http.get(this.url + '/' + id)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    addSet(name: string) {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    updateSet(set: Set) {
        let body = JSON.stringify({ id: set.id, name: set.name, word: set.word });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.url + '/' + set.id, body, options)
            .map(res => { })
            .catch(this.handleError)
    }

    private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}