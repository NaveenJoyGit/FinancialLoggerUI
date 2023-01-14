export interface AddTradeResponse {
    stockName: string,
    buyQuantity: number,
    buyPrice: string,
    tradeType: string,
    tradeDescription: string
} 

export interface SignUpFormResponse {
    userName: string,
    firstName: string,
    lastName: string,
    password: string
}

export interface CommonResponse<T> {
    responseCode: string
    responseMessage: string
    responseData: T
  }

export interface ViewTrades {
    stockName: string,
    buyPrice: string,
    currentPrice: string,
    profitOrLoss: string,
    tradeStatus: string,
    tradeValue: string
}