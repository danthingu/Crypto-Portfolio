import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  coinRank = new CoinRank();
  constructor() { }

  ngOnInit() {
  }

  onProfitSelectionChange(entry): void {
    if (this.coinRank.top10) { console.log('1: ' + this.coinRank.top10); }
    if (this.coinRank.top25) { console.log('2: ' + this.coinRank.top25); }
    if (this.coinRank.top100) { console.log('3: ' + this.coinRank.top100); }
  }


}

export class CoinRank {
  top10: boolean;
  top25: boolean;
  top100: boolean;
}
