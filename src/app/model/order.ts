export type Order = {
    id: number,
    customerName: any,
    phoneNumber?: number,
    customeremail: string,
    date: Date,
    customerdoornumber?: number,
    customerstreet: string,
    cusomercity: string,
    customerstate: string,
    cumstomerzipcode?: number,
    citation?:any,
    productName: string,
    quantity?: number,
    price?: number,
    totalAmount: number
}