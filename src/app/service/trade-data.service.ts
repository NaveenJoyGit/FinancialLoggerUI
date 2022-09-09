import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Constants } from '../models/Constants'
import { CommonResponse, ViewTrades } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class TradeDataService {

  constructor(private http: HttpClient) { }

  viewTrade(): Observable<CommonResponse<ViewTrades[]>> {
    return this.http.get<CommonResponse<ViewTrades[]>>(Constants.VIEW_TRADE_API);
  }
}
