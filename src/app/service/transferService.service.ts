import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransferServiceService {

    public newTransferData = new Subject<any>();
    constructor() {}

    private data;

    setData(data) {
        this.newTransferData.next(data);
    }

    getData()   {
        const temp = this.data;
        this.clearData();
        return temp;
    }

    clearData() {
        this.data = undefined;
    }

    getMessage(): Observable<any> {
        return this.newTransferData.asObservable();
    }

}
