import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp, URLSearchParams } from '@angular/http';
import { Hero } from './hero';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HeroapiService {
    private heroapiUrl = '';

    constructor(private http: Http, private jsonp: Jsonp) {
        this.heroapiUrl = "http://localhost:5000/api/values/";
        //this.headers = new Headers();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Access-Control-Allow-Origin', '*');
    }

    getHeroes(): Observable<Hero[]> {

        let headers = new Headers({
            contentType: 'application/json',
            dataType: 'jsonp',
            /*Allow-Control-Allow-Origin: '*', 
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'content-type,accept'*/
        });

        let options = new RequestOptions({ headers: headers, method: 'GET' });

        console.log("getHeroes - start");
        let params = new URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        let callbackOptions = new RequestOptions({ search: params, method: 'GET' });
        return this.jsonp
            .get(this.heroapiUrl, callbackOptions)
            .map(response => response.json()[1])
            .catch((err: any) => {
                console.log(err);
                return Observable.throw(err.json().error || 'Server Error')
            });
    }

    search(term: string) {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';
        wikiUrl = 'http://localhost:62064/api/values/'
        let params = new URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        return this.jsonp
            .get(wikiUrl, { search: params })
            .map(response => <string[]>response.json()[1]);
    }

}