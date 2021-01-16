import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/services/products.service';
import { IProduct } from '../shared/interfaces/product.interface';
import { OrdersService } from '../shared/services/orders.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product : IProduct;
  image: Array<string>;
  images: any;
  public isVisible: boolean = false;
  productSizes = [
    {size: '35',  checked: false},
    {size: '36', checked: false},
    {size: '37', checked: false},
    {size: '38', checked: false},
    {size: '39', checked: false},
    {size: '40', checked: false},
    {size: '41', checked: false},
    {size: '42', checked: false}

    ];  

  
  constructor(
    private prodService: ProductsService,
    private location: Location,
    private route: ActivatedRoute,
    private ordersService: OrdersService,
  ) {} 

  
  ngOnInit(): void {
  this.getMyProduct()
  }
 
  
  productCount(product: IProduct, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
  }

  getMyProduct(): void{
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id); 
    this.prodService.getOneFirebaseProduct(id)
    .then(data => {
      this.product = data.data() as  IProduct;
      console.log(this.product);  

    })
 
  }
  change(product): void {
    this.images = product.target.currentSrc
    console.log(this.images)
  }
  addToBasket(product: IProduct): void {
    let order: IProduct[] = [];
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      order = JSON.parse(localStorage.getItem('basket'));
      if (order.some((prod) => prod.id === product.id)) {
        const index = order.findIndex((prod) => prod.id === product.id);
        order[index].count += product.count;
      } else {
        order.push(product);
      }
    } else {
      order.push(product);
      
    }
    localStorage.setItem('basket', JSON.stringify(order));
    product.count = 1;
    this.ordersService.basket.next(order);
    console.log(order) 
  }

  backToProducts(): void {
    this.location.back();
  }
  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }
 
}
