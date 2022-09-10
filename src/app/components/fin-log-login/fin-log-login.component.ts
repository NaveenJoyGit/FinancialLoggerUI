import { Component, OnInit } from '@angular/core';
import { FinancialLoggerUser } from 'src/app/models/FinancialUser';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
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
  loginForm!: FormGroup

  user: FinancialLoggerUser = {
    username: '',
    password: ''
  };

  constructor(private authService: UserAuthService, 
    private tokenService: TokenStorageService, private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.intializeStyle();
    if(this.tokenService.getToken()) {
        this.isLoggedIn = true;
        this.router.navigateByUrl('/home')
    }
    

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    console.log(this.loginForm.valid);
    

  }
  
  intializeStyle() {
    this.cardStyle = 
    {
      width: '60%',
      height: '60vh',
      margin: '2em auto'
    }
  }

  get username() {
    return this.loginForm.controls['username'].value;
  }

  get password() {
    return this.loginForm.controls['password'].value;
  }

  login(form:any) {
    console.log('login btn clicked');
    
    this.user.username = this.username
    this.user.password = this.password;
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
    this.router.navigateByUrl('/home');
  }
 
}
