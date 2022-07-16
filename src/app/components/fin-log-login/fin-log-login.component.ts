import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-log-login',
  templateUrl: './fin-log-login.component.html',
  styleUrls: ['./fin-log-login.component.scss']
})
export class FinLogLoginComponent implements OnInit {

  cardStyle: any;

  constructor() { }

  ngOnInit(): void {
    this.intializeStyle();
  }
  
  intializeStyle() {
    this.cardStyle = 
    {
      width: '70%',
      height: '60vh',
      margin: '2em auto'
    }
  }

}
