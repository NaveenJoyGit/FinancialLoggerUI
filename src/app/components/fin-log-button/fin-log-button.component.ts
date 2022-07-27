import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fin-log-button',
  templateUrl: './fin-log-button.component.html',
  styleUrls: ['./fin-log-button.component.scss']
})
export class FinLogButtonComponent implements OnInit {

  @Output() clicked  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked() {
    this.clicked.emit();
  }

}
