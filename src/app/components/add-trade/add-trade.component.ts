import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/validators/custom-validator.service';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.scss']
})
export class AddTradeComponent implements OnInit {

  addTradeForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private customValidator: CustomValidatorService, ) { }

  ngOnInit(): void {
    this.addTradeForm = this.formBuilder.group({
      stockName: ['', {
        validators: [Validators.required],
        asyncValidators: [this.customValidator.stockNameValidator('stockName')],
        updateOn: 'blur'
      }],
      buyPrice: ['', Validators.required],
      buyQuantity: ['', Validators.required],
      tradeType: ['', Validators.required],
      tradeDescription: ['']
    })

  }

  get stockName() {
    return this.addTradeForm.get('stockName')?.value;
  }

  onFormSubmit() {
    console.log(this.addTradeForm.get('stockName')?.valid)
    console.log('Form Submitted');
  }

}
