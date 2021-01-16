import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';

import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class ProductComponent implements OnInit {

  adminProduct: Array<IProduct> = [];
  filteredProducts: Array<IProduct> = [];
  cloudProductImage:Array<string>=[];
  subscription: Subscription;
  categoryName:'';
  p: number = 1;
  config = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1,
    totalItems: this.filteredProducts.length,
  };

 

  constructor(
    private prodService: ProductsService,
    private catService: CategoriesService,
    private afStore: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    
  ) { 
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd ) {
        let category = this.activatedRoute.snapshot.paramMap.get('category');
        this.getProducts(category);
      }
    })
  }

  ngOnInit(): void {
    this.getProducts();
    // window.scroll(0,0);


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getProducts(prod?): void {
    prod = prod || this.activatedRoute.snapshot.paramMap.get('category');
  this.subscription=this.prodService.getFirebaseProduct().subscribe( data => {
    this.adminProduct = data.map(
       product => {
        const data = product.payload.doc.data() as IProduct;
        return data;
      })
      if(this.adminProduct.length > 0) {
        this.adminProduct = this.adminProduct.sort(function  (a: IProduct, b:IProduct) {
          return +a.id - +b.id;
        })
      this.filteredProducts = this.adminProduct.filter(product => product.category.name === prod);
      }
      this.config.totalItems = this.filteredProducts.length;
      
      
  })
}
onPageChange(page: number) {
  this.config.currentPage = page;
  window.scrollTo(0, 0);
}

}
