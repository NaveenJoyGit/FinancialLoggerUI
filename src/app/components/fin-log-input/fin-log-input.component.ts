import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-log-input',
  templateUrl: './fin-log-input.component.html',
  styleUrls: ['./fin-log-input.component.scss']
})
export class FinLogInputComponent implements OnInit {

  @Input() inputType: string = '';
 
  isTextInput: boolean = false;
  isRadioInput: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initializeInputType();
  }

  initializeInputType(): void {
    if(this.inputType == 'text') {
      this.isTextInput = true;
    } else if(this.inputType == 'radio') {
      this.isRadioInput = true;
    }
  }

}
