import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FinancialLoggerUser } from '../models/FinancialUser';
import { BehaviorSubject, distinctUntilChanged, Observable, throwError } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { CommonResponse, SignUpFormResponse } from '../models/model';

const AUTH_API = 'http://localhost:8080/api/v1/authenticate';
const REGISTER_USER_API = 'http://localhost:8080/api/v1/sign-up'
const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _loginSubject: BehaviorSubject<any> = new BehaviorSubject('loggedOut');

  loginSubscription$: Observable<any> = this._loginSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private http: HttpClient, private tokenService: TokenStorageService) {
  }

  login(user: FinancialLoggerUser): Observable<any> {
    let httpData = this.http.post(AUTH_API, user, httpOptions);
    this.saveTokenSubject(httpData);
    return httpData;
  }

  registerUser(signUpResponse: SignUpFormResponse): Observable<CommonResponse<any>> {
    return this.http.post<CommonResponse<any>>(REGISTER_USER_API, signUpResponse, httpOptions);
  }

  saveTokenSubject(httpData: Observable<any>) {
    httpData.subscribe({
      // Emits successful login value for authenticated users
      next: data => this._loginSubject.next(data),
      error: err => console.log(err)
      
    })
  }

  logout() {
    this.tokenService.removeToken();
    // Emits a logged out string to subscribers implying the user is no longer authenticated
    this._loginSubject.next('loggedOut');
  }

}
