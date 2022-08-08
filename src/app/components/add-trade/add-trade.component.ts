import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { CustomValidatorService } from 'src/app/service/custom-validator.service';
import { NseDataService } from 'src/app/service/nse-data.service';
import { StockNameValidator } from 'src/app/validators/stock-name-validator';

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
      stockName: ['', this.customValidator.stockNameValidator('stockName')],
      buyPrice: ['', Validators.required],
      buyQuantity: ['', Validators.required],
      tradeType: ['', Validators.required],
      tradeDescription: ['']
    })

  }

  
  onFormSubmit() {
    console.log(this.addTradeForm.get('stockName')?.valid)
    console.log('Form Submitted');
  }

}
