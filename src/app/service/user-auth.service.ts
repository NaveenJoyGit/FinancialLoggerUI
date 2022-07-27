import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FinancialLoggerUser } from '../models/FinancialUser';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/v1/authenticate';
const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private tokenSubject: BehaviorSubject<FinancialLoggerUser>;
  public token: Observable<FinancialLoggerUser>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<any>(localStorage.getItem('token') || {});
    this.token = this.tokenSubject.asObservable();
  }

  public get retrieveToken(): FinancialLoggerUser  {
    return this.tokenSubject.value;
  }

  login(user: FinancialLoggerUser): Observable<any> {

    return this.http.post(AUTH_API, user, httpOptions);
  }

  logout() {
    localStorage.removeItem('token');
  }

}
