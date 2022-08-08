import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { NseDataService } from './nse-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  isValidStockName: boolean = false;

  constructor(private nseService: NseDataService) { }

  stockNameValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const valueControl = control as FormControl;
      this.validateStockName(valueControl);
      valueControl.valueChanges.pipe()
      if (this.isValidStockName) {
        console.log(valueControl);
        return null;
      }
      else {
        this.isValidStockName = false;
        return {
          invalidStockName: true
        }
      }
    }
  }

  validateStockName(stock: AbstractControl | null): boolean {
    stock?.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe({
      next: valueControl =>
        this.getStockName(valueControl)
    })
    if (this.isValidStockName === true) return true;
    return false;
  }

  getStockName(stockName: string) {
    this.nseService.getNSeStockData(stockName).subscribe({
      next: res => {
        if(res.responseCode === '2001') {
          console.log(res);
          this.isValidStockName = true;
        } 
      }
    })
  }


}
