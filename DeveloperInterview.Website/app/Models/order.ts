import { IProduct } from "./product";

export interface IOrder {
    FirstName: string,
    LastName: string,
    products: IProduct[],
    OrderId: number,
    ProductId: number,
    ProductName: string,
    Price: number,
    OrderDate: Date,
    CustomerId: number,
    ProductRating: number,
    Quantity: number
}