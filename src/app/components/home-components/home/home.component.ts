import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from 'src/app/service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private jwtService: JwtHelperService, 
    private tokenService: TokenStorageService) { }

  ngOnInit(): void {
    let token = this.tokenService.getToken();
    if(token == null){
     token = ''
     this.router.navigateByUrl('/login');
    }
    console.log('Decoded Token :');
      
    console.log(this.jwtService.decodeToken(token));
  }

  addTradeComponent() {
    this.router.navigateByUrl('/add-trade');
  }

  viewTradeComponent() {
    this.router.navigateByUrl('/view-trades')
  }

}
