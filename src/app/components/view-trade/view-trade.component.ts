import { Component, OnInit } from '@angular/core';
import { TradeDataService } from 'src/app/service/trade-data.service';
import { ViewTrades } from 'src/app/models/model';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  stockName: string,
  buyPrice: string,
  currentPrice: string,
  percentageChange: string,
  tradeStatus: string,
  tradeValue: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
  { stockName: 'TCS', buyPrice: 'Hydrogen', currentPrice: '1.0079', percentageChange: 'H', tradeStatus: 'HOLDING', tradeValue: '1234' },
];


@Component({
  selector: 'app-view-trade',
  templateUrl: './view-trade.component.html',
  styleUrls: ['./view-trade.component.scss']
})
export class ViewTradeComponent implements OnInit {

  viewTradeTable: ViewTrades[] = [];
  displayedColumns: string[] = ['stockName', 'buyPrice', 'currentPrice', 'profitOrLoss', 'tradeStatus', 'tradeValue'];
  datasource: any;

  constructor(private tradeService: TradeDataService) { }

  ngOnInit(): void {
    this.tradeService.viewTrade().subscribe({
      next: data => this.populateTableData(data.responseData),
      error: err => console.log(err)

    })
  }

  populateTableData(data: ViewTrades[]) {
    data.forEach(trade => {
      this.viewTradeTable.push(Object.assign({}, trade))
    })
    this.datasource = new MatTableDataSource(this.viewTradeTable);
  }

}
