import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Coin } from '../_model/Coin';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GrabCryptoServiceService {
    coinCollectionRef: AngularFirestoreCollection<Coin[]>;
    items$: Observable<Coin[]>;
    count: number;
    constructor(private http: HttpClient, private afs: AngularFirestore) {
        this.count = 0;
        this.coinCollectionRef = this.afs.collection('testing');
    }

    baseUrl = 'https://api.coinmarketcap.com/v2/ticker/?limit=';

    getCoins(numberOfCoins: number) {
        const coinmarketcapApi = `${this.baseUrl}${numberOfCoins}`;
        return this.http.get<Coin>(coinmarketcapApi);
    }

    saveCoins(Id: string, Name: string, Price: string) {
        this.coinCollectionRef.doc(new Date().toString() + Math.random() * 5000).set({
            id: Id,
            name: Name,
            price: Price
        }).catch((err) => {
            console.log('error yo: ' + err);
        });
        this.count++;
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
    sleep(milliseconds) {
        const start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
    }
}
