import { Component, OnInit, TemplateRef} from '@angular/core';
import { CategoriesService } from '../../shared/services/categories.service';
import { ProductsService } from '../../shared/services/products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'firebase/storage'
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../../shared/interfaces/product.interface';
import { ICategory } from 'src/app/shared/interfaces/category.interface';
import { Product } from '../../shared/models/product.model';






@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
  
})
export class AdminProductsComponent implements OnInit {
  uploadProgress: Observable<number>;
  adminCategory: Array<ICategory> = [];
  adminProducts: Array<IProduct> = [];
  subscription: Subscription;
  productImagesArray: Array<string>=[]; 
  isEdited: boolean = false;
  productID: string;
  p: number = 1;
  config = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1,
    // totalItems: this.filteredProducts.length,
  };
  

  public addProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.pattern('^[А-Яа-я ]+$')]),
    productDescription: new FormControl('', [Validators.required]),
    productCategory: new FormControl('', Validators.required),
    productPrice: new FormControl(null, Validators.required),
    productImage: new FormControl('', Validators.required),
    productSizes: new FormControl('', Validators.required),

    
  })
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
    private catService: CategoriesService,
    private afStorage: AngularFireStorage,
    private prodService: ProductsService,
    // private modalService: BsModalService,
    
  ) { 
    
    }


  ngOnInit(): void {
    this.getCategory();
    this.getProduct();
    
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }


  

  getCategory(){
    this.subscription=this.catService.getFirebaseCategories().subscribe( data => {
      this.adminCategory = data.map(
         category => {
          const data = category.payload.doc.data() as ICategory;
          return data;
        }
      )
    })

  }
  
  

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = `images/${this.uuid()}.${file.type.split('/')[1]}`;
    const task = this.afStorage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges()
    console.log(this.uploadProgress)
    task.then( e => {
      this.afStorage.ref(`${e.metadata.fullPath}`)
       .getDownloadURL()
         .subscribe( url => {
           this.productImagesArray.push(url);
           console.log(this.productImagesArray)
      })
    })
  }
  

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
  addProduct(){
    const product:IProduct = new Product ('1', this.addProductForm.value.productCategory, this.addProductForm.value.productName,  this.addProductForm.value.productDescription, this.addProductForm.value.productPrice, 1, this.productImagesArray, this.addProductForm.value.productSizes  )    
    console.log(product)   
    if(this.adminProducts.length > 0) {
      this.adminProducts = this.adminProducts.sort(function  (a: IProduct, b:IProduct) {
        return +a.id - +b.id;
      })
      product.id = (+this.adminProducts.slice(-1)[0].id + 1).toString(); 
    }    
      this.prodService.addFirebaseProduct(product)
      .then(
        () => {
          this.addProductForm.reset();
        }    
      )      
}
getProduct(){
  this.subscription=this.prodService.getFirebaseProduct().subscribe( data => {
    this.adminProducts = data.map(
       cat => {
        const data = cat.payload.doc.data() as IProduct;
        return data;
      }
    )
    if(this.adminProducts.length > 0) {
      this.adminProducts = this.adminProducts.sort(function  (a: IProduct, b:IProduct) {
        return +a.id - +b.id;
      })   
    }  
  })
}
deleteProduct(p: IProduct, id: string): void {
  this.prodService.deleteFirebaseProduct(p.id, p)
  .then(
    () => {
      this.getProduct();    
    }  
  )
  .catch(
    error => console.log(error)
  ) 
  }
  onPageChange(page: number) {
    this.config.currentPage = page;
    window.scrollTo(0, 450);
  }
}
