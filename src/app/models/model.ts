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