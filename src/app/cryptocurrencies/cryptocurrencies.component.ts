import { Component, OnInit, Input} from '@angular/core';
import { GrabCryptoServiceService } from '../service/grabCryptoService.service';
import { Coin } from '../_model/Coin';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Price } from '../_model/Price';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {
  coins: Coin;
  objectKeys = Object.keys;
  prices: Price[] = [];
  counter: number;
  flag: boolean;
  choosingCoinPrice1: number;
  obj: any = {key: false};

  @Input() oldCoinPrice: number;

  constructor(private grabCryptoService: GrabCryptoServiceService) {  }

  ngOnInit() {
    this.loadCoins();
    this.choosingCoinPrice1 = 0.0000000001;
    Observable.interval(10000).takeWhile(() => true).subscribe(() => this.loadCoins());
    this.counter = 0;
  }

  loadCoins() {
    this.grabCryptoService.getCoins().subscribe((coins: Coin) => {
      this.coins = coins;
      this.flag = !this.flag;
      console.log(this.flag);
      console.log('counter: ' + this.counter++);
      console.log('old coin price: ' + this.oldCoinPrice);
      // Object.entries(this.coins.data).forEach(
      //   ([key, value]) => console.log(key, value['name'])
      // );
      // Object.entries(this.coins.data).forEach(
      //    ([key, value]) => Object.entries(value['quotes']).forEach(
      //     ([key1, value1]) => console.log(key1, value1['price'])
      //    )
      // );
      Object.entries(this.coins.data).forEach(
          ([key, value]) => Object.entries(value['quotes']).forEach(
          ([key1, value1]) => this.prices.push(
              new Price(key, value1['price'])
          )
        )
      );
      // for (let i = 0; i < this.prices.length; i++) {
      //   console.log(this.prices[i]);
      // }
      Object.entries(this.coins.data).forEach((entry) => {
        const[key, value] = entry;
        Object.entries(value['quotes']).forEach((entry1) => {
          const[key1, value1] = entry1;
          const choosingCoinPrice = 1;
          if (this.prices.filter(i => i.id === key)[0].amount >= value1['price']) {
              console.log('here1');
              this.obj[key] = false;
          } else {
              console.log('here2');
              this.obj[key] = true;
          }
        });
      });
    }, error => {
      console.log('something wrong here');
    });
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => obj[key]);
  }

}
