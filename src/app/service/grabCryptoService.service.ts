import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from '../_model/Coin';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GrabCryptoServiceService {

    constructor(private http: HttpClient) { }

    baseUrl = 'https://api.coinmarketcap.com/v2/ticker/';

    getCoins() {
        return this.http.get<Coin>(this.baseUrl);
    }

    private handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');
        console.log('error');
        if (applicationError) {
            return Observable.throw(applicationError);
        }
        const serverError = error.json();
        let modelStateErrors = '';
        if (serverError) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        return Observable.throw(modelStateErrors || 'Server error');
    }
}
