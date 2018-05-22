import { Component, OnInit } from '@angular/core';
import { TransferServiceService } from '../service/transferService.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  coinRank = new CoinRank();
  constructor(private transferService: TransferServiceService) { }

  ngOnInit() {
  }

  onProfitSelectionChange(entry): void {
    console.log('entry: ' + entry);
    if (entry === 10) {
      this.transferService.setData(10);
      console.log('1: ' + this.coinRank.top10);
    } else if (entry === 25) {
      this.transferService.setData(25);
      console.log('2: ' + this.coinRank.top25);
    } else if (entry === 100) {
      this.transferService.setData(100);
      console.log('3: ' + this.coinRank.top100);
    }

  }


}

export class CoinRank {
  top10: boolean;
  top25: boolean;
  top100: boolean;
}
