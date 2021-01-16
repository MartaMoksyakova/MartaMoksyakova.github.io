import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';
import { IOrder } from '../interfaces/orders.interface';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  userID: string
  
  basket: Subject<any> = new Subject<any>();
  constructor(
    private firestore: AngularFirestore,
  ) {}

  addFirebaseOrder(order: IOrder) {
    return this.firestore
      .collection('orders')
      .doc(order.id.toString())
      .set({ ...order })
      .then(() => console.log('order added'))
      .catch((error) => console.log(error));
  }

  getFirebaseOrders() {
    return this.firestore.collection('orders').snapshotChanges();
  }

  deleteFirebaseOrder(order) {
    return this.firestore.collection('orders').doc(order.id).delete();
  }
  updateOrderInfo(order) {
    return this.firestore
      .collection('users')
      .doc(this.userID)
      .collection('orders')
      .doc(order.id)
      .set({ ...order });
  }
}
