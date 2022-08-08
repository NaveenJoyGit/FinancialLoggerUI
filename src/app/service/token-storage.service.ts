import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token-key';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  removeToken() {
    window.sessionStorage.removeItem(TOKEN_KEY);
  }
  

}
