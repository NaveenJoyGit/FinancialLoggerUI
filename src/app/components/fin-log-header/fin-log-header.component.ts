import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-fin-log-header',
  templateUrl: './fin-log-header.component.html',
  styleUrls: ['./fin-log-header.component.scss']
})
export class FinLogHeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService : UserAuthService, private router : Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
