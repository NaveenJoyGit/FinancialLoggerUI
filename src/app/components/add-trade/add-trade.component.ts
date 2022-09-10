import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from 'src/app/validators/custom-validator.service';
import { AddTradeResponse } from 'src/app/models/model';
import { Router } from '@angular/router';
import { NseDataService } from 'src/app/service/nse-data.service';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { StockUtils } from 'src/app/helpers/StockUtils';

@Component({
  selector: 'app-add-trade',
  templateUrl: './add-trade.component.html',
  styleUrls: ['./add-trade.component.scss']
})
export class AddTradeComponent implements OnInit {

  addTradeForm!: FormGroup;
  addTradeResponse!: AddTradeResponse
  tradeTypes: any;
  subscription: Subscription = new Subscription();
  showError: boolean = false;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,
    private customValidator: CustomValidatorService,
    private router: Router,
    private tradeService: NseDataService) { }

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
      buyDate: [''],
      tradeDescription: ['']
    });

    this.tradeTypes = ['INTRADAY_BUY', 'INTRADAY_SELL',
      'SWING', 'FUTURES_BUY', 'FUTURES_SELL',
      'OPTIONS_BUY', 'OPTIONS_SELL']

    this.onStockNameChange();

  }

  onStockNameChange() {
    this.addTradeForm.valueChanges.subscribe({
      next: data => {
        const stockControl = this.addTradeForm.get('stockName');
        if (stockControl?.valid && this.buyPrice === '') {
          console.log('Now I can call trigger method...')
          this.triggerBuyPrice()
        }
      },
      error: err => console.log(err)
    }
    )
  }

  triggerBuyPrice() {
    this.tradeService.tradeDetails.pipe(distinctUntilChanged()).subscribe({
      next: data => {
        console.log(data)
        const currentPrice = StockUtils.parseAndReturnNumber(data.responseData.currentPrice)
        this.addTradeForm.get('buyPrice')?.setValue(currentPrice)
      },
      error: err => console.log(err)
    })
  }

  get buyPrice() {
    return this.addTradeForm.controls['buyPrice']?.value;
  }

  get buyQuantity() {
    return this.addTradeForm.controls['buyQuantity'].value;
  }

  get tradeType() {
    return this.addTradeForm.controls['tradeType'].value;
  }

  get tradeDescription() {
    return this.addTradeForm.controls['tradeDescription'].value;
  }

  get stockName() {
    return this.addTradeForm.controls['stockName'].value;
  }

  onFormSubmit() {
    this.sendResponse();
  }

  sendResponse() {
    this.addTradeResponse = {
      stockName: this.stockName,
      buyQuantity: this.buyQuantity,
      buyPrice: this.buyPrice,
      tradeType: this.tradeType,
      tradeDescription: this.tradeDescription
    }

    console.log(this.addTradeResponse);
    this.tradeService.addTrade(this.addTradeResponse).subscribe({
      next: data => {
        if(data.responseCode === '2001') {
          console.log(data.responseMessage)
          this.router.navigateByUrl('/home')
        } else if (data.responseCode === '4001') {
          this.errorMessage = data.responseMessage;
          this.showError = true;
        }
      },
      error: err => console.log(err)
    });

  }

}
