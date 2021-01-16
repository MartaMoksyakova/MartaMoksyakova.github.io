import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { IOrder } from '../../shared/interfaces/orders.interface';
import { Order } from '../../shared/models/orders.models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  providers: [
    {
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true},
    
  }
]
})
export class BasketComponent implements OnInit {
  order = {
    userName: '',
    userPhone: '',
    userAdress: '',
    userComment:''
  };
  
  localProducts: IProduct[] = [];
  totalPrice: number;
  subscribe: Subscription = new Subscription();
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  public isVisible: boolean = false;

  
  constructor(private orderService: OrdersService,
    private router: Router,
    private _formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
      
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.getBasket();
    
  }
  phoneMask = [
   
    '(',
    /[0]/, 
    /\d/,
    /\d/,
    ')',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/, 
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  private getBasket(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
    }
    this.getTotalPrice();
  }
  productCount(product: IProduct, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
    this.getTotalPrice();
    this.updateLocalProducts();
    this.orderService.basket.next(this.order);
  }
  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  getTotalPrice(): void {
    this.totalPrice = this.localProducts.reduce((total, elem) => {
      return total + elem.count * elem.price;
    }, 0);
  }
  updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.localProducts));
    this.orderService.basket.next(this.localProducts);
  }
 

  deleteProduct(product: IProduct) {
    const index = this.localProducts.findIndex(
      (prod) => prod.id === product.id
    );
    this.localProducts.splice(index, 1);
    this.updateLocalProducts();
    this.getBasket();
  }

  addOrder(form: NgForm): void {
    const date: number = Date.now();
    const order: IOrder = new Order(
      this.uuid(),
      this.order.userName,
      this.order.userPhone,
      this.order.userAdress,
      this.localProducts,
      this.totalPrice.toString(),
      date
    );
    if (this.order.userComment !== null) {
      order.userComment = this.order.userComment;
    }
      
    this.localProducts = [];
    localStorage.setItem('basket', JSON.stringify(this.localProducts));
    this.orderService.basket.next(this.localProducts);
    this.orderService.addFirebaseOrder(order).then(() => {
      this.router.navigateByUrl('/');
      this.localProducts = [];
      this.updateLocalProducts();
    });
  }
  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }
  
}
