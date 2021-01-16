import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOrder } from 'src/app/shared/interfaces/orders.interface';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {
  cloudOrders: IOrder[] = [];
  subscription: Subscription;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOrders(): void {
    this.subscription = this.ordersService.getFirebaseOrders().subscribe((data) => {
      this.cloudOrders = data.map((order) => {
        const o = order.payload.doc.data() as IOrder;
        return o;
      });
    });
  }

  deleteOrder(order: IOrder) {
    this.ordersService.deleteFirebaseOrder(order).then(() => {
      this.getOrders();
    });
  }

 
}
