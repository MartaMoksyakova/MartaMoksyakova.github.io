import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { Subscription } from 'rxjs';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { OrdersService } from 'src/app/shared/services/orders.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  getProducts: Array<IProduct>=[];
  totalPrice: number;
  basketSubscription: Subscription;
  productSubscription: Subscription;
  count: number = 0;
  cloudCategories: Array<ICategory>=[]
  public isVisible: boolean = false;



  constructor(private ordersService: OrdersService,
    private catService: CategoriesService,

    ) { }

  ngOnInit(): void {
this.getProductsLength();
this.basketFromLocal();
this.getCategories()
  }

  private getProductsLength():void{
    this.productSubscription = this.ordersService.basket.subscribe(() => {
      this.basketFromLocal();

    })
  }
  private basketFromLocal(): void {
    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.getProducts = JSON.parse(localStorage.getItem('basket'));
      const count = this.getProducts.reduce(
        (total, accum) => total + accum.count,
        0
      );
      this.count = count;
    }
  }
  private getCategories() {
    this.basketSubscription = this.catService.getFirebaseCategories().subscribe((data) => {
      this.cloudCategories = data.map((cat) => {
        const data = cat.payload.doc.data() as ICategory;
        const id = cat.payload.doc.id;
        data.id = id;
        return data;
      });
    });
  }

  showAlert() : void {
    if (this.isVisible) { 
      return;
    } 
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
  
}
