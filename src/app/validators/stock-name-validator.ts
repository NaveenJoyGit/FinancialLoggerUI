import { AbstractControl, FormControl } from "@angular/forms";
import { NseDataService } from "../service/nse-data.service";

export class StockNameValidator {
    public constructor(private nseService: NseDataService) { }

    nseStockNameValidator(control: AbstractControl) {
        const formStockName = control.value;
        if ((control.value !== null && control.value !== undefined) && control) {
            /* Make Http call to identify if it is a valid stock name*/
            // this.nseService.getNSeStockData(formStockName)
            control.valueChanges.subscribe({
                next: res => this.getNseData(res),
                error: err => console.log(err)
            })
        }
    }

    getNseData(res: FormControl) {
        const stockName = res.value;
        this.nseService.getNSeStockData(stockName).subscribe(res => console.log);
    }

}


