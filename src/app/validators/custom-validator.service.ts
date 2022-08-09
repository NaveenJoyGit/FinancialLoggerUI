import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, tap } from 'rxjs';
import { NseDataService } from '../service/nse-data.service';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  isValidStockName: boolean = false;

  constructor(private nseService: NseDataService) { }

  stockNameValidator(controlName: string): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const stockName = control?.value;
      return this.nseService.getNSeStockData(stockName).pipe(
        map(res => {
          if (res.responseCode == '2001') {
            console.log('Validated stock name from backend.....')
            return null;
          } else {
            console.log('Not yet valid.....')
            return { isValiodStockName: false }
          }
        }, tap(res => {
          console.log('Tapping response......')
          console.log(res)
        }))
      )
    }
  }

}
