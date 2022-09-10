import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, of } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-fin-log-header',
  templateUrl: './fin-log-header.component.html',
  styleUrls: ['./fin-log-header.component.scss']
})
export class FinLogHeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private authService: UserAuthService, private router: Router,
    private jwtService: JwtHelperService, private tokenService: TokenStorageService) { }

  ngOnInit(): void {

    // User authenticatio subscription to change menu headers
    this.authService.loginSubscription$
     .subscribe({
        next: data => {
          if(data !== 'loggedOut') {
            this.populateHeaderBooleans(data);
          } else {
            this.unauthorizeHeaders();
          }
        },
        error: err => {
          this.isLoggedIn = false
        }
      })
  }

  populateHeaderBooleans(data: any) {
    let token = data.responseData;
    this.isLoggedIn = true;
    this.username = this.jwtService.decodeToken(token).sub;

  }

  unauthorizeHeaders() {
    this.isLoggedIn = false;
    this.username = '';
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
