import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const NSE_STOCK_FETHC_API = '';

@Injectable({
  providedIn: 'root'
})
export class NseDataService {

  constructor(private http : HttpClient) { }

  getNSeStockData(stockSymbol:String): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/nse/" + stockSymbol);
  }

}
