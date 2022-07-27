import { Component, OnInit } from '@angular/core';
import { FinancialLoggerUser } from 'src/app/models/FinancialUser';
import { FormGroup, FormControl } from '@angular/forms'
import { UserAuthService } from 'src/app/service/user-auth.service';
import { first } from 'rxjs';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin-log-login',
  templateUrl: './fin-log-login.component.html',
  styleUrls: ['./fin-log-login.component.scss']
})
export class FinLogLoginComponent implements OnInit {

  isLoggedIn: boolean = false;

  cardStyle: any;
  text:any;
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  user: FinancialLoggerUser = {
    username: '',
    password: ''
  };

  constructor(private authService: UserAuthService, 
    private tokenService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.intializeStyle();
    if(this.tokenService.getToken()) {
        this.isLoggedIn = true;
        this.router.navigateByUrl('/home')
    }
  }
  
  intializeStyle() {
    this.cardStyle = 
    {
      width: '60%',
      height: '60vh',
      margin: '2em auto'
    }
  }

  login(form:any) {
    this.user.username = form.username;
    this.user.password = form.password;
    this.authService.login(this.user).pipe(first())
    .subscribe(
      {
        next: (res) => this.successfullLogin(res),
        error: (error) => console.log(error)
      }
    )
  }

  successfullLogin(response:any) {
    this.tokenService.saveToken(response.responseData);
    console.log(response)
    this.router.navigateByUrl('/home');
  }
 
}
