import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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

  passwordValidator2(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      const password = c.get('password');
      const confirmPassword = c.get('confirmPassword');
  
      return password?.value === confirmPassword?.value ? null : { mismatch: true };
    };
  }
 

  passwordValidator(group: FormGroup) {
    
      const password = group.get('password');
      const confirmPassword = group.get('confirmPassword');
  
      return password?.value === confirmPassword?.value ? null : { mismatch: true };
  }
  

}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    if(control === null || control.parent === null) return false;
      return control.parent.invalid && control.touched;
  }
}
