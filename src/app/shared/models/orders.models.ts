import { IOrder } from '../interfaces/orders.interface';

export class Order implements IOrder {
    constructor(
        public id,
        public userName,
        public userPhone,
        public userAdress,
        public ordersDetails,
        public totalPayment,
        public date,
        public userComment?,
    ) {}
}