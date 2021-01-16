import { IProduct } from './product.interface';

export interface IOrder {
    id: number;
    userName: string;
    userPhone: string;
    userAdress: string;
    ordersDetails: Array<IProduct>;
    totalPayment: string;
    date: number;
    userComment?: string;
}