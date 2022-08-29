export class StockUtils {

    public static parseAndReturnNumber(unParsedNumber: string) {
        return unParsedNumber.replace(',', '');
    }

}