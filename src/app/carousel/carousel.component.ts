import { Component, OnInit } from '@angular/core';
import { GrabCryptoServiceService } from '../service/grabCryptoService.service';
import { Coin } from '../_model/Coin';
import { Price } from '../_model/Price';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    cars: Car[];
    coins: Coin;
    coinDatas: CoinDatas[] = [];
    msgs: Message[];

    constructor(private grabCryptoService: GrabCryptoServiceService) {
        this.loadCoins(9);
        this.msgs = [];
        this.cars = [
            {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
            {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
            {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
            {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
            {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
            {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
            {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
            {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
            {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
        ];
        //Observable.interval(4000).takeWhile(() => true).subscribe(() => this.loadCoins(10));
    }

    // selectCar(car: Car) {
    //     this.msgs = [];
    //     this.msgs.push({severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin});
    // }
    
    loadCoins(coinsNumber: any) {
      this.coinDatas = [];
      this.grabCryptoService.getCoins(9).subscribe((coins: Coin) => {
        this.coins = coins;
        Object.entries(this.coins.data).forEach(
          ([key, value]) => Object.entries(value['quotes']).forEach((entry) => {
            const[key1, value1] = entry;
            this.coinDatas.push({ name: <string>value['name'], price: <number>value1['price'] });
          })
        );
      }, error => {
        console.log('something wrong here carousel');
      });
    }



  ngOnInit() {
  }

}

export class Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}

export class Message {
  severity: string;
  summary: string;
  detail: string;
}

export class CoinDatas {
  name: string;
  price: number;
}
