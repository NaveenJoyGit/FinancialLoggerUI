import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';
import { AddTradeResponse } from '../models/model';
import { Constants } from '../models/constants'


@Injectable({
  providedIn: 'root'
})
export class NseDataService {

  private _tradeDataSubject: BehaviorSubject<any> = new BehaviorSubject([]);
  tradeDetails: Observable<any> = this._tradeDataSubject.asObservable().pipe(distinctUntilChanged())

  constructor(private http : HttpClient) { }

  getNSeStockData(stockSymbol:String): Observable<any> {
    let httpData = this.http.get(Constants.NSE_STOCK_FETHC_API + stockSymbol);
    this.saveSubject(httpData);
    return httpData;
  }

  saveSubject(httpData: Observable<any>) {
    httpData.subscribe({
      next: data => this._tradeDataSubject.next(data)
    })
  }

  addTrade(addTradeResponse: AddTradeResponse): Observable<any> {
    return this.http.post(Constants.ADD_TRADE_API, addTradeResponse);
  }

}
