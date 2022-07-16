import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-log-container-card',
  templateUrl: './fin-log-container-card.component.html',
  styleUrls: ['./fin-log-container-card.component.scss']
})
export class FinLogContainerCardComponent implements OnInit {

  @Input() styleObj: any;

  constructor() { }

  ngOnInit(): void {
  }

}
