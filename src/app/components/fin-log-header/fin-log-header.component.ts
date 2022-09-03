import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-fin-log-header',
  templateUrl: './fin-log-header.component.html',
  styleUrls: ['./fin-log-header.component.scss']
})
export class FinLogHeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: UserAuthService, private router: Router) { }

  ngOnInit(): void {

    // User authenticatio subscription to change menu headers
    this.authService.loginSubscription$
     .subscribe({
        next: data => {
          if(data !== 'loggedOut') {
            console.log(data)
            console.log('sucess');
            this.isLoggedIn = true
          } else {
            console.log('What is the data now?? I am curiuous');
            console.log(data)
            this.isLoggedIn = false;
          }
        },
        error: err => {
          console.log(err)
          console.log('fails');

          this.isLoggedIn = false
        }
      })
  }

  logout() {
    console.log('Logout method called...')
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
